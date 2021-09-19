import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs';
import { Button, Heading } from 'pipeline-ui';

var myLog = [];

const reach = loadStdlib('ALGO-devnet')

async function test() {
  const startingBalance = reach.parseCurrency(1000);

  const accAlice = await reach.newTestAccount(startingBalance);
  const accBob = await reach.newTestAccount(startingBalance);

  const fmt = (x) => reach.formatCurrency(x, 4);
  const getBalance = async (who) => fmt(await reach.balanceOf(who));
  const beforeAlice = await getBalance(accAlice);
  const beforeBob = await getBalance(accBob);

  const ctcAlice = accAlice.deploy(backend);
  const ctcBob = accBob.attach(backend, ctcAlice.getInfo());

  const FINGERS = [0, 1, 2, 3, 4, 5];
  const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

  const Player = (Who) => ({
    ...reach.hasRandom,
    getFingers: async () => {
      // const fingers = Math.floor(Math.random() * 3);
      const fingers = Math.floor(Math.random() * 6);
      myLog.push(`${Who} shoots ${FINGERS[fingers]} fingers`);
      // build in occasional timeout
      if (Math.random() <= 0.01) {
        for (let i = 0; i < 10; i++) {
          myLog.push(`${Who} takes their sweet time sending it back...`);
          await reach.wait(1);
        }
      }
      return fingers;
    },
    getGuess: async (fingers) => {
      // guess should be greater than or equal to number of fingers thrown
      // const guess= Math.floor(Math.random() * 3);
      const guess = Math.floor(Math.random() * 6) + FINGERS[fingers];
      // occassional timeout
      if (Math.random() <= 0.01) {
        for (let i = 0; i < 10; i++) {
          myLog.push(`${Who} takes their sweet time sending it back...`);
          await reach.wait(1);
        }
      }
      myLog.push(`${Who} guessed total of ${guess}`);
      return guess;
    },
    seeWinning: (winningNumber) => {
      myLog.push(`Actual total fingers thrown: ${winningNumber}`);
      myLog.push(`----------------------------`);
    },

    seeOutcome: (outcome) => {
      myLog.push(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
    informTimeout: () => {
      myLog.push(`${Who} observed a timeout`);
    },
  });

  await Promise.all([
    backend.Alice(ctcAlice, {
      ...Player('Alice'),
      wager: reach.parseCurrency(5),
      ...reach.hasConsoleLogger,
    }),
    backend.Bob(ctcBob, {
      ...Player('Bob'),
      acceptWager: (amt) => {
        myLog.push(`Bob accepts the wager of ${fmt(amt)}.`);
      },
      ...reach.hasConsoleLogger,
    }),
  ]);
  const afterAlice = await getBalance(accAlice);
  const afterBob = await getBalance(accBob);

  myLog.push(`Alice went from ${beforeAlice} to ${afterAlice}.`);
  myLog.push(`Bob went from ${beforeBob} to ${afterBob}.`);

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cLog: [] }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ cLog: myLog }), 300);
  }

  render() {
    return (<div align="center">
      <Heading>Reach Morra via Algorand</Heading>
      <Button onClick={() => test()}>Deploy Morra!</Button><br></br>
      {this.state.cLog.map(row => {return(<div>{row}</div>)})}
    </div>)
  }
}
export default App;

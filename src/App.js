import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs';
import { Button, AlgoAddress } from 'pipeline-ui';

var acc = {};

const env = {
  ALGOD_SERVER: "https://algoexplorerapi.io",
  ALGOD_PORT: "",
  ALGOD_TOKEN: "",
  ALGO_INDEXER_SERVER: "https://algoexplorerapi.io/idx2/"
};



const reach = loadStdlib('ALGO-live')
//reach.setSignStrategy('AlgoSigner');
reach.setProviderByEnv(env);

async function test() {
  const accAlice = await reach.newTestAccount(reach.parseCurrency(5));
  const accBob = await reach.newTestAccount(reach.parseCurrency(10));
  const ctcAlice = accAlice.deploy(backend);
  const ctcBob = accBob.attach(backend, ctcAlice.getInfo());
  await Promise.all([
    backend.Alice(ctcAlice, {
      request: reach.parseCurrency(5),
      info: 'If you wear these, you can see beyond evil illusions.'
    }),
    backend.Bob(ctcBob, {
      want: (amt) => console.log(`Alice asked Bob for ${reach.formatCurrency(amt)}`),
      got: (secret) => console.log(`Alice's secret is: ${secret}`),
    }),
  ]);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "" }
  }

  deploy = () => {

    reach.getDefaultAccount().then(data => {
      this.setState({ address: data.networkAccount.addr });
      acc = data;
    })
  }
  render() {
    return (<div align="center"><Button onClick={this.deploy}>Initialize</Button>
      <AlgoAddress address={this.state.address} />
      <Button onClick={() => test()}>Test</Button>
    </div>)
  }
}
export default App;

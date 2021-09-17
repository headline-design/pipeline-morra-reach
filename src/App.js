import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs';
import { Button, AlgoAddress } from 'pipeline-ui';

var acc = {};


const reach = loadStdlib('ALGO')
//reach.setSignStrategy('AlgoSigner');
//reach.setProviderByName('TestNet');

class App extends Component{
  constructor(props){
    super(props);
    this.state = {address: ""}
  }

  deploy = () =>{
   
    reach.getDefaultAccount().then(data => {
      this.setState({address: data.networkAccount.addr});
      acc = data;
      const ctc = acc.deploy(backend);
      console.log(ctc);
    } )
  }
  render(){
    return(<div align="center"><Button onClick={this.deploy}>Initialize</Button>
    <AlgoAddress address={this.state.address}/>
    </div>)
  }
}
export default App;

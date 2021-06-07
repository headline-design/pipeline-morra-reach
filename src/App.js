import logo from './logo.svg';
import './App.css';
// import * as reach from '@reach-sh/stdlib/dist/esm/ALGO';
import {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs';
import { useEffect, useState } from 'react';
const reach =  loadStdlib('ALGO')
reach.setSignStrategy('AlgoSigner');
reach.setProviderByName('TestNet');
// EHRODOBUE7R5SRM57CVMP77DQJOK6SDZSUV5FMTFIEW57JCGN2N6OL5I3M

// 4OH4VAKCGNLFNR2B7HLVKGQJDJAJQFIAGE4NY5KBNGVN4GM5A2O6H66HPY
let interact ={}
 let acc ={}
 const WINNING_STATES= ["Its a draw", "Player 1 wins","Player 2 wins"];
 let stdlib ={}
 function App() {
  useEffect(async()=>{
   
    acc = await  reach.getDefaultAccount();
    stdlib = reach;
    const addr = await acc.getAddress();
    const balAtomic = await reach.balanceOf(acc);
    console.log(addr);
  console.log(balAtomic);
    interact = {...stdlib.hasRandom };
    return("Component unmounted");
  },[1])
const[mode,setMode]=useState("begin")
const[player,setPlayer]=useState("")

const selectPlayer=async(player)=>{
  setMode("play")
  setPlayer(player)
}

const deployContract=async(data)=>{
  let{amount, prediction,wager} =data;
  interact.play = ()=>{
    console.log(`Player 1 played ${amount} with prediction ${prediction}`)
    let retVal = [ parseInt(amount),parseInt(prediction)];
    console.log(retVal)
        return retVal;

        };
  interact.wager = parseInt(wager);
  console.log(interact);
  // interact.acceptWager=()=>true;
  
  interact.displayWinner= (index)=>{
        console.log(`Displaying Result for Result:  ${WINNING_STATES[index]}`)
    };
    const ctc = acc.deploy(backend)
    console.log(ctc,"ctcc");
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    console.log(ctcInfoStr)
    setMode("played")
    await backend.Player1(ctc,interact)
}

const connectToContract=async(data)=>{
  console.log(data);
  let{amount, prediction,wager,ctcInfo} =data;
  interact.play = async()=>{
    console.log(`Player 2 played ${amount} with prediction ${prediction}`)
        return [parseInt(amount),parseInt(prediction)];
        };
  // interact.wager = wager;
  interact.acceptWager=(wager)=>{
    console.log(`${wager} accepted`)
    return true};
  
  interact.displayWinner= (index)=>{
        console.log(`Displaying Result for Result:  ${WINNING_STATES[index]}`)
    };
    // {
    //   "ApplicationID": 16037941,
    //   "creationRound": 14630392,
    //   "Deployer": "EHRODOBUE7R5SRM57CVMP77DQJOK6SDZSUV5FMTFIEW57JCGN2N6OL5I3M"
    // }
    const ctc = acc.attach(backend,ctcInfo)
    console.log(ctc,"ctcc");
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    console.log(ctcInfoStr)
    setMode("played")
    await backend.Player2(ctc,interact)

}

let renderValue = ( <div className="childDiv">
   <h2 className="game-title">Morra Game</h2>
<p>Choose Player?</p>
<button className= "playerButton" onClick={()=>{selectPlayer("player1")}}>Player 1</button>
<button className= "playerButton" onClick={()=>{selectPlayer("player2")}}>Player 2</button>
</div>)
  if(mode == "play"){
    if(player=="player1"){
      renderValue= <Player1 deployContract={deployContract}></Player1>
    }else{
      renderValue= <Player2 connectToContract={connectToContract}></Player2>
    }
    }

  if(mode  == "played"){
    renderValue=(<div className="childDiv">
    <h2 className="game-title">Morra Game</h2>
    <div className="loader">Waiting for Player 2...</div>
    <p className="wait-p2">Waiting for Player 2</p>
    <h3 className= "inputIdentifier">Player 1 Prediction:</h3>
    <h3 className= "inputIdentifier">Player 2 Prediction:</h3>
    <h3 className= "inputIdentifier">Player 1 Fingers:</h3>
    <h3 className= "inputIdentifier">Player 2 Fingers:</h3>
  </div> )
  }


  return (
    <div className="App centerDiv">
      {renderValue}
    </div>
  );
}


function Player1(props){
  const[amount,setAmount] = useState('');
  const[prediction,setPrediction] =  useState('');
  const[wager,setWager]= useState('');
  return( <div className="childDiv">
  <h2 className="game-title">Morra Game</h2>
  {/* <div className="loader-container">
     <div className="loader">Loading...</div>
  </div> */}

    <p  className= "inputIdentifier">Wager</p>
    <input className= "input" placeholder="Wager" value={amount} type="number" onChange={(event)=>{
       setAmount(event.currentTarget.value)
    }}/>
    <p  className= "inputIdentifier">Prediction</p>
    <input className= "input" placeholder="Prediction" value={prediction} type="number" onChange={(event)=>{
        setPrediction(event.currentTarget.value)
    }}/>

    <p  className= "inputIdentifier"> Amount</p>
    <input className= "input" placeholder="Amount" type="number" value={wager} onChange={(event)=>{
        setWager(event.currentTarget.value)
    }}/>
    <button className= "playerButton" onClick={()=>{props.deployContract({amount,prediction,wager})}}>Deploy Contract</button>
</div> )
}

function Player2(props){
      const [mode,setMode] = useState("connect");
      const[amount,setAmount] = useState('');
      const[prediction,setPrediction] =  useState('');
      const[wager,setWager]= useState('');

      const[address,setAddress] = useState('');

      let whatToRender = (<div  className="childDiv">
      <h2 className="game-title">Morra Game</h2>
      <p  className= "inputIdentifier">Enter the contract address you would love to connect to </p>
      <input  className= "input" placeholder="Enter Contract Address" value={address} onChange={(event)=>{
          setAddress(event.currentTarget.value);
      }}/>
      <button className= "playerButton" onClick={()=>{
        // props.connectToContract()
          setMode("connected");
        }}>Proceed</button>  
    </div>)
    if(mode == "connected"){
      whatToRender = (<div className="childDiv">
      <h2 className="game-title">Morra Game</h2>
      <p  className= "inputIdentifier">Wager</p>
    <input className= "input" placeholder="Wager" value={amount} type="number" onChange={(event)=>{
       setAmount(event.currentTarget.value)
    }}/>
    <p  className= "inputIdentifier">Prediction</p>
    <input className= "input" placeholder="Prediction" value={prediction} type="number" onChange={(event)=>{
        setPrediction(event.currentTarget.value)
    }}/>

    <p  className= "inputIdentifier"> Amount</p>
    <input className= "input" placeholder="Amount" type="number" value={wager} onChange={(event)=>{
        setWager(event.currentTarget.value)
    }}/>
      <button className= "playerButton" onClick={()=>{
        props.connectToContract({amount,wager,prediction,ctcInfo:JSON.parse(address)})
        
        }}>Connect</button> 
      </div>)
    }

  return  (whatToRender)

}

export default App;
// reach.setSignStrategy('AlgoSigner');
// reach.setProviderByName('TestNet');
// let stdlib = await loadStdlib();
//   const acc = await  reach.getDefaultAccount();
//   const addr = await acc.getAddress();
//   const balAtomic = await reach.balanceOf(acc);
//  console.log(addr);
//  console.log(balAtomic);
//  const interact = {...stdlib.hasRandom };
//  interact.play = async()=>{
//     return [5,10];
//     };
//     interact.wager = 3;
//     interact.acceptWager=()=>true;
//     const WINNING_STATES= ["Its a draw", "Player 1 wins","Player 2 wins"];
//     interact.displayWinner= (index)=>{
//       console.log(`Displaying Result for Result:  ${WINNING_STATES[index]}`)
//   };
//   const ctc = acc.deploy(backend)
//   console.log(ctc,"ctcc");
//   const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
//   console.log(ctcInfoStr)
//   await backend.Player1(ctc,interact)
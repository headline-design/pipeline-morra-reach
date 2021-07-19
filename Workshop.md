# Workshop: Morra 
In this workshop, I will explain the Project Ayeni Tosin and I submitted for the Universities Unchained Bounty hack. It's actually a Morra game, just in case you don't know what morra is,  Morra is a game where players submit their fingers along with a prediction of the total amount of all players fingers and whoever gets the right prediction is the winner. In our project, we made our variation of Morra in such a way that a wager could be placed on each game and whoever wins the game takes the total wager. You can also go through this [article](https://anjola4jeez.medium.com/developing-apps-that-run-on-more-than-one-blockchain-with-reach-9a3232ed3386) to have a grasp of the experience we had while working on the project

# Problem Analysis
The first step in any program design is to perform problem analysis and determine what information is relevant to the problem. When writing decentralized applications in Reach, this information analysis includes an analysis of the set of [participants](https://docs.reach.sh/ref-model.html#%28tech._participant%29) involved in a computation.

- Who is involved in this application?
- What information do they know at the start of the program?
- What information are they going to discover and use in the program?
- What funds change ownership during the application and how?
You should write your answers in your Reach program (index.rsh) using a comment.  /* Remember comments are written like this. */

### Stop!
Write down the problem analysis of this program as a comment.

Our Answers can be found below:
- Our Program Has two players, let's call them Player1 and Player2. Player1 deploys the contract and Player2 connects to it.
-  Player1 can't know Player2's fingers before Player1 plays and Player2 can't know player1's fingers before player2 plays

- The information that will be available to them is the number of fingers each of them submitted along with their predictions but they can only know this after both Players have played.

It is completely okay if your answers differ from ours. If you're confident that your answers are correct you can continue with them through this workshop.


# Data Definition
In this step, we will describe how our program achieve it's purpose in terms of the data it needs for our participants to take the necessary steps, we will look at the functions we need to describe our participants behaviour as well as the variables we need to do this:

```rsh
const AllPlayers = {
    ...hasRandom, 
    play:Fun([],Array(UInt,2)),
    displayWinner:Fun([UInt],Null)
};

const Player1 = {
    wager:UInt,
    ...AllPlayers
}
const Player2 = {
    acceptWager: Fun([UInt],Bool),
    ...AllPlayers
}
[Participant('Player1',Player1),Participant('Player2',Player2)]
```

We simply allow both players  to `play` sending in a two numbers one that represents the number of fingers and the other that represent's the prediction, and we also allow them to view the winner with the `displayWinner` function, we also have the variable `wager` that is specific to the first player who deploy's the contract and `acceptWager` that is specific to the second person who connect's the contract.

# Communication Construction
Now,let's see the communication flow in our project, meaning the order of interactions that have to happen:

1. Player1 deploys the contract
2. Player2 Connects to the contract
3. Player1 sends his Wager
4. Player2 accepts Player1 wager
5. Player1 sends the number of fingers he wants to play
6. Player2 sends the number of fingers he wants to play
7. The program goes back to step 5 if there is no winner.
8. Display the winner

After step 6, the program computes who the winner is and displays it but if it's a draw, the program makes sure steps 5 and 6 are repeated until there is a winner.


 **Stop!** Write down the communication pattern for this program as code.

Our contract should now look like:
```rsh
 A.only(()=>{
const wager = declassify(interact.wager);

    });
    A.publish(wager).pay(wager);

    commit();

    B.only(()=>{
        const acceptWager = declassify(interact.acceptWager(wager))
    });
    B.pay(wager); 
    var outcome =0
    
    invariant(balance()==2*wager);
    while (outcome == 0){
        commit()
        A.only(()=>{
            const [_finger1,_prediction1] = interact.play();
            const [_finger1Comit,_finger1Salt] = makeCommitment(interact,_finger1);
            const [_prediction1Comit,_prediction1Salt] = makeCommitment(interact,_prediction1);
            const prediction1Comit = declassify(_prediction1Comit)
            const finger1Commit = declassify(_finger1Comit)
            // const  [fingers1,prediction1] = declassify(interact.play())
        });
        A.publish(finger1Commit, prediction1Comit);
        commit()
        unknowable(B,A(_finger1,_prediction1,_finger1Salt,_prediction1Salt))
        B.only(()=>{
            const [fingers2,prediction2]  = declassify(interact.play())
        });
        B.publish(fingers2,prediction2);
        commit();

        A.only(()=>{
            const  [fingers1,finger1Salt] = declassify([_finger1,_finger1Salt])
            const [prediction1,prediction1Salt] = declassify([_prediction1,_prediction1Salt])
        });
        A.publish(fingers1,finger1Salt,prediction1,prediction1Salt);
     
        checkCommitment(finger1Commit,finger1Salt, fingers1)
        checkCommitment(prediction1Comit,prediction1Salt, prediction1)

        const totalFingers = fingers1 + fingers2;
        outcome = totalFingers == prediction1 &&  totalFingers == prediction2 ? 0:  totalFingers == prediction1 ? 1: totalFingers == prediction2 ? 2:0;
        continue;
    }
     assert(balance()==2*wager)
 
    const valToTrans = outcome == 1 ? [2,0] : outcome==2 ? [0,2] : [1,1]
    transfer(valToTrans[0]*wager).to(A)
    transfer(valToTrans[1]*wager).to(B)
    commit();

    each([A,B],()=>{
      interact.displayWinner(outcome);
    })
    exit();
```

We simply get the information we need from Player1 and do not publish it, we instead publish a commitment to it, and we use a cryptographic commitment scheme to make sure its correct after Player2 has made his move; hereby ensuring the secrecy of information and still maintaining it's integrity.

# Assertion Insertion
Due to simplicity of the code there is not a big concern about the assertions.But in the code above we make knowledge  assertions to make sure Player2 does not know what player1 has played. The line of code below is responsible for that assertion:
```rsh
  unknowable(B,A(_finger1,_prediction1,_finger1Salt,_prediction1Salt))
```
We also assert that the balance does not change after the while loop with the line:
```rsh
assert(balance()==2*wager)
```
## Full Reach code below:
```rsh
'reach 0.1'

const AllPlayers = {
    ...hasRandom, 
    play:Fun([],Array(UInt,2)),
    displayWinner:Fun([UInt],Null)
};

const Player1 = {
    wager:UInt,
    ...AllPlayers
}

const Player2 = {
    acceptWager: Fun([UInt],Bool),
    ...AllPlayers

}

export const main = Reach.App({},[Participant('Player1',Player1),Participant('Player2',Player2)],
(A,B)=>{

    A.only(()=>{
const wager = declassify(interact.wager);

    });
    A.publish(wager).pay(wager);

    commit();

    B.only(()=>{
        const acceptWager = declassify(interact.acceptWager(wager))
    });
    B.pay(wager); 
    var outcome =0
    
    invariant(balance()==2*wager);
    while (outcome == 0){
        commit()
        A.only(()=>{
            const [_finger1,_prediction1] = interact.play();
            const [_finger1Comit,_finger1Salt] = makeCommitment(interact,_finger1);
            const [_prediction1Comit,_prediction1Salt] = makeCommitment(interact,_prediction1);
            const prediction1Comit = declassify(_prediction1Comit)
            const finger1Commit = declassify(_finger1Comit)
            // const  [fingers1,prediction1] = declassify(interact.play())
        });
        A.publish(finger1Commit, prediction1Comit);
        commit()
        unknowable(B,A(_finger1,_prediction1,_finger1Salt,_prediction1Salt))
        B.only(()=>{
            const [fingers2,prediction2]  = declassify(interact.play())
        });
        B.publish(fingers2,prediction2);
        commit();

        A.only(()=>{
            const  [fingers1,finger1Salt] = declassify([_finger1,_finger1Salt])
            const [prediction1,prediction1Salt] = declassify([_prediction1,_prediction1Salt])
        });
        A.publish(fingers1,finger1Salt,prediction1,prediction1Salt);
     
        checkCommitment(finger1Commit,finger1Salt, fingers1)
        checkCommitment(prediction1Comit,prediction1Salt, prediction1)

        const totalFingers = fingers1 + fingers2;
        outcome = totalFingers == prediction1 &&  totalFingers == prediction2 ? 0:  totalFingers == prediction1 ? 1: totalFingers == prediction2 ? 2:0;
        // each([A,B],()=>{
        //    outcome==1?interact.displayWinner(outcome):null;
        //   })
        continue;
    }
    assert(balance()==2*wager)
 
    const valToTrans = outcome == 1 ? [2,0] : outcome==2 ? [0,2] : [1,1]
    transfer(valToTrans[0]*wager).to(A)
    transfer(valToTrans[1]*wager).to(B)
    commit();

    each([A,B],()=>{
      interact.displayWinner(outcome);
    })
    exit();

}
)
```

# Interaction Introduction

Since we are through with our Reach code, all that remains is to connect it to a frontend so users can play our Morra game. For this, i will be using a web frontend which is a React project, i do reccomend that you go through the [readme](https://github.com/Jesulonimi21/morra-react/blob/main/readme.md) file of this repo as it is a better way to understand things from the frontend perspective:

```css

.centerDiv{
  height: 100vh; /* Magic here */
  display: flex;
  justify-content: center;
  align-items: center;
}

.childDiv{
  border-width:1px;
  border-color: #4ABCD9;
  border-style: solid;
  width:70%;
  height:80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.playerButton{
  display:block;
  height:40px;
  width:120px;
  margin-top: 10px;
  border-radius: 10px;
  border-width: 0px;
  background-color: #4ABCD9;
  color: white;
  font-weight: bold;
}
.game-title{
  color: #4ABCD9;
}
.input{
  margin-top: 0px;
  width:"40%";
  height:40px;
  border: 2px solid  #4ABCD9;
  border-radius: 10px ;
 text-align: center;
}
.inputIdentifier{
  margin-bottom: 4px;
  color: #4ABCD9;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }

}
.wait-p2{
  margin-top: 0px;
}
.loader-container{
  position: absolute;
  background-color: white;
  box-shadow: 3px 3px #4abcd9, -3px -3px #4abcd9;
  width:200px;
  height: 200px;
  z-index: 100;
}
.loader,
.loader:before,
.loader:after {
  background: #4abcd9;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #4abcd9;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  z-index: 100;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
```
App.css

```js
import logo from './logo.svg';
import './App.css';
// import * as reach from '@reach-sh/stdlib/dist/esm/ALGO';
import {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs';
import { useEffect, useState } from 'react';

const reach =  loadStdlib('ALGO')
reach.setSignStrategy('AlgoSigner');
reach.setProviderByName('TestNet');

let interact = {}
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

const deployContract=async(data, callBack)=>{
  let{wager} = data;
  interact.play = async()=>{

    const fingersAndPrediction = await new Promise(resolveFingers =>{
      callBack(false,{playAgain:true,resolveFingers:resolveFingers})
       
    });

    console.log(fingersAndPrediction)
    console.log(`Player 1 played ${fingersAndPrediction[0]} with prediction ${fingersAndPrediction[1]}`)
    callBack(false,{player1Fingers:fingersAndPrediction[0],player1Prediction:fingersAndPrediction[1]})
    return fingersAndPrediction;
        };
  interact.wager = parseInt(wager);
  console.log(interact);
  // interact.acceptWager=()=>true;
  
  interact.displayWinner= (index)=>{
        console.log(`Displaying Result :  ${WINNING_STATES[index]}`)
        if(index>0){
          alert(`Displaying Result :  ${WINNING_STATES[index]}`);
        }
    };
    const ctc = acc.deploy(backend)
    console.log(ctc,"ctcc");
    let ctcInfoStr = "";
    try{
      ctcInfoStr =  JSON.stringify(await ctc.getInfo(), null, 2);
      alert("Click ok to copy contract address : "+ ctcInfoStr);
      navigator.clipboard.writeText(ctcInfoStr);
    }catch(error){
      alert(error);
      callBack(true);
      return;
    }
    console.log(ctcInfoStr)
    callBack(false,{});
    try{
     await backend.Player1(ctc,interact)
    }catch(error){
      console.log("An error occurred");
      console.error(error);
      callBack(true);
      alert(error);
    }
  
}

const connectToContract=async(data,callBack)=>{
  console.log(data);
  let{ctcInfo} =data;
  interact.play = async()=>{
    const fingersAndPrediction = await new Promise(resolveFingers =>{
      callBack(false,{playAgain:true,resolveFingers:resolveFingers})
       
    });

    console.log(fingersAndPrediction)
    console.log(`Player 2 played ${fingersAndPrediction[0]} with prediction ${fingersAndPrediction[1]}`)
    callBack(false,{player2Fingers:fingersAndPrediction[0],player2Prediction:fingersAndPrediction[1]})
    return fingersAndPrediction;
        };

  interact.acceptWager=(wager)=>{
    console.log(`${wager} accepted`)
    alert("By clicking ok, you accept to a wager of: " +wager);
    return true};
  
  interact.displayWinner= (index)=>{
        console.log(`Displaying Result for Result:  ${WINNING_STATES[index]}`)
        if(index>0){
          alert(`Displaying Result:  ${WINNING_STATES[index]}`)
        }
    };
    const ctc = acc.attach(backend,ctcInfo)
    console.log(ctc,"ctcc");

    let ctcInfoStr = {}
    try{ 
      ctcInfoStr =  JSON.stringify(await ctc.getInfo(), null, 2);
    }catch(error){
      console.error(error);
      alert(error);
      callBack(true);
      return;
    }
    console.log(ctcInfoStr)
    callBack(false,{})
    try{
      await backend.Player2(ctc,interact)
    }catch(error){
        callBack(true);
        alert(error)
        return;
    }
    

}

let renderValue = ( <div className="childDiv">
   <h2 className="game-title">Morra Game</h2>
<p>Choose Player?</p>
<button className= "playerButton" onClick={()=>{selectPlayer("player1")}}>Player 1</button>
<button className= "playerButton" onClick={()=>{selectPlayer("player2")}}>Player 2</button>
</div>)
  if(mode == "play"){
    if(player=="player1"){
      renderValue= <Player1 deployContract={deployContract} ></Player1>
    }else{
      renderValue= <Player2 connectToContract={connectToContract}  ></Player2>
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
  const [loading, setLoading] = useState(false);
  const[player1Fingers,setPlayer1Fingers] = useState('');
  const[player2Fingers,setPlayer2Fingers] = useState('');
  const [player2Prediction,setPlayer2Prediction] = useState('');
  const [player1Prediction,setPlayer1Prediction] =  useState('');
 let [resolveFingers,setResolvedFingers] = useState();
 console.log({resolveFingers:resolveFingers})
  //initial,played, playagain
  const[mode,setMode] = useState("initial") 
  let renderValue = (<div></div>);
  if(mode=="initial"){
    renderValue = (<div className="childDiv">
    <h2 className="game-title">Morra Game</h2>
  
      {loading?<div className="loader">Waiting for Player 2...</div>:null}
      <p  className= "inputIdentifier">Wager</p>
      <input className= "input" placeholder="Wager" value={wager} type="number" onChange={(event)=>{
         setWager(event.currentTarget.value)
      }}/>
 
      <button className= "playerButton" onClick={()=>{
        setLoading(true)
        props.deployContract({amount,prediction,wager},(error,data)=>{
          
            // setMode("played");
            // setLoading(false)
          
        
          console.log(error);
          if(!error){
            console.log(data);
            if(data.playAgain!=undefined){
              setResolvedFingers(()=>data.resolveFingers);
              setMode("playAgain");
            }else{

            
            setMode("played");
            console.log("was here");
              if(data.player1Fingers!=undefined){
                setPlayer1Fingers(data.player1Fingers);
              }
             if(data.player2Fingers!=undefined){
              setPlayer2Fingers(data.player2Fingers)
             }
             if(data.player1Prediction!=undefined){
               setPlayer1Prediction(data.player1Prediction);
             }
             if(data.player2Prediction!=undefined){
               setPlayer2Prediction(data.player2Prediction);
             }
            
            }
          }
        
        })
    
    }}>Deploy Contract</button>
  </div>);
  }

  if(mode == "played"){
   renderValue=(<div className="childDiv">
    <h2 className="game-title">Morra Game</h2>
    <div className="loader">Waiting for Player 2...</div>
    <p className="wait-p2">Waiting for Player 2</p>
    <h3 className= "inputIdentifier">Player 1 Prediction: {player1Prediction}</h3>
    {/* <h3 className= "inputIdentifier">Player 2 Prediction: {player2Prediction}</h3> */}
    <h3 className= "inputIdentifier">Player 1 Fingers: {player1Fingers}</h3>
    {/* <h3 className= "inputIdentifier">Player 2 Fingers: {player2Fingers}</h3> */}
  </div> )
  }
  if(mode == "playAgain"){
    renderValue=(<div className="childDiv">
                      <p  className= "inputIdentifier">Prediction</p>
                    <input className= "input" placeholder="Prediction" value={prediction} type="number" onChange={(event)=>{
                        setPrediction(event.currentTarget.value)
                    }}/>
                
                    <p  className= "inputIdentifier"> Fingers</p>
                    <input className= "input" placeholder="Amount" type="number" value={amount} onChange={(event)=>{
                        setAmount(event.currentTarget.value)
                    }}/>

            <button className= "playerButton" onClick={()=>{
            resolveFingers([parseInt(amount),parseInt(prediction)])
            }}>Play Again</button>
             </div>)
  }
  return( <div className="childDiv">
      {renderValue}
  </div>)
}

function Player2(props){
      const [mode,setMode] = useState("connect");
      const[amount,setAmount] = useState('');
      const[prediction,setPrediction] =  useState('');
      const[wager,setWager]= useState('');
      let [resolveFingers,setResolvedFingers] = useState();
      const[address,setAddress] = useState('');
      const[player2Fingers,setPlayer2Fingers] = useState('');
      const [loading, setLoading] = useState(false);
      const [player2Prediction,setPlayer2Prediction] = useState('');
      let whatToRender = (<div  className="childDiv">
      <h2 className="game-title">Morra Game</h2>
      {loading?<div className="loader">Waiting for Player 2...</div>:null}
      <p  className= "inputIdentifier">Enter the contract address you would love to connect to </p>
      <input  className= "input" placeholder="Enter Contract Address" value={address} onChange={(event)=>{
          setAddress(event.currentTarget.value);
      }}/>
      <button className= "playerButton" onClick={()=>{
        // props.connectToContract()
        setLoading(true)
        props.connectToContract({ctcInfo:JSON.parse(address)},(error,data)=>{
          console.log(error);
          if(!error){
            console.log(data);
            if(data.playAgain!=undefined){
              setResolvedFingers(()=>data.resolveFingers);
              setMode("playAgain");
            }else{
            setMode("connected");
            console.log("was here");
             if(data.player2Fingers!=undefined){
              setPlayer2Fingers(data.player2Fingers)
             }
             if(data.player2Prediction!=undefined){
               setPlayer2Prediction(data.player2Prediction);
             }
            
            }
          }

        })
         
        }}>Proceed</button>  
    </div>)
    if(mode == "connected"){
      whatToRender = (<div className="childDiv">
      <h2 className="game-title">Morra Game</h2>
      <div className="loader">Waiting for Player 1...</div>
      <p className="wait-p2">Waiting for Player 1</p>
  
      <h3 className= "inputIdentifier">Player 2 Prediction: {player2Prediction}</h3>
   
      <h3 className= "inputIdentifier">Player 2 Fingers: {player2Fingers}</h3>
    </div> )
    }

    if(mode == "playAgain"){
      whatToRender=(<div className="childDiv">
                        <p  className= "inputIdentifier">Prediction</p>
                      <input className= "input" placeholder="Prediction" value={prediction} type="number" onChange={(event)=>{
                          setPrediction(event.currentTarget.value)
                      }}/>
                  
                      <p  className= "inputIdentifier"> Fingers</p>
                      <input className= "input" placeholder="Amount" type="number" value={amount} onChange={(event)=>{
                          setAmount(event.currentTarget.value)
                      }}/>
  
              <button className= "playerButton" onClick={()=>{
              resolveFingers([parseInt(amount),parseInt(prediction)])
              }}>Play Again</button>
               </div>)
    }



  return  (whatToRender)

}

export default App;
```
App.js



# Conclusion
Thank you for following through with this workshop, i hope you were able to understand a thing or two about Reach better for any question or any clarification you can always send me a message on discord(jesulonimi#6311) or you can post the problem in the help channel of the Reach discord server and tag me(@jesulonimi)
Thanks


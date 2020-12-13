import React from "react";
import {useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import logo from "../mmsgilogo.png"
import $ from "jquery";


  function Puzzle(props){

    const [target,setTarget]=useState();
    const [gameState,setGameState]=useState("prep")
    const [cardOpened1,setCardOpened1]=useState(null);
    const [cardValue1,setCardValue1]=useState(null);
    const [cardOpened2,setCardOpened2]=useState(null);
    const [cardValue2,setCardValue2]=useState(null);
    const [puzzle,setPuzzle]=useState([])
    const [details,setDetails]=useState(props.details)
    const [ready,setReady]=useState(false);
    const [cardDone,setCardDone]=useState(0);
    



    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }
    function doubleValues(array) {
        var newArray = [];
        array.forEach(function (el) { newArray.push(el, el); });    
        return newArray;
      }

    useEffect(()=>{

        const longarray = Array.from({length: 40}, (_, index) => index + 1);
        const shuffledArray =getRandom(longarray,6);
        const double = doubleValues(shuffledArray);

        let indexarr =shuffleArray(double);
        indexarr=shuffleArray(indexarr)
        let arr=[]
        for (let i = 0; i <12;i++){
            let x =indexarr[i];
            let b = i+1
            arr.push([b,x])
        }
        console.log(arr)
        setPuzzle(arr)
        $("#beginning").fadeIn(1000)
        
    },[]);

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    function nextScene(){
        $("#beginning").fadeOut(1000,()=>{
        props.history.push(`/people`)
        })
    }
    function gameStart(){
        setGameState("game")
    }
    function rightfunction(value){
        return cardValue1===value 
    }
    // function runTime(){
    //     setId( setInterval(()=>{
    //         setTime(time+1)
    //     },1000)
    // }
    function flip(piece){

        if (cardOpened1===piece[0]){
            return 0
        }
        else if (cardOpened1===null){
            $(`#item${piece[0]}`).addClass("animate");
            setCardOpened1(piece[0])
            setCardValue1(piece[1])
        }
        else if (cardOpened1 !==null && cardOpened2===null){
            $(`#item${piece[0]}`).addClass("animate");
            setCardOpened2(piece[0])
            setCardValue2(piece[1])

            if(rightfunction(piece[1])){
                setTimeout(()=>{
                    $(`#item${cardOpened1}`).addClass("d-none");
                    $(`#item${piece[0]}`).addClass("d-none");
                    setCardOpened1(null)
                    setCardValue1(null)
                    setCardOpened2(null)
                    setCardValue2(null)
                    setCardDone(cardDone+1);
                },800)
                console.log(cardDone)
                if (cardDone===5){
                    $(".logo").fadeOut(1000)
                    setTimeout(()=>{
                        setGameState("fin")
                        
                    },1500)
                }
            }
            else{
                setTimeout(()=>{
                    // console.log(cardOpened1,cardOpened2);
                    $(`#item${cardOpened1}`).removeClass("animate");
                    $(`#item${piece[0]}`).removeClass("animate");
                    setCardOpened1(null)
                    setCardValue1(null)
                    setCardOpened2(null)
                    setCardValue2(null)
                },800)

            }
        }
    }
    
    
    return(
        
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div id="beginning" style={{display:"none"}}>
            <div className="d-flex align-items-center justify-content-center">
                    <img className="img-fluid logo small-it "src="../facesofMTL-dark.svg"/>
                    </div>
            { gameState==="game" ?
                <div className="row">

                {puzzle.map((piece)=>(
            <div className="col-4 py-2 min-height-100">
            <div id={"item"+piece[0]} class="flip-card">
                <div class="flip-card-inner" onClick={(e)=>flip(piece)}>
                    <div class="flip-card-front d-flex justify-content-center align-items-center">
                        <div>
                        <img src={logo} alt="Avatar" style={{width:"100px",height:"100px"}}/>
                    </div>
                    </div>
                    <div class="flip-card-back">
                    <img src={`../faces/picture (${piece[1]}).png`} alt="Avatar" style={{width:"100px",height:"100px"}}/>
                    {/* <img src={`../picture (1).png`} alt="Avatar" style={{width:"100px",height:"100px"}}/> */}
                    </div>
                </div>
                </div>
            </div>))}
            </div>

            : gameState==="prep" ?<div>
                 <div className="text-center">
                    <p >
                    Do you know all the people in <b>MTL</b> (Marketing, Trading, Logistic)?
                    </p>
                    <p>
Here's your chance! Play a game with us.

                    </p>
                    <p>
                    Match all the faces correctly within <span className="red">30 seconds</span> to proceed unlocking the secret code.
                        
                    </p>
                    <button onClick={gameStart}className="btn btn-primary btn-block">START PUZZLE 2</button>
                </div>
                </div>
                
                : <div>
                    <p className="text-center">
                    Those are only 6 of us!<br/>
                         But who are the rest of <b>MTL</b>?
                    </p>
                    <button onClick={nextScene} className="btn btn-primary btn-block">FIND OUT</button>
                 
                </div>
                }
        </div>
        </div>
    )
  }

  export default Puzzle;
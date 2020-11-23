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
    const [time,setTime]=useState(0);
    const [startTime,setStartTime]=useState(false);
    const [id,setId]=useState("myid");
    
    useEffect(()=>{
        const text = props.match.params.target;
        const poll= details[text]["greeting"];
        console.log(text,poll)
        setTarget(poll)
        let indexarr =shuffleArray([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]);

        let arr=[]
        for (let i = 0; i <18;i++){
            let x =indexarr[i];
            let b = i+1
            arr.push([b,x])
        }
        console.log(arr)
        setPuzzle(arr)
        setGameState("game")
        
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
        props.history.push(`/quiz/${target}`)
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
                if (cardDone===8){
                    let x = time
                    setTimeout(()=>{
                        setGameState("fin")
                    },800)
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
        
        <div className="row">
            { gameState==="game" ?
                puzzle.map((piece)=>(
            <div className="col-4 py-2 min-height-100">
            <div id={"item"+piece[0]} class="flip-card">
                <div class="flip-card-inner" onClick={(e)=>flip(piece)}>
                    <div class="flip-card-front d-flex justify-content-center align-items-center">
                        <div>
                        <img src={logo} alt="Avatar" style={{width:"100px",height:"100px"}}/>
                    </div>
                    </div>
                    <div class="flip-card-back">
                    <img src={`../picture (${piece[1]}).png`} alt="Avatar" style={{width:"100px",height:"100px"}}/>
                    {/* <img src={`../picture (1).png`} alt="Avatar" style={{width:"100px",height:"100px"}}/> */}
                    </div>
                </div>
                </div>
            </div>

                ))
            : gameState==="prep" ?<div>wait...</div>: <div>You finished!</div>}
        </div>

    )
  }

  export default Puzzle;
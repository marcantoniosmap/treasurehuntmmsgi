import React from "react";
import {useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

  function Guide(props){

    const [target,setTarget]=useState();

    const [details,setDetails]=useState(props.details)

    useEffect(()=>{
        const text = props.match.params.target;
        const poll= details[text]["greeting"];
        console.log(text,poll)
        setTarget(poll)
    },[]);
    function nextScene(){
        props.history.push(`/quiz/${target}`)
    }
    
    return(

                <div className="text-center">
                    <h1>How to crack the mystery box</h1>
                    <p>There will be different steps in order to atrieve the</p>
                    <button 
                        className="btn btn-primary"
                        onClick={nextScene}>Start here
                    </button>
                </div>

    )
  }

  export default Guide;
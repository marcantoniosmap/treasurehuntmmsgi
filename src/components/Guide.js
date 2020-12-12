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

    function nextScene(){
        props.history.push(`/quiz`)
    }
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">

                <div className="text-center">
                    <h1 style={{fontSize:"400%"}}>How to Decode ?</h1>
                    <p>There will be different steps in order to decode this game, complete all the <b>3</b> levels, then you may retrieve the code!</p>
                    <img className="" src="../guidance-dark.svg" style={{maxWidth:"600px"}} />
                    <button
                    
                        className="btn btn-primary btn-block mt-5"
                        onClick={nextScene}>START DECODING
                    </button>
                </div>
                </div>

    )
  }

  export default Guide;
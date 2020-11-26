import React from "react";
import {useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

  function Greeting(props){

    const [target,setTarget]=useState();
    const [greeting,setGreeting]=useState();
    const [details,setDetails]=useState(props.details)

    useEffect(()=>{
        setTarget(props.match.params.target);
        setGreeting(details[props.match.params.target]["greeting"]);
    },[]);
    function nextScene(){
        props.history.push(`/guide/${target}`)
    }
    
    return(
        <div className="text-center">
            <div className="pb-3">
            <img style={{width:"100%"}}src="../treasurehunt.png"/>

            </div>
            <p>As one of our favorite {greeting}, we would like to invite you 
            to join us in this festive</p>
            <button 
                className="btn btn-primary"
                onClick={nextScene}>CLICK ME!
            </button>
        </div>

    )
  }

  export default Greeting;
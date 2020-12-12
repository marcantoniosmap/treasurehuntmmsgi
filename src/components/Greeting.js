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
    const [details,setDetails]=useState(props.details)

    useEffect(()=>{
     
    },[]);
    function nextScene(){
        props.history.push(`/guide`)
    }
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">

        <div className="text-center">
            <div className="pb-3">
            <img style={{width:"100%"}}class="logo"src="../decodemmsgi-dark.svg"/>

            </div>
            <p><b>You might be so confused now!</b>
            <br/>
            But no worry! We'll guide you through it!</p>
            <button 
                className="btn btn-primary btn-block"
                onClick={nextScene}>TELL ME HOW
            </button>
        </div>
        </div>

    )
  }

  export default Greeting;
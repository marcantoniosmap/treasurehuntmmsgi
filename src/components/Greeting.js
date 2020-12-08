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
            <img style={{width:"100%"}}class="logo"src="../decodemmsgi.svg"/>

            </div>
            <p>As one of our favorite company, we would like to invite you 
            to join us in this festive</p>
            <button 
                className="btn btn-primary btn-block"
                onClick={nextScene}>START DECODING
            </button>
        </div>
        </div>

    )
  }

  export default Greeting;
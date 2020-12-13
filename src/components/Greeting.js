import React from "react";
import {useState, useEffect} from "react"
import $ from 'jquery'

  function Greeting(props){

    useEffect(()=>{
        $("#beginning").fadeIn(1000)
     
    },[]);
    function nextScene(){
        $("#beginning").fadeOut(1000,()=>{
        props.history.push(`/guide`)
        })
    }
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">

        <div className="text-center" id="beginning" style={{display:"none"}}>
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
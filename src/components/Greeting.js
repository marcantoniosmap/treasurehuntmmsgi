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
            <p>Welcome. At least you did managed to scan the QR code as requested.
        <br></br><br></br>
            <p>Are you ready for some fun? </p>
        
        Please allow us to guide you through the process on unlocking the secret code to open the box.
            <br/>
            </p>
            <button 
                className="btn btn-primary btn-block"
                onClick={nextScene}>TELL ME HOW
            </button>
        </div>
        </div>

    )
  }

  export default Greeting;
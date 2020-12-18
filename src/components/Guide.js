import React from "react";
import {useState, useEffect} from "react"
import $ from 'jquery'


  function Guide(props){

    useEffect(()=>{
        $("#beginning").fadeIn(1000)
     
    },[]);
    function nextScene(){
        $("#beginning").fadeOut(1000,()=>{
            props.history.push(`/quiz`)

        })

    }
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">

                <div className="text-center" id="beginning" style={{display:"none"}}>
                    <h1 style={{fontSize:"300%"}}>How to Decode ?</h1>
                    <p>You will need to complete <b>3</b> simple tasks in order to obtain the secret code to open the gift box.</p>
                    <img className="" src="../guidance-dark.svg" style={{maxWidth:"350px"}} />
                    <button
                    
                        className="btn btn-primary btn-block mt-3"
                        onClick={nextScene}>START LEVEL 1
                    </button>
                </div>
                </div>

    )
  }

  export default Guide;
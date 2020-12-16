import React from "react";
import {useState, useEffect} from "react"
import $ from 'jquery'

  function Swabtutorial(props){

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
            <div>
            <h1 className="text-center my-1">SWAP-RAPID KIT TUTORIAL</h1>
            <p className="text-center mb-5">By MMS Group Indonesia</p>

            <div>
                <a href="http://instagram.com/marcantoniosmap" target="#" style={{color:"white"}}>
            <div id="english-card"className="card  my-2">
                <div className="h-100 d-flex align-items-center justify-content-center">
                <h5 className="text-center">Watch with English <br/>audio and Subtitle</h5>

                </div>
            </div>

                </a>
                <a href="http://instagram.com/entlife79" target="#" style={{color:"white"}}>
            <div id="indo-card"className="card  my-2">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <h5 className="text-center">Watch with Indonesian <br/>audio and Subtitle</h5>

                </div>
            </div>    

                </a>
            </div>
            </div>
            
        </div>

    )
  }

  export default Swabtutorial;
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
                <a href="https://www.instagram.com/tv/CI2KruVHCFN/?utm_source=ig_web_copy_link" target="#" style={{color:"white"}}>
            <div id="english-card"className="card  my-2">
                <div className="h-100 d-flex align-items-center justify-content-center">
                <h5 className="text-center">Watch with English <br/>audio and subtitle</h5>

                </div>
            </div>

                </a>
                <a href="https://www.instagram.com/tv/CI2LLH0HCWr/?utm_source=ig_web_copy_link" target="#" style={{color:"white"}}>
            <div id="indo-card"className="card  my-2">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <h5 className="text-center">Watch with Indonesian <br/>audio and subtitle</h5>

                </div>
            </div>    
            
                </a>
            </div>
            <p className="text-center mb-5">or visit our Instagram <a href="https://www.instagram.com/mmsgroupindonesia/" target="#">@mmsgroupindonesia</a></p>
            </div>

            
        </div>

    )
  }

  export default Swabtutorial;
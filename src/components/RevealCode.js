import React from "react";
import {useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import $ from 'jquery'
import ReactLoading from 'react-loading'

  function RevealCode(props){

    const [currentText,setCurrentText]=useState();
    const [text1,setCurrentText1]=useState([
                                            <h2>congratulation</h2>,
                                            "You have passed all the step",
                                            <h3>You have decoded succesfully</h3>,
                                            "IT IS NOW THE CODE REVEAL",
                                            "one moment...",
                                            <h3><h1 className="logo primary-color"style={{fontSize:"500%"}}>508</h1>Number of succeeded decode : <b>{Math.floor(Math.random()*10)}</b></h3>,
                                            ])
    
    useEffect(()=>{
        let i =0
        setInterval(()=>{
          console.log(i)
          
          if (i !==text1.length-1){
            $("#loading").hide()
            $('.currentText'+i).fadeOut(0,()=>{
              $('.currentText'+(i+1)).fadeIn(1500,()=>{

            })
              
            })
            i = i+1
            }
        },3000)
    },[])
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="text-center">
                <ReactLoading color="white" id="loading"/>
                    {text1.map((text,index)=>(
                      <h3 className={`currentText${index}`} style={{display:"none"}}>{text}</h3>
                    ))}
                </div>
                </div>

    )
  }

  export default RevealCode;
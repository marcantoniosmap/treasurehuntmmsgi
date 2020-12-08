import React from "react";
import {useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import $ from 'jquery'

  function RevealCode(props){

    const [currentText,setCurrentText]=useState();
    const [text1,setCurrentText1]=useState(["",
                                            <h2>congratulation</h2>,
                                            "You have passed all the step",
                                            <h3>You have succesfully decoded our message</h3>,
                                            "We will reveal the code",
                                            "the code is",
                                            "is....",
                                            "retrieving from database",
                                            "99%",
                                            <h3><h1 className="logo primary-color"style={{fontSize:"500%"}}>6980</h1>We wish to see you in 2021!</h3>,
                                            ])
    
    useEffect(()=>{
        let i =0
        setInterval(()=>{
          console.log(i)
          
          if (i !==text1.length-1){
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
                    {text1.map((text,index)=>(
                      <h3 className={`currentText${index}`} style={{display:"none"}}>{text}</h3>
                    ))}
                </div>
                </div>

    )
  }

  export default RevealCode;
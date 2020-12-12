import React, { useRef } from "react";
import {useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  import {
      Table
  } from "react-bootstrap";
  import $ from "jquery"
  
import Slider from "react-slick";

  function Itaewonclass(props){
      const [state,setState]=useState(true);
      const [face1,setFace1]=useState("../faces/saeroyi.png")
      const [face2,setFace2]=useState("../faces/picture (37).png")

      function onCLick(index){
          if (index===1){
              setFace1("../faces/picture (37).png")
              setFace2("../faces/saeroyi.png")
          }
          setState(false)
      }
   
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">
            
            <div className="text-center">
                <div>
                <h3>REGISTRATION</h3>
                {state ?
                <p>In order to claim this voucher, you need to answer the right question</p>:
                <p> That is a wrong answer, sorry but you did not access the exclusive dance class!</p>}
                <p>Which of these is the <b>real</b> Saeroyi?</p>

                </div>
  
                <div className="row">
                    <div className="col-6" onClick={e=>(onCLick(1))}>
                        <img className="img-fluid" src={face1}/>
                    </div>
                    <div className="col-6" onClick={e=>(onCLick(2))}>
                    <img className="img-fluid" src={face2}/>
                    </div>

                </div>
                </div>

        </div>
    )
  }

  export default Itaewonclass;
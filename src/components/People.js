import React from "react";
import {useState, useEffect} from "react"
  import {
    Form,
    FormLabel,
  FormGroup,
  FormControl,
  FormCheck,
  Button,
  Modal,
  ProgressBar
} from "react-bootstrap";
import Slider from "react-slick"
import $ from "jquery"

function People(props){

  const [currdiv,setCurrDiv]=useState()
  const [title,setTitle]=useState(true);
  const divisions =["Head","Sales","Logistic","Support"];
  const [currTitle,setCurrTitle]=useState(divisions[0])
  // const divisions =["Head"];
  const list={
    "Head" :["Edmund","Gustaf","Saly","Kamari","Azwar","Dinovita"],
    "Sales":["Lisye","Valen","Jelita","Hari","Nadhira","Marina","Tissa","Mufthi","Laila","Yura","Valesia","Febri"],
    "Logistic":["Daniel","Rendhi","Lena","Andrees","Jantri","Valen","Salma","April","Hendro"],
    "Support":["Tiurma","Soedono","Adika","Noviza","Nenden","Cicil","Christian","Ukthi","Shanti","Ratna","Clarista","Antonio"]
  }

  const [ArrIterate,setArrIterate]=useState(Array.from({length: 40}, (_, index) => index + 1))
  const setting={
    "Head":{
      centerMode:true,
      className:"center",
      centerPadding : "40px",
      // speed:5000,
      adaptiveHeight:true,
      autoplay:false,
      infinite: true,
      slidesToShow: 1,
    },
  }
  useEffect(()=>{
    let i =0
    
    setInterval(()=>{
        $('#headpic').animate({right:'1800px'},8000,()=>{

        })
    },1000)
  },[])
    function openFunction(div,per){

    }
  
    return(
      <div className="h-100 "style={{backgroundColor:"white"}}>
          <div className="h-100 w-100" style={{overflow:""}}>
        <div className="h-100 d-flex align-items-center" >
          <div>
              <h3 className="text-center">Our <span className="primary-color">MTL</span> Team</h3>
           <img className="img-fluid logo" src="../mtl-all.png"/>
           <button className="btn btn-primary btn-block mt-2">PROCEED</button>

          </div>
        </div>
      
        </div>

      </div>
    )}

export default People;
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

function People(props){

  const [currdiv,setCurrDiv]=useState()
  // const divisions =["Head","Sales","Logistic","Support"];
  const divisions =["Head"];
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
    function openFunction(div,per){

    }
  
    return(
      <div className="h-100" style={{overflow:"hidden"}}>
        <div className="flex-container pt-5">
            <div className="flex-child h-100">
            <Slider className="h-100"{...setting["Head"]}>
            {list["Head"].map((person)=>(
                <div className="card" style={{minHeight:"800px"}}>
                  <div style={{backgroundColor:"blue"}}>Hello</div>
                  {/* <img className="img-fluid"onClick={e=>(openFunction("Head",person))}src={`../face-body/${"Head"}/${person}.png`}/> */}
              </div>
            ))}
         </Slider>

            </div>
        </div>
     
      </div>
    )
}

export default People;
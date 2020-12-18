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

  const [title,setTitle]=useState(true);
  const divisions =["Division Head","Department Head","Section Head","Supervisor","Staff","Intern"];
  const [currTitle,setCurrTitle]=useState(divisions[0])
  // const divisions =["Head"];
  const list={
    "Division Head" :["Edmund","Gustaf"],
    "Department Head" :["Saly","Richard","Yusron",],
    "Section Head" : [,"Azwar","Dinovita","Lisye","Valen","Tiurma","Kamari","Jelita","Lena","Hari","Daniel"],
    "Supervisor":["Soedono","Noviza","Marina","Nadhira","Andrees","Valen T","Trissa","Rendhi"],
    "Staff":["Mufti","Laila","Yura","Valesia","Febri","Jantri","Salma","April","Hendro","Adika","Clarista","Nenden","Cicil","Christian","Ukthi","Shanti","Ratna"],
    "Intern":["Antonio"]
  }
  const listJob={
    "Edmund":"Division Head",
    "Gustaf":"Deputy Division Head",
    "Richard":"Specialist Project Head",
    "Yusron":"Logistic Dept Head",
    "Saly":"Marketing Dept Head",
    "Kamari":"Quality Control Section Head",
    "Azwar":"MS Section Heaf Finance Controller",
    "Dinovita":"Traffic Section Head",
    "Lisye":"Marketing Section Head",
    "Valen":"Domestic Section Head",
    "Jelita":"Shipment Scheduler Senior Supervisor",
    "Hari":"Contract Section Head",
    "Nadhira":"Domestics Supervispr",
    "Marina":"Shipment  Supervisor",
    "Trissa":"Shipment Scheduler Supervisor",
    "Mufti":"Domestics Staff",
    "Laila":"Domestics Staff",
    "Yura":"Domestics Staff",
    "Valesia":"Contract Staff",
    "Febri":"Logistics staff",
    "Daniel":"Stock and Sales Section Head",
    "Rendhi":"Logistic Supervisor",
    "Lena":"Logistics Section Head",
    "Andrees":"Logistics plotter",
    "Jantri":"Logistics staff",
    "Valen T":"Logistics Supervisor",
    "Salma":"Logistics staff",
    "April":"Logistics staff",
    "Hendro":"Logistics staff",
    "Tiurma":"Marketing Support Section Head",
    "Soedono":"QC Supervisor",
    "Adika":"Quality Control Staff",
    "Noviza":"Marketing Support Supervisor",
    "Nenden":"Traffic Staff",
    "Cicil":"Traffic Staff",
    "Christian":"Traffic Staff",
    "Ukthi":"Traffic Staff",
    "Shanti":"Marketing support Staff",
    "Ratna":"Marketing support Staff",
    "Clarista":"Quality Control Staff",
    "Antonio":"Intern"
  }

  const [ArrIterate,setArrIterate]=useState(Array.from({length: 40}, (_, index) => index + 1))
  const settings={
      centerMode:false,
      className:"",
      autoplaySpeed:7000,
      speed :1000,
      adaptiveHeight:true,
      infinite: false,
      slidesToShow: 1,
      onSwipe:(()=>{
        $('#tap').fadeOut(500,()=>{
          $(".opacity-overlay").removeClass('opacity-overlay');

        })
      })
  }
  
  
  useEffect(()=>{
  
    setTimeout(()=>{
        $("#face-1").fadeOut(1000,()=>{
          $("#face-2").fadeIn(1000)
        })
    },2000)
  },[])
 
  function nextScene(){
    $("#face-2").fadeOut(1000,()=>{
      props.history.push('/feedbackform')
    })
  }

  
    return(
      <div className="h-100" >

        <div style={{display:"none"}} id="face-2">
        <img src="swipeme.svg" id="tap" className="logo" style={{width:"90px", height:"90px",right:"5%", top:"10%"}}></img>

        
          <Slider {...settings}>
        {
              divisions.map((division)=>(
              <div className="opacity-overlay" style={{opacity:0}}>

                <h3 className="text-center pt-5 pb-3">{division}</h3>
                {
                  list[division].map((person)=>(
                    <div className="card bg-dark my-2 mx-2" style={{minHeight:"120px"}}>
                        <div className="row">
                          <div className="col-5">
                            <img className="img-fluid pl-2"src={`../face-body/${person}-sm.png`}/>
                          </div>

                          <div className="col-7">
                            <div className="h-100 d-flex align-items-center">
                              <div>
                            <h4 className="pt mb-0"style={{fontSize:"140%", letterSpacing:"0.2rem"}}>{person}</h4>
                            <p className="text-muted">{listJob[person]}</p>
                                </div>

                            </div>
                          </div>
                            
                        </div>
                    </div>
                  ))
                }
               
                {
                  division==="Intern" &&
                  <div className="mx-2">
                <button className="btn btn-primary btn-block mt-2 mb-5" onClick={nextScene}>CONTINUE TO LEVEL 3</button>
                </div>
                }
              </div>
          ))
        }
        </Slider>
        </div>
        <div id="face-1" className="h-100">
      <div className=" h-100 d-flex justify-content-center align-items-center" >
          <h3 className="text-center">These are the people of the MTL</h3>
      </div>

        </div>


      </div>
    )}

export default People;
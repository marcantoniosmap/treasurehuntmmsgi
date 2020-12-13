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
  const divisions =["Head","Sales","Logistic","Support"];
  const [currTitle,setCurrTitle]=useState(divisions[0])
  // const divisions =["Head"];
  const list={
    "Head" :["Edmund","Gustaf","Saly","Kamari","Azwar","Dinovita"],
    "Sales":["Lisye","Valen","Jelita","Hari","Nadhira","Marina","Tissa","Mufti","Laila","Yura","Valesia","Febri"],
    "Logistic":["Daniel","Rendhi","Lena","Andrees","Jantri","Valen T","Salma","April","Hendro"],
    "Support":["Tiurma","Soedono","Adika","Noviza","Nenden","Cicil","Christian","Ukthi","Shanti","Ratna","Clarista","Antonio"]
  }
  const listJob={
    "Edmund":"Division Head",
    "Gustaf":"co-Division Head",
    "Saly":"Head of Marketing",
    "Kamari":"Head of Quality Control",
    "Azwar":"Head of Marketing Support",
    "Dinovita":"Head of Traffic",
    "Lisye":"Head of Makan Enak",
    "Valen":"Domestic dept Head",
    "Jelita":"Shipment Scheduler",
    "Hari":"Contract Specialist",
    "Nadhira":"Rakor watcher",
    "Marina":"Shipment Scheduler",
    "Tissa":"Shipment Scheduler",
    "Mufti":"Ibu Menghamili",
    "Laila":"Domestic",
    "Yura":"Domestic",
    "Valesia":"Contract Specialist",
    "Febri":"Trading",
    "Daniel":"Stockpile Man",
    "Rendhi":"Inventory Man",
    "Lena":"Invoicing wo-Man",
    "Andrees":"Barge plotter",
    "Jantri":"Very Huge man",
    "Valen T":"FC booker",
    "Salma":"Invoice scanner",
    "April":"Invoice scanner 2",
    "Hendro":"Barging analysis",
    "Tiurma":"Section Head of Marketing Support",
    "Soedono":"Section Head of Quality Control",
    "Adika":"Dashboard and Excel Man",
    "Noviza":"Powerpoint wo-Man",
    "Nenden":"Traffic and Documentation",
    "Cicil":"Traffic and Documentation",
    "Christian":"Traffic and Documentation",
    "Ukthi":"Traffic and Documentation",
    "Shanti":"Head of MTL Lambe",
    "Ratna":"Costing of Marketing support",
    "Clarista":"Quality Control",
    "Antonio":"Senior Intern"
  }

  const [ArrIterate,setArrIterate]=useState(Array.from({length: 40}, (_, index) => index + 1))
  const settings={
      centerMode:false,
      className:"",
      // speed:5000,
      adaptiveHeight:true,
      autoplay:false,
      infinite: true,
      slidesToShow: 1,
  }
  useEffect(()=>{
    
    setTimeout(()=>{
        $("#face-1").fadeOut(1000,()=>{
          $("#face-2").fadeIn(1000)
        })
    },3000)
  },[])
  function nextScene(){
    $("#face-2").fadeOut(1000,()=>{
      props.history.push('/feedbackform')
    })
  }

  
    return(
      <div className="h-100" >

        <div style={{display:"none"}} id="face-2">

        
          <Slider {...settings} >
        {
              divisions.map((division)=>(
              <div>

                <h3 className="text-center pt-5 pb-3">Our {division} Team</h3>
                {
                  list[division].map((person)=>(
                    <div className="card bg-dark my-2 mx-2" style={{minHeight:"120px"}}>
                        <div className="row">
                          <div className="col-5">
                            <img className="img-fluid pl-2"src={`../face-body/${division}/${person}-sm.png`}/>
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
                <div className="mx-2">

                <button className="btn btn-primary btn-block mt-2 mb-5" onClick={nextScene}>CONTINUE</button>
                </div>
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
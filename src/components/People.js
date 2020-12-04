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
  const divisions =["Head","Sales","Logistic","Support"];
  const list={
    "Head" :["Edmund","Gustaf","Saly","Kamari","Azwar","Dinovita","Yusron"],
    "Sales":["Lisye","Valen","Jelita","Hari","Nadhira","Marina","Tissa","Mufthi","Laila","Yura","Valesia","Febri"],
    "Logistic":["Daniel","Rendhi","Lena","Andrees","Jantri","Valen","Salma","April","Hendro"],
    "Support":["Tiurma","Soedono","Adika","Noviza","Nenden","Cicil","Christian","Ukthi","Shanti","Ratna","Clarista","Antonio"]
  }

  const [ArrIterate,setArrIterate]=useState(Array.from({length: 40}, (_, index) => index + 1))
  const setting={
    "Head":{
      dots: false,
      arrow:true,
      draggable:true,
      pauseOnHover:true,
      swipeToSlide: true,
      onHoverPause:true,
      autoplaySpeed:4000,
      speed:4000,
      autoplay:true,
      infinite: true,
      slidesToShow: 3,
    },
    "Sales":{ dots: false,
      arrow:true,
      draggable:true,
      pauseOnHover:true,
      swipeToSlide: true,
      onHoverPause:true,
      autoplaySpeed:3000,
      speed:3000,

      rtl:true,
      
      autoplay:true,
      infinite: true,
      slidesToShow: 3,

    },"Logistic":{ dots: false,
      arrow:true,
      draggable:true,
      pauseOnHover:true,
      swipeToSlide: true,
      onHoverPause:true,
      autoplaySpeed:2500,
      speed:2500,

      autoplay:true,
      infinite: true,
      slidesToShow: 3,

    },"Support":{ dots: false,
        arrow:true,
        draggable:true,
        pauseOnHover:true,
        swipeToSlide: true,
        onHoverPause:true,
        rtl:true,

        autoplaySpeed:2900,
        speed:3200,

        speed:500,
        autoplay:true,
        infinite: true,
        slidesToShow: 3,}
  }
    function openFunction(div,per){

    }
  
    return(
      <div>
        {
          divisions.map((division)=>(
            <div className="pt-4">
            <h4 className="">Our {division} Team</h4>
            <Slider {...setting[division]}>
            {list[division].map((person)=>(
              <div className="d-flex justify-content-center">
                <img onClick={e=>(openFunction(division,person))}src={`../face-classification/${division}/${person}.png`} style={{width:"100px", background:"#cc6666"}}/>
              </div>
            ))}
         </Slider>
         </div>
          ))
        }
     
      </div>
    )
}

export default People;
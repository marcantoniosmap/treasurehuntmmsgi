import React from "react";
import {useState, useEffect} from "react"

  import {
      Form,
      FormLabel,
    FormGroup,
    FormCheck,
    ProgressBar
  } from "react-bootstrap";
  import $ from "jquery"
  
import Slider from "react-slick";
import { Link } from "react-router-dom";

  function Quiz(props){
      const [swipe,setSwipe]=useState(false);
      const [numchecked,setNumChecked]=useState("");
      const [target,setTarget]=useState();
      const [greeting,setGreeting]=useState();
      const [details,setDetails]=useState(props.details)
      const [number,setNumber]=useState(0)
      const [quiz,setQuiz]=useState("prep");
      const [settings,setSettings] = useState({
          dots: false,
          arrow:true,
        //   draggable:false,
        //   swipeToSlide: false,
          swipe: swipe,
        //   swipeToScroll: false,
          infinite: false,
        //   accessibility :false,
          slidesToShow: 1,
          slidesToScroll:1
        });

        useEffect(()=>{
            $("#beginning").fadeIn(1000)
         
        },[]);
    const [questions,setQuestions]=useState([
        {
            "question":"1. What does MMS abbreviation means ?",
            "choice1":"Maju Mundur Selalu Group Indonesia",
            "choice2":"Mitra Maju Sukses Group Indonesia",
            "choice3":"Makan Minum Sehat Group Indonesia",
            "choice4":"None of the above",

        },
        {
            "question":"2. In which year was MMSGI established ?",
            "choice1":"2010",
            "choice2":"2013",
            "choice3":"2014",
            "choice4":"2016",

        },
        {
            "question":"3. Which of the following business sectors MMSGI is not involved in?",
            "choice1":"Property",
            "choice2":"Mining",
            "choice3":"Agriculture",
            "choice4":"Selling Bike Jersey",

        },
        {
            "question":"4. Where is MMSGI office located at? ",
            "choice1":"Pulau Seribu",
            "choice2":"TCC Batavia Tower One",
            "choice3":"Taman Mini Indonesia Indah",
            "choice4":"Dunia Fantasi",

        },
     
    ])

    function handlechanged(idPassed){
        setNumChecked(idPassed)
    }
    function checkTrue(){
        const answer =[2,3,4,2]
        if (answer[number]===numchecked)
            return true
        else return false;
    }
    function errorfunction(){
        $("body").addClass("wrong");
        $("body").css("animation","shake 0.5s");
        $(".title").html("WRONGGG")
    }
    function checkandNext(){
        setSwipe(true)
        if (quiz==="prep"){setQuiz("quiz"); return 0}
        if (quiz==="fin"){
            $("#beginning").fadeOut(1000,()=>{
                props.history.push(`/puzzle`)
    
            })
        }
        else{
            if (checkTrue()){
                if (number===3){
                    setNumber(4)
                    setQuiz("fin");
                    $(".title").html("PERFECT SCORE");
                }else{
                    setNumChecked(null);
                    console.log(settings.swipe)
                    $(".slick-next")[0].click()
                    setNumber(number+1)

                }
                
            }
            else {
                errorfunction()
                setTimeout(()=>{
                    $("body").removeClass("wrong");
                    $("body").css("animation","");
                    $(".title").html("MMSGI Quiz")
                },500)
            }
            
        }
      setSwipe(false)
    }
    function getButton(){
        if (quiz==="prep") {return "START"}
        if (quiz==="fin") {return "CONTINUE TO LEVEL 2"}
        else {
            return number<3?"NEXT":"FINISH"
        }
        
    }
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">

        <div className="container" id="beginning" style={{display:"none"}}>
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="img-fluid logo"src="../gettoknow.svg"/>

                    </div>
            <ProgressBar now={number*25}/>

            <div className="pt-5 w-100">
                {quiz==="quiz" ?
                <Slider {...settings}>
                    {questions.map((question)=>(
                        <Form key={question}>
                            <fieldset>
                                <FormGroup>
                                    <FormLabel className="mb-3">
                                        {question["question"]}
                                    </FormLabel>
                                        <FormCheck
                                        className="smaller"
                                            type="checkbox"
                                            label={question["choice1"]}
                                            // id="first-1"
                                            checked = {numchecked===1}
                                            onChange={()=>handlechanged(1)}
                                        />
                                        <FormCheck
                                        className="smaller"
                                            type="checkbox"
                                            label={question["choice2"]}
                                            // id="first-2"
                                            checked = {numchecked===2}
                                            onChange={()=>handlechanged(2)}
                                        />
                                        <FormCheck
                                        className="smaller"
                                            type="checkbox"
                                            label={question["choice3"]}
                                            // id="first-3"
                                            checked = {numchecked===3}
                                            onChange={()=>handlechanged(3)}
                                        />
                                        <FormCheck
                                        className="smaller"
                                            type="checkbox"
                                            label={question["choice4"]}
                                            // id="first-4"
                                            checked = {numchecked===4}
                                            onChange={()=>handlechanged(4)}
                                        />
                                </FormGroup>
                            </fieldset>
                        </Form>
                    ))}
                </Slider> : 
                 quiz==="prep" ?
                <div className="text-center">
                    <p>
                    In the first task, you will be given <b>4</b> difficult questions regarding MMSGI. 
                            <br></br><br></br>
                        <b>Good Luck!</b>
                    </p>
                </div>
                 :  
                 <div className="text-center">
                    <p>
                        <p>

                    Great Job! You have just completed the first task.
                        </p>
<p>

Thanks to your awesome support, <span className="text-primary"><b>MMSGI</b></span> have grown into one of the most reputable and reliable energy provider in the Industry. All coal-related business is consolidated under <b>MMS Resources</b>. We are growing our portfolio beyond coal into other business sectors ranging from property under <b>Mitra Properti Sukses</b> and new initiatives under Life After Mine. 
</p>
                        </p>
                        <p>
                        Feel free to click <a target="#" href="https://mmsgroup.co.id/en/tentang-kami">here</a> to learn more about us.
                        </p>
                </div>
                
               }

                <button onClick={checkandNext}className="btn btn-primary btn-block my-3">{getButton()}</button>


             </div>
         </div>
         </div>

    )
  }

  export default Quiz;
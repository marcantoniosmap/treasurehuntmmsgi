import React, { useRef } from "react";
import {useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  import {
      Form,
      FormLabel,
    FormGroup,
    FormControl,
    FormCheck,
    ProgressBar
  } from "react-bootstrap";
  import $ from "jquery"
  
import Slider from "react-slick";

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
    const [questions,setQuestions]=useState([
        {
            "question":"1. What does our company name, MMSGI stands for ?",
            "choice1":"Maju Mundur Selalu Group Indonesia",
            "choice2":"Mitra Maju Sukses Group Indonesia",
            "choice3":"Makan Minum Sehat Group Indonesia",
            "choice4":"Mabok Mabok Sukses Group Indonesia",

        },
        {
            "question":"2. When did MMSGI was first established ?",
            "choice1":"2010",
            "choice2":"2013",
            "choice3":"2014",
            "choice4":"2016",

        },
        {
            "question":"3. Which of these business MMSGI is not involved in yet?",
            "choice1":"Property",
            "choice2":"Mining",
            "choice3":"Security",
            "choice4":"Bike Jersey",

        },
        {
            "question":"4. Where is our main office located at?",
            "choice1":"The City Center",
            "choice2":"Menara Batavia",
            "choice3":"UOB Tower",
            "choice4":"Sudirman Tower",

        },
        {
            "question":"5. Who is the most handsome guy in MMSGI?",
            "choice1":"Mr. Edmund",
            "choice2":"Edmund Tan",
            "choice3":"Pak ET",
            "choice4":"Still Edmund",

        }
    ])
    function nextScene(){
        props.history.push(`/quiz`)
    }
    function handlechanged(idPassed){
        setNumChecked(idPassed)
    }
    function checkTrue(){
        const answer =[2,3,4,1,2]
        if (answer[number]===numchecked || (number===4 && numchecked!==null))
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
        if (quiz==="fin"){props.history.push(`/puzzle`)}
        else{
            if (checkTrue()){
                if (number===4){
                    setNumber(5)
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
        if (quiz==="fin") {return "CONTINUE"}
        else {
            return number<4?"NEXT":"FINISH"
        }
        
    }
    
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">

        <div className="container" >
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="img-fluid logo"src="../gettoknow.svg"/>

                    </div>
            <ProgressBar now={number*20}/>

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
                <div>
                    <p>
                    In this segment, you will have to answer <b>5</b> questions regarding MMSGI.
                    <p>
                    all correct answers are required to past this test, press <b>START</b> when you are ready! Goodluck 
                        </p>
                    </p>
                </div>
                 :  
                 <div>
                    <p>
                        Yey! You just finished our next challenge, Now you know more about our company.<br/>
                        </p>
                        <p>
                        MMSGI <b>(Mitra Maju Sukses Group Indonesia)</b> was first established in 2014.
                        Today, our group have grown
into one of the most reputable
and reliable coal suppliers for
both national and international
markets. All coal related business is
consolidated under <b>MMS Resources</b>.
In Parallel, we grow our portfolio
beyond coal into other businesess,
ranging from property under <b>Mitra
Properti Sukses</b> and new initiatives
under Life After Mine.<br/>
                        </p>
                        <p>
                        Click the button below to move on to the second step.
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
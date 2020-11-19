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
    const [settings,setSettings] = useState({
        dots: false,
        arrow:true,
        draggable:false,
        infinite: false,
        accessibility :false,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    const [numchecked,setNumChecked]=useState("");
    const [target,setTarget]=useState();
    const [greeting,setGreeting]=useState();
    const [details,setDetails]=useState(props.details)
    const [number,setNumber]=useState(0)
    const [quiz,setQuiz]=useState("prep");
    const [questions,setQuestions]=useState([
        {
            "question":"1. What does our company name, MMSGI stands for ?",
            "choice1":"Maju Mundur Syantik Group Indonesia",
            "choice2":"Mitra Maju Sukses Group Indonesia",
            "choice3":"Mitra Makmur Sentosa Group Indonesia",
            "choice4":"Multi Mining Samarinda Group Indonesia",

        },
        {
            "question":"2. When does MMSGI first established ?",
            "choice1":"2005",
            "choice2":"2007",
            "choice3":"2009",
            "choice4":"2011",

        },
        {
            "question":"3. Which of these are not in the business scope of MMSGI?",
            "choice1":"Property",
            "choice2":"Mining",
            "choice3":"Security",
            "choice4":"Clothing",

        },
        {
            "question":"4. Where is our main headquarter?",
            "choice1":"TCC",
            "choice2":"Menara Batavia",
            "choice3":"UOB Tower",
            "choice4":"Sudirman Tower",

        },
        {
            "question":"5. Who is the most handsome MMSGI person?",
            "choice1":"Edmund Tan",
            "choice2":"MarcAntonio Purnama",
            "choice3":"Lisye Liman",
            "choice4":"Noviza Chinanigo",

        }
    ])
    useEffect(()=>{
        setTarget(props.match.params.target);
        setGreeting(details[props.match.params.target]["greeting"]);
    },[]);
    function nextScene(){
        props.history.push(`/quiz/${target}`)
    }
    function handlechanged(idPassed){
        setNumChecked(idPassed)
    }
    function checkTrue(){
        const answer =[2,1,4,1,2]
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
        if (quiz==="prep"){setQuiz("quiz"); return 0}
        if (quiz==="fin"){props.history.push(`/greeting/${props.match.params.target}`)}
        else{
            if (checkTrue()){
                if (number===4){
                    setNumber(5)
                    setQuiz("fin");
                    $(".title").html("CONGRATZ");
                }else{
                    setNumChecked(null);
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
      
    }
    function getButton(){
        if (quiz==="prep") {return "START"}
        if (quiz==="fin") {return "CONTINUE"}
        else {
            return number<4?"NEXT":"FINISH"
        }
        
    }
    
    return(
        <div className="container" >
            <h1 className="text-center title">MMSGI QUIZ</h1>
            <ProgressBar now={number*20}/>

            <div className="pt-5 w-100">
                {quiz==="quiz" ?
                <Slider {...settings}>
                    {questions.map((question)=>(
                        <Form>
                            <fieldset>
                                <FormGroup>
                                    <FormLabel className="mb-3">
                                        {question["question"]}
                                    </FormLabel>
                                        <FormCheck
                                            type="checkbox"
                                            label={question["choice1"]}
                                            // id="first-1"
                                            checked = {numchecked===1}
                                            onChange={()=>handlechanged(1)}
                                        />
                                        <FormCheck
                                            type="checkbox"
                                            label={question["choice2"]}
                                            // id="first-2"
                                            checked = {numchecked===2}
                                            onChange={()=>handlechanged(2)}
                                        />
                                        <FormCheck
                                            type="checkbox"
                                            label={question["choice3"]}
                                            // id="first-3"
                                            checked = {numchecked===3}
                                            onChange={()=>handlechanged(3)}
                                        />
                                        <FormCheck
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
                        MMSGI (Mitra Maju Sukses Group Indonesia) was first found in 2006. We do business in different industries such as coal mining, and property.<br/>
                        </p>
                        <p>

                        Click the button below to procedd.
                        </p>
                </div>
                
               }

                <button onClick={checkandNext}className="btn btn-primary btn-block my-3">{getButton()}</button>


             </div>
         </div>

    )
  }

  export default Quiz;
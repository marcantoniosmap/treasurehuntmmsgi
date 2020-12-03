import React from "react";
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
  Button,
  ProgressBar
} from "react-bootstrap";
import Slider from '@material-ui/core/Slider';
import ModalB from "./ModalB"
import $ from 'jquery'



  function FeedbackForm(props){

    const [pageStat,setPageStat]=useState("prep")
    const [agree,setAgree]=useState(false)
    const [target,setTarget]=useState();
    const [textValue,setTextValue]=useState("")
    const [sliderValue1,setSliderValue1]=useState(3)
    const [sliderValue2,setSliderValue2]=useState(3)
    const [sliderValue3,setSliderValue3]=useState(35)
    const [sliderValue4,setSliderValue4]=useState(0)
    const [textNegative,setTextNegative]=useState("Not Satisfied")
    const [textPositive,setTextPositive]=useState("Very Satisfied")
    const [showModal1,setShowModal1]=useState(false)
    const [details,setDetails]=useState(props.details)
    const [radioBoxGone,setRadioBoxGone]=useState(false)
    const specialmessage="MMSGI had been our favorite company to work with. On overall we are very satisfied with our business partnership!"
    const marks = [
        {
          value: 0,
          label: '0%',
        },
       
        {
            value: 50,
            label: '50%',
          },
      
        {
          value: 100,
          label: '100%',
        },
      ];

      console.log(agree)
    const handleClose1 = () => setShowModal1(false);
  const handleShow1 = () => setShowModal1(true);

    useEffect(()=>{
        const text = props.match.params.target;
        const poll= details[text]["greeting"];
        console.log(text,poll)
        setTarget(poll)
    },[]);
    function nextScene(){
        props.history.push(`/quiz/${target}`)
    }

    function handleChange(event,newValue){
        if (newValue>2){
            setSliderValue1(newValue)
        }else{
            handleShow1()
        }
    }
    function handleChange2(event,newValue){
        if (newValue>4){
            setTextPositive("Very Satisfied")
            setTextNegative("Not Satisfied")
        }
        else{
            setTextNegative("Very Satisfied")
            setTextPositive("Not Satisfied")
        }
        setSliderValue2(newValue)
        
    }
    function handleChange3(event,newValue){
        setSliderValue3(sliderValue3+1)
    }
    function textFunction(){
        if (specialmessage.length>textValue.length){
            const len = textValue.length
            console.log(specialmessage[len])
            const newText=textValue+specialmessage[len]
            setTextValue(newText)

        }
    }
    function handleChange4(event,newValue){
        setSliderValue4(newValue)
        $('#feedbackform').css('opacity',1-(newValue/100))
        $('.et-say-no').css('opacity',(newValue/100))
    }
    
    function submission(){
        setPageStat("fin")
    }    
    function formchecker(){
        return !(agree&& radioBoxGone && getCharacterLeft()<=50)
    }
    function valuetext(value){
        return `${value}%`
    }
    function changeAgree(){
        if (agree){
            setAgree(false)
        }
        else setAgree(true)
    }
    function getCharacterLeft(){
        return specialmessage.length-textValue.length
    }
    function handleClick(value,index){
        if (index===4){
            if (radioBoxGone){
                setRadioBoxGone(false);
            }else setRadioBoxGone(true)
        }else{
            $('#gone'+index).fadeOut()
            $("label[for='gone"+index+"']").addClass('transparant')
        }
    }
    function startFeedback(){
        setPageStat("feedback")
    }
    return(

        <div className=" h-100 pt-5" >
            <div className="et-say-no">
            <img  className="img-fluid px-3" src="../et-sayno.png"></img>

            </div>

            {pageStat==="prep"? (
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div>
                    <h2 className="text-center title">Honest Feedback Form</h2>
                    <p>Please fill in this feedback form with honesty!</p>
  <Button variant="primary"  onClick={startFeedback}block type="submit">
    START
  </Button>

                    </div>
                    
                </div>
            ): pageStat==="fin"?( 
            <div className="d-flex justify-content-center align-items-center h-100">
            <div>
            <h2 className="text-center title">Thank You!</h2>
            <p className="text-center"> That was such an awesome feedback! <br/>We really appreciate your honesty. We promise to improve ourself in 2021!</p>
<Button variant="primary" disabled onClick={startFeedback}block type="submit">
CLAIM CODE!
</Button>

            </div>
            
        </div>):(
                <div id="feedbackform">
<h3 className="text-center title">Honest Feedback Form</h3>
        <p className="text-center"><span className="red">*</span> required field</p>
        <ModalB show={showModal1} 
                handleClose={handleClose1}
                heading={"Oopss"}
                context={"Sorry, the bug in this site disable you from going lower!"}
                button={"I'll make it higher"}/>
                   <Form className="py-5">

                       {/* ONE */}
                        <FormGroup className="mb-4">
                            <FormLabel >
                             1. How <b>satisfied</b> are you with our service this year?<span className="red">*</span>
                            </FormLabel>
                            <div className="row pt-3">
                            <div className="col-3">
                                <p className="small text-center">Not Satisfied</p>
                            </div>
                            <div className="col-6">
                            <Slider
                            // defaultValue={}
                            // getAriaValueText={valuetext}
                            value ={sliderValue1}
                            onChange={handleChange}
                            aria-labelledby="discrete-slider"
                            // valueLabelDisplay="auto"
                            step={1}
                            
                            min={0}
                            max={5}
                        />
                            </div>
                            <div className="col-3">
                            <p className="small text-center">Very Satisfied</p>
                            </div>
                        </div>
                        </FormGroup>



                         {/* TWO */}
                         <FormGroup className="mb-4"> 
                            <FormLabel>
                             2. How would you rate the overall <b>quality</b> of our service?<span className="red">*</span>
                            </FormLabel>
                            <div className="row pt-3">
                            <div className="col-3">
                                <p className="small text-center">{textNegative}</p>
                            </div>
                            <div className="col-6">
                            <Slider
                            // defaultValue={}
                            // getAriaValueText={valuetext}
                            value ={sliderValue2}
                            onChange={handleChange2}
                            aria-labelledby="discrete-slider"
                            // valueLabelDisplay="auto"
                            step={1}
                            min={0}
                            max={5}
                        />
                            </div>
                            <div className="col-3">
                            <p className="small text-center">{textPositive}</p>
                            </div>
                        </div>
                        </FormGroup >
                            {/* THREE */}
                        <FormGroup className="mb-4">
                            <FormLabel >
                             3. How likely are you going to do our business <b>partnership</b> in 2021?<span className="red">*</span>
                            </FormLabel>
                            <div className="row pt-3">
                            <div className="col-3">
                                <p className="small text-center">Very Unlikely</p>
                            </div>
                            <div className="col-6">
                            <Slider
                            // defaultValue={}
                            // getAriaValueText={valuetext}
                            value ={sliderValue3}
                            onChange={handleChange3}
                            aria-labelledby="continuous-slider"
                            // valueLabelDisplay="auto"
                            step={1}
                            min={0}
                            max={100}
                        />
                            </div>
                            <div className="col-3">
                            <p className="small text-center">Very likely</p>
                            </div>
                        </div>
                        </FormGroup>

                        {/* FOUR */}
                        <FormGroup className="mb-4">
                            <FormLabel >
                             3. How much discount do you wish we give in 2021?<span className="red">*</span>
                            </FormLabel>
                            <div className="row pt-3">
                            <div className="col-3">
                                <p className=" text-center">0%</p>
                            </div>
                            <div className="col-6">
                            <Slider
                            // defaultValue={}
                            // getAriaValueText={valuetext}
                            value ={sliderValue4}
                            onChange={handleChange4}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={5}
                            marks={marks}
                            min={0}
                            max={100}
                        />
                            </div>
                            <div className="col-3">
                            <p className=" text-center">100%</p>
                            </div>
                        </div>
                        </FormGroup>
                      


                        <FormGroup className="mb-4">
                            <FormLabel >
                             4. Which of the aspect below you expect MMSGI to have in 2021?<span className="red">*</span>
                            </FormLabel>
                                <FormCheck
                                id="gone1"
                                    className="smaller pt-3"
                                    type="checkbox"
                                    label="Better Pricing"
                                    checked = {false}
                                onChange={(e)=>handleClick(e.target.value,1)}
                                />
                           <FormCheck
                           className="smaller"
                           id="gone2"
                                    type="checkbox"
                                    label="More Discount"
                                    // id="first-1"
                                    checked = {false}
                            onChange={(e)=>handleClick(e.target.value,2)}
                                /><FormCheck
                                id="gone3"
                                className="smaller"
                                type="checkbox"
                                label="Better Customer Service"
                                // id="first-1"
                                checked = {false}
                            onChange={(e)=>handleClick(e.target.value,3)}
                            /><FormCheck
                            
                            className="smaller"
                            type="checkbox"
                            label="More Business Cooperation"
                            // id="first-1"
                            checked = {radioBoxGone}
                            onChange={(e)=>handleClick(e.target.value,4)}
                        />
                        </FormGroup>


                       
                        <FormGroup className="mb-4">
                          <FormLabel>
                                6. Write your own feedback here!<span className="red">*<div className="small">({getCharacterLeft()} char left)</div></span>
                          </FormLabel>
                          <FormControl className="mt-2"placeholder="What can we improve as a company..." as ="textarea" rows={3} value={textValue} onChange={textFunction}/>

                      </FormGroup >
                        
                      <FormGroup id="formGridCheckbox" className="mb-5">
    <FormCheck type="checkbox" checked={agree} onClick={changeAgree}className="text-muted small" label="I filled this feedback form with honesty and no force from any party." />
  </FormGroup>

  <Button variant="primary" disabled={formchecker()} onClick={submission}block type="submit">
    Submit
  </Button>
                    </Form>
                    </div>
            )}
        
                </div>

    )
  }

  export default FeedbackForm;
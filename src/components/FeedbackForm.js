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
    const [sliderValue4,setSliderValue4]=useState(50)
    const [textNegative,setTextNegative]=useState("Not Satisfied")
    const [textPositive,setTextPositive]=useState("Very Satisfied")
    const [showModal1,setShowModal1]=useState(false)
    const [details,setDetails]=useState(props.details)
    const [showModal2,setShowModal2]=useState(false);
    const [radioBoxGone,setRadioBoxGone]=useState(false)
    const specialmessage="MMSGI had been our favorite company to work with. On overall we are very satisfied with our business partnership!"
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

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
        if (newValue>2){
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
        if (newValue<50){
            $('#feedbackform').css('opacity',(newValue/50)+0.1)
            $('.et-say-no').css('opacity',1-(newValue/50))
        }else{
            $('#feedbackform').css('opacity',1)
            $('.et-say-no').css('opacity',0)
        }
    }
    
    function submission(){
        props.history.push('/codereveal')
    }    
    function formchecker(){
        return !(agree&& radioBoxGone)
    }
    function valuetext(value){
        return `${value}%`
    }
    function changeAgree(){
        if (agree){
            setAgree(false)
        }
        else {
            setShowModal2(true)
        }
    }
    function onClickCheckbox(){
        if (agree){
            setAgree(false)
        }else{
            showModal2(true)
        }
    }
    function getCharacterLeft(){
        return specialmessage.length-textValue.length
    }
    function handleClick(value,index){
        console.log(index)
        if (index===3){
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
    function handleAgree1(){
        setAgree(true)
        setShowModal2(false)

    }
    return(
       
        <div className=" h-100 pt-5" >
            <div className="et-say-no mr-1">
            <img  className="img-fluid pr-3" src="../et-sayno.png"></img>

            </div>

            {pageStat==="prep"? (
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-center">
                    <div className="d-flex align-items-center justify-content-center">
                        <img className="img-fluid logo"src="../customerSatisfaction-dark.svg"/>

                    </div>
                    <h5>Your feedback matters to us!</h5>

<p>We appreciate you taking 1 minute to participate in our customer satisfaction survey. Your valuable feedback will help us serve you better.</p>
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
<h3 className="text-center title">MMSGI Feedback Form</h3>
        <p className="text-center"><span className="red">*</span> required field</p>
        <ModalB show={showModal1} 
                handleClose={handleClose1}
                handleAgree={handleClose1}
                heading={"Oopss"}
                context={" There seem to be a technical gitch. Please select a higher rating to proceed."}
                button={"I'll make it higher"}/>

        <ModalB show={showModal2} 
                handleClose={handleClose2}
                handleAgree={handleAgree1}
                heading={"Terms and Condition"}
                context={<div>
                Thank you for participating in our survey. <br/><br/>By checking this box, you hereby agree to the terms and conditions as set forth.<br/><br/> 
                <ol>
                    <li>You agree that MMSGI may collect <b>only</b> the positive feedback data. We shall send the negative results to our internal recycle bin.</li>
                    <li>We will always use best endeavors to achieve win-win partnership and have <b>fun</b> in the process.</li>
                    <li>You have filled in the survey with only your own <b>honest</b> opinion.</li>
                </ol>
                These terms and conditions are subject to change at the sole discretion of MMSGI. Trust us. We know what is best for you.😉
                </div>}
                button={"Agree"}/>
                   <Form className="pt-4 pb-5 mb-1">

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
                            3. How likely are you going to renew/start our business <b>partnership</b> in 2021?*<span className="red">*</span>
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
                            <p className="small text-center">Extremely likely</p>
                            </div>
                        </div>
                        </FormGroup>

                        {/* FOUR */}
                        <FormGroup className="mb-4">
                            <FormLabel >
                             3. How likely are you to <b>recommend</b> us to a business associate?<span className="red">*</span>
                            </FormLabel>
                            <div className="row pt-3">
                            <div className="col-3">
                                <p className="small text-center">Very Unlikely</p>
                            </div>
                            <div className="col-6">
                            <Slider
                            // defaultValue={}
                            // getAriaValueText={valuetext}
                            value ={sliderValue4}
                            onChange={handleChange4}
                            aria-labelledby="discrete-slider"
                            step={5}
                            min={0}
                            max={100}
                        />
                            </div>
                            <div className="col-3">
                            <p className="small text-center">Extremely Likely</p>
                            </div>
                        </div>
                        </FormGroup>
                      


                        <FormGroup className="mb-4">
                            <FormLabel >
                             4. Which of the following aspects do you wish MMSGI to improve on?<span className="red">*</span>
                            </FormLabel>
                                <FormCheck
                                id="gone1"
                                    className="smaller pt-3"
                                    type="checkbox"
                                    label="Better commercial terms from MMSGI"
                                    checked = {false}
                                onChange={(e)=>handleClick(e.target.value,1)}
                                />
                           <FormCheck
                           className="smaller"
                           id="gone2"
                                    type="checkbox"
                                    label="Improved response time on work"
                                    // id="first-1"
                                    checked = {false}
                            onChange={(e)=>handleClick(e.target.value,2)}
                                /><FormCheck
                                
                                className="smaller"
                                type="checkbox"
                                label="Enhance business partnership"
                                // id="first-1"
                                checked = {radioBoxGone}
                            onChange={(e)=>handleClick(e.target.value,3)}
                            /><FormCheck
                            id="gone4"
                            className="smaller"
                            type="checkbox"
                            label="Better Customer Service"
                            // id="first-1"
                            checked = {false}
                            onChange={(e)=>handleClick(e.target.value,4)}
                        />
                        </FormGroup>


                       
                        <FormGroup className="mb-4">
                          <FormLabel>
                               5. Write your own feedback here!*<span className="red">*<div className="small">({getCharacterLeft()} char left)</div></span>
                          </FormLabel>
                          <FormControl className="mt-2"placeholder="What can we improve as a company..." as ="textarea" rows={3} value={textValue} onChange={textFunction}/>

                      </FormGroup >
                        
                      <FormGroup id="formGridCheckbox" className="mb-5">
    <FormCheck type="checkbox" checked={agree} onClick={changeAgree}className="text-muted2 small" label=" Click here to indicate you have read the Terms and Conditions" />
  </FormGroup>

  <Button variant="primary" disabled={formchecker()} onClick={submission}block type="submit">
    SUBMIT AND CLAIM CODE
  </Button>
                    </Form>
                    </div>
            )}
        
                </div>

    )
  }

  export default FeedbackForm;
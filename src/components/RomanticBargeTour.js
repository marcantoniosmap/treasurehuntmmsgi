import React, { useRef } from "react";
import {useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
  import {
      Table
  } from "react-bootstrap";
  import $ from "jquery"
  
import Slider from "react-slick";

  function RomanticBargeTour(props){
      const [swipe,setSwipe]=useState(false);
   
    return(
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div>
                <h3>Sorry, We have reached 10 signups!</h3>
                <p className="text-center">Ten applicants :</p>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Katy</td>
                    <td>Perry</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Via</td>
                    <td>Valen</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Edmund</td>
                    <td>Tan</td>
                    </tr>
                    <tr>
                    <td colSpan="3" className="text-center">and <b>7</b> more..</td>
                    </tr>
                </tbody>
            </Table>
                </div>

        </div>
    )
  }

  export default RomanticBargeTour;
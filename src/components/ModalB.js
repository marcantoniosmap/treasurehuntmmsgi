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


function ModalB(props){
    return(
        <Modal centered show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.context}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleAgree}>
            {props.button}
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalB;
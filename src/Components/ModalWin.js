import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function ModalWin(props){

    return(
        <Modal
        {...props}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="main-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title><span className="clr-white">Current session expired</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="clr-white">Please continue or log out of your account</span>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide} name='continue'>Continue</Button>
          <Button variant="secondary" onClick={props.onHide} className="modal-log" name="login">
            Log out
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
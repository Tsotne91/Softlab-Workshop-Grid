import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

export default function PhotoModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <img src={props.photoUrl} alt="album photo"/>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
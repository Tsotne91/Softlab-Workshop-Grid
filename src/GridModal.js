import React  from "react";
import Modal from 'react-bootstrap/Modal';
import {Button, Col, Row} from "react-bootstrap";

export default function GridModal(props){

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title>
                    Using Grid in Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                    <Row>
                        <Col xs={12} md={8}>
                            .col-xs-12 .col-md-8
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>

        </Modal>
    )

}
import React, {useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import {Button, Col, Row} from "react-bootstrap";
import axios from "axios";

export default function GridModal(props) {
    const [photos, setPhotos] = useState([]);


    useEffect(() => {
        async function getPhotos() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${props.albumId}`);
            setPhotos(response.data);
        }

        getPhotos().catch(console.error);
    }, [])

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    Using Grid in Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Row>
                    {photos.map((photo) => (
                        <Col key={photo.id} md={3} className="my-2 border border-1">
                            {
                                // photo.filter(() => (
                                //     props.albumId === photo.albumId ?
                                <div><img src={
                                    photo.url
                                } alt="thumbnail" width="180"/>
                                    {photo.title}
                                </div>
                            }

                        </Col>
                    ))}
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
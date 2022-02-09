import React, {useEffect, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import {Button, Col, Row} from "react-bootstrap";
import axios from "axios";
import PhotoModal from "./PhotoModal";


export default function GridModal(props) {
    const [photos, setPhotos] = useState([]);
    const [photoModalShow, setPhotoModalShow] = useState(false);

    useEffect(() => {
        async function getPhotos() {
            if (props.albumId) {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${props.albumId}`);
                setPhotos(response.data);
            }
        }
        getPhotos().catch(console.error);
    }, [props.albumId])

    return (
        <>
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
                                    <div role="button"><img src={photo.url}
                                                            alt="thumbnail"
                                                            width="180"
                                                            onClick={() => setPhotoModalShow(true)} /*this is not working */
                                    />
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
            <PhotoModal
                showPhotoModal={() => setPhotoModalShow(true)}
                show={photoModalShow}
                onHide={() => setPhotoModalShow(false)}
            />
        </>
    )
}
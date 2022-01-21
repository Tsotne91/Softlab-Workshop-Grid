import React from "react";
import Card from 'react-bootstrap/Card';

import {Col, Container} from "react-bootstrap";
// import AlbumCoversModal from "./AlbumCoversModal";


export default function MyCard ({title}){


    return <Card className="m-1">
        <Container className="border-primary text-blue">
                <Col className="w-100">{title}</Col>
        </Container>
    </Card>
}
import React from "react";
import Card from 'react-bootstrap/Card';

import {Col, Container, Row} from "react-bootstrap";
// import AlbumCoversModal from "./AlbumCoversModal";


export default function MyCard ({title}){


    return <Card className="m-1 border-primary text-blue">
        <Container>
                <Col>{title}</Col>

        </Container>
    </Card>
}
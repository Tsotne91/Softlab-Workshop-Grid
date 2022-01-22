import React from "react";
import Card from 'react-bootstrap/Card';


export default function MyCard({title, albumId, userId, onClick}) {

    return <Card className="h-100 bg-info fs-4" role="button" onClick={onClick}>
        <Card.Header>
            <p className="m-1 text-light">ალბომი {albumId}</p>
        </Card.Header>
        <p className="mx-4 m-1 text-light">userId {userId}</p>
        <div className="border-primary text-secondary mx-4 m-1">
            <div className="w-100">{title}</div>
        </div>
    </Card>
}
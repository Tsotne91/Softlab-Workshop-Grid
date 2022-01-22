import React from "react";
import Card from 'react-bootstrap/Card';
// import AlbumCoversModal from "./AlbumCoversModal";


export default function MyCard ({title, albumId, userId}){

    return <Card className="h-100 bg-info fs-4" role="button">
        <p className="m-2 text-light">ალბომი {albumId}</p>
        <p className="m-2 text-light">userId {userId}</p>
        <div className="border-primary text-secondary m-2">
            <div className="w-100">{title}</div>
        </div>
    </Card>
}
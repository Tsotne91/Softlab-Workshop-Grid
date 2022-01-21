import React from "react";
import Card from 'react-bootstrap/Card';
// import AlbumCoversModal from "./AlbumCoversModal";


export default function MyCard ({title}){

    return <Card className="h-100 bg-info" role="button">
        <div className="border-primary text-light">
            <div className="w-100">{title}</div>
        </div>
    </Card>
}
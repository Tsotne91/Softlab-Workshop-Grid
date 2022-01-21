import {Col, Row} from "react-bootstrap";
import MyCard from "./MyCard";
import axios from "axios";
import React, {useEffect, useState} from "react";

function App() {
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        async function getAlbums() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setAlbums(response.data);
        }
        getAlbums().catch(console.error);
    }, [])


  return (
    <div className="App">  <Row>
                { albums.map((album) =>(
                    <Col key={album.id} md={3}>
                           <MyCard title={album.title}/>
                    </Col>
                ))}
    </Row>
    </div>
  );
}

export default App;

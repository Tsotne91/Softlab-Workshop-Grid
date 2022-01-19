import {Row} from "react-bootstrap";
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
    <div className="App">
                { albums.map((album) =>(
                        <Row key={album.id}>
                           <MyCard title={album.title}/>
                        </Row>
                ))}
    </div>
  );
}

export default App;

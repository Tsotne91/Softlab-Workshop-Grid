import {Col, Row} from "react-bootstrap";
import MyCard from "./MyCard";
import axios from "axios";
import React, {useEffect, useState} from "react";
import GridModal from './GridModal'

function App() {
    const [albums, setAlbums] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [albumIdForModal, setAlbumIdForModal] = useState([]);

    useEffect(()=>{
        async function getAlbums() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setAlbums(response.data);
        }
        getAlbums().catch(console.error);
    }, [])

  return (
      <div className="App">
          <Row className="m-5">
              {albums.map((album) => (
                  <Col key={album.id} md={3} sm={6} className="my-2">
                      <MyCard title={album.title}
                              albumId={album.id}
                              userId={album.userId}
                              onClick={() => {
                                  setModalShow(true);
                                  setAlbumIdForModal(album.id);
                              }}
                      />
                  </Col>
              ))}
          </Row>
          <GridModal
              albumId={albumIdForModal}
              show={modalShow}
              onHide={() => setModalShow(false)}/>
      </div>
  );
}

export default App;

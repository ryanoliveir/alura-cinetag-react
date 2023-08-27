import styles from './Player.module.css';
import Banner from "@components/Banner";
import Title from "@components/Title";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import NotFoundPage from '../404';

const Player = () => {

  const [currentVideo, setVideo] = useState([]);
  const { id } = useParams();

  const API = `http://localhost:3000/videos?id=${id}`;

    useEffect(() => {
      fetch(API)
       .then(response => response.json())
       .then(data => {
        setVideo(...data);
       })
    },[API]);


    if(!currentVideo) return <NotFoundPage />;


    return (
      <>
        <Banner image="player" />
        <Title>
          <h1>Player</h1>
        </Title>

        <section className={styles.container}>
            <iframe 
              width="100%" 
              height="100%" 
              src={currentVideo.link}
              title={currentVideo.title}
              frameBorder='0'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
              ></iframe>
        </section>
      </>
    );
};

export default Player;

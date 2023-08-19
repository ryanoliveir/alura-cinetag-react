import styles from './Player.module.css';
import Banner from "@components/Banner";
import Title from "@components/Title";
import videos from '../../api/db.json'
import { useParams } from "react-router-dom";
import NotFoundPage from '../404';

const Player = () => {

    const { id } = useParams();
    
    const currentVideo = videos.find(video => video.id === Number(id));


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

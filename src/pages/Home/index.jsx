import Banner from "@components/Banner";
import Title from "@components/Title";
import Card from "@components/Card";
// import videos from "../../api/db.json";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
const Home = () => {

  const [ videos, setVideos] = useState([]);

  const API = 'http://localhost:3000/videos';

  useEffect(() => {
    fetch(API)
     .then(response => response.json())
     .then(data => {
       setVideos(data);

     })
  },[]);

  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Title>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
      
    </>
  );
};

export default Home;

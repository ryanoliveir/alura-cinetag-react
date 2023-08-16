import Header from "@components/Header";
import Banner from "@components/Banner";
import Title from "@components/Title";
import Card from '@components/Card';
import videos from '../../api/db.json';
import styles from './Home.module.css'
const Home = () => {
    return (
        <>
          <Header />
          <Banner image="home" />
          <Title>
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
          </Title>
          <section className={styles.container}>
            {videos.map(video => {
              return <Card  {...video}  key={video.id}/>
            })}
          </section>
        </>
    )
}


export default Home;

import styles from  './Favorites.module.css';
import Banner from '@components/Banner'
import Title from '@components/Title'
import Card from '@components/Card'
import { useFavoriteContext } from '@contexts/Favorites'

const Favorites = () => {

    const { favorites } = useFavoriteContext();

    return (
        <>
          <Banner image="favorite"/>
          <Title>
                <h1>Meus Favoritos</h1>
          </Title>
          <section className={styles.container}>
            {
              favorites.map((favorite) => {
                return <Card {...favorite} key={favorite.id}/>

              })
            }
          </section>
        </>
    )
}

export default Favorites;

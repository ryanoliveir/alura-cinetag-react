import styles from  './Favorites.module.css';
import Banner from '@components/Banner'
import Title from '@components/Title'
import Card from '@components/Card'

const Favorites = () => {

    const tempCardData = {
        title: 'My card',
        cover: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
    }

    return (
        <>
          <Banner image="favorite"/>
          <Title>
                <h1>Meus Favoritos</h1>
          </Title>
          <section className={styles.container}>
            <Card {...tempCardData} />
          </section>
        </>
    )
}

export default Favorites;

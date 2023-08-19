import styles from './404.module.css'



const NotFoundPage = () => {
    return (
        <>
            <section className={styles.contaier}>
                <h2>Ops!</h2>
                <p>O conteúdo que você procura não foi encontrado</p>
            </section>
        </>
    )

}

export default NotFoundPage;

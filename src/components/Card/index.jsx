import styles from './Card.module.css'
import { MdFavoriteBorder } from 'react-icons/md'

const Card = ({ title, cover}) => {
    return (
        <div className={styles.container}>
            <img src={cover} alt={title} className={styles.cover}/>
            <h2>{title}</h2>
            <MdFavoriteBorder size="25"/>
        </div>
    )
}

export default Card


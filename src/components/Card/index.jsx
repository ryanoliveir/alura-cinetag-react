import styles from './Card.module.css'
import { MdFavoriteBorder } from 'react-icons/md'

const Card = ({ title, cover}) => {
    return (
        <div className={styles.container}>
            <img src={cover} alt={title} className={styles.cover}/>
            <div className={styles.card_content}>
                <h3>{title}</h3>
            </div>
            <MdFavoriteBorder className={styles.favorite_icon} size="25"/>
        </div>
    )
}

export default Card


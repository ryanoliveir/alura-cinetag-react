import styles from './Card.module.css'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useFavoriteContext } from '@contexts/Favorites'
import { Link } from 'react-router-dom'

const Card = ({ id,title, cover}) => {

    const { favorites, addFavorite } = useFavoriteContext()
    console.log(favorites);
    const isFavorite = favorites.some(favorite => favorite.id === id);

    const favorite_icon_props = {
        size: 25,
        className: styles.favorite_icon,
        onClick: () => addFavorite ({id, title, cover})
    }

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/player/${id}`}>
                <img src={cover} alt={title} className={styles.cover}/>
            </Link>
            <div className={styles.card_content}>
                <h3>{title}</h3>
            </div>
            {
                isFavorite 
                ? <AiFillHeart {...favorite_icon_props} /> 
                : <AiOutlineHeart {...favorite_icon_props} />
            }
        </div>
    )
}

export default Card


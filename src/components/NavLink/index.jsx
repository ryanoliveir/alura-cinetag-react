import styles from './NavLink.module.css';
import { Link } from 'react-router-dom';


const NavLink = ({ url , children }) => {
    return(
        <Link className={styles.navlink} to={url}>
            {children}
        </Link>
    )

}

export default NavLink;

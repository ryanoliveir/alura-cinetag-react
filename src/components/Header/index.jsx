import styles from './Header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src="/public/images/logo.png" alt="Logo Cinetag" />
            </Link>
        </header>
    )
}

export default Header;

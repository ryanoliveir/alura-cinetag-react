import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import NavLink from '@components/NavLink';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src="/images/logo.png" alt="Logo Cinetag" />
            </Link>
            <nav>
                <NavLink url="/">
                    Home
                </NavLink>
                <NavLink url="/favorites">
                    Favoritos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;

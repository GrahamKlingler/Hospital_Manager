/* HomeNavBar.tsx */

import {Navbar, Nav, NavbarBrand, NavLink} from 'react-bootstrap';
import styles from './HomeNavBar.module.css';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { useNavigate, useLocation } from 'react-router-dom';


function HomeNavBar() {
    return (
        <>
            <Navbar className={styles.HomeNavBar}>
                <NavbarBrand className={styles.navbar} href='/'>
                <span className={styles.logo}>
                    <MonitorHeartIcon/>
                </span>
                MediData
                </NavbarBrand>
                <Nav className={styles.nav}>
                    <NavLink className={styles.navlink} href='/about'>About</NavLink>
                    <NavLink className={styles.navlink} href='/signin'>Sign In</NavLink>
                </Nav>
            </Navbar>
        </>
    );
}

export default HomeNavBar;

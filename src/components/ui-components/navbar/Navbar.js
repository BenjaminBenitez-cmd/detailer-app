import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './Navbar.module.css';

function Navbar({ currentUser, logout, navColor }) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(navColor);

    const handleClick = () => {
       setIsOpen(!isOpen);
    }

    return (
      <header>
        <nav className={`add_margin ${navColor && styles.darkMode}`}>
          <Link to='/'><img src={logo} alt="Detailer logo" /></Link>
          <ul className={styles.menu}>
            {currentUser ? (
              <>
                <li>
                  <Link to={"/dashboard"}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to={"/profile"}>
                    Account
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={logout}>
                    Logout
                  </Link>
                </li>
              </>
            ):(
              <>
                <li>
                  <Link to={"/signin"}>
                    Sign In
                  </Link>
                </li>

                <li>
                  <Link to={"/register"}>
                    Register
                  </Link>
                </li>
              </>
            )}
        </ul>
        <span className={styles.menuButton} onClick={handleClick}><MenuIcon/></span>
      </nav>
      <div>
          <ul className={`add_margin ${isOpen ? styles.activeMenu: styles.inactiveMenu}`}>
            {
              currentUser ? (
                <>
                <li>
                <Link to={"/dashboard"}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to={"/profile"}>
                  Account
                </Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
              </>
              ) : (
                <>
                <li>
                  <Link to={"/signin"}>
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to={"/register"}>
                    Register
                  </Link>
                </li>
              </>
              )
            }
             
          </ul>
      </div>
    </header>
    )
}

export default Navbar

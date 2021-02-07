import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/img/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './Navbar.module.css';

function Navbar({ currentUser, logOut, navColor }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
       setIsOpen(!isOpen);
    }
    const darkmode = {
      backgroundColor: '#0d0303',
      color: 'white'
    }
    const lightmode = {
      backgroundColor: 'white',
      color: '#000000',
    }

    return (
      <header style={navColor ? darkmode : lightmode }>
        <nav className="add_margin">
          <Link to='/'><Logo fill={navColor ? darkmode.color : lightmode.color }/></Link>
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
                    {currentUser.user.username}
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={logOut}>
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
                <Link to={"/dashboard"} onClick={handleClick}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to={"/profile"} onClick={handleClick}>
                  Account
                </Link>
              </li>
              <li>
                <Link to="/" onClick={logOut}>
                  Logout
                </Link>
              </li>
              </>
              ) : (
                <>
                <li>
                  <Link to={"/signin"} onClick={handleClick}>
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to={"/register"} onClick={handleClick}>
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

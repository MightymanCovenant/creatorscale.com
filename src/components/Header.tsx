import React, { useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import '../components/header2.css'
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBarChart } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../useContext/context';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export const Header = () => {
    const [theme, toggleTheme] = useTheme();

    const [navOpen, setNavOpen] = useState(false);


    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className={`mainHeader ${theme}`}>
            <nav className={`myNav ${theme}`}>
                <Link to='/' className={`creatorScaleLink ${theme}`}> creatorscale🚀 </Link>

                <div className={`navLinks ${navOpen ? 'open' : ''} ${theme}`}>
                    <Link to='/' className={`homeLink ${theme}`}> Home </Link>
                    <Link to='/about' className={`aboutLink ${theme}`}> About </Link>
                    <Link to='/reachout' className={`reachoutLink ${theme}`}> Reachout </Link>
                </div>

                <div className='tmywu'>
                    <div className={`nav-toggle ${theme}`} onClick={toggleNav}>
                        {navOpen ? <FontAwesomeIcon icon={faXmarkCircle} /> : <FontAwesomeIcon icon={faBarChart} />}
                    </div>

                    <div className='themeToggleDiv'>
                        <Link to='/reachout'> <button className={`navBtn ${theme}`}> Book a call </button> </Link>
                        <p> { theme === 'light' ? <FontAwesomeIcon icon={faSun} className='sunIcon' onClick={toggleTheme}/> : <FontAwesomeIcon icon={faMoon} className='moonIcon' onClick={toggleTheme}/>} </p>
                    </div>
                </div>
            </nav>
        </header>
    )
}
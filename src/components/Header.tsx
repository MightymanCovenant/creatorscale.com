import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../components/header2.css'
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBarChart } from '@fortawesome/free-regular-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = () => {
    const [navOpen, setNavOpen] = useState(false);


    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header>
            <nav>
                <Link to='/' className='creatorScaleLink'> creatorscale🚀 </Link>

                <div className={`navLinks ${navOpen ? 'open' : ''}`}>
                    <Link to='/' className='homeLink'> Home </Link>
                    <Link to='/about' className='aboutLink'> About </Link>
                    <Link to='/reachout' className='reachoutLink'> Reachout </Link>
                </div>

                <div className='navLinksTwo'>
                    <Link to='/Reachout'> <button className='navBtn'> Book a call </button> </Link>

                    <div className='themeToggleDiv'>
                        <FontAwesomeIcon icon={faSun} className='sunIcon'/>
                        <FontAwesomeIcon icon={faMoon} className='moonIcon'/>
                    </div>
                </div>

                <div className='nav-toggle' onClick={toggleNav}>
                    {navOpen ? <FontAwesomeIcon icon={faXmarkCircle} /> : <FontAwesomeIcon icon={faBarChart} />}
                </div>
            </nav>
        </header>
    )
}
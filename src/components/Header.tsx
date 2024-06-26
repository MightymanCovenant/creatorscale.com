import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css'


export const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }, [theme]);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <header>

            <nav>
                <div className='resNav'>
                    <Link to='/' className='creatorHomeLink'> creatorscale🚀 </Link>

                    <div className='nav-toggle' onClick={toggleNav}>
                        {navOpen ? 'x' : '😇'}
                    </div>
                </div>
                <div className={`innerNavDiv ${navOpen ? 'open' : ''}`}>
                    <Link to='/' className='homeLink'>Home</Link>
                    <hr className='hr1'/>
                    <Link to='/reachout' className='reachoutLink'> Reachout </Link>
                    <hr className='hr2'/>
                    <Link to='/about' className='aboutLink'> About </Link>
                    <hr className='hr3'/>
                    <button className='resBtn'>Book a Call</button>
                </div>
                
                <div className='rightNav'>
                    <Link to='/reachout' className='bookCallLink'> <button className='bookCallBtn'> Book a call </button> </Link>

                    <p onClick={toggleTheme} className='themeIcon'>
                        {theme === 'light' ? '🌑' : '☀️'}
                        </p>
                </div>

            </nav>

        </header>
    )
}
import React, {useState} from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <Link to='/' className='title'> creatorscale🚀 </Link>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                🐐
            </div>
            <ul className={menuOpen ? 'Open' : ''}>
                <li>
                    <NavLink to='/'> Home </NavLink>
                </li>
                <li>
                    <NavLink to='/reachout'> Reachout </NavLink>
                </li>
                <li>
                    <NavLink to='/about'> About </NavLink>
                </li>
            </ul>

            <Link to='/reachout'> <button className='sendMsgBtn'>Send a message</button> </Link>
        </nav>
    )
}
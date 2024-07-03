import React from 'react';
import { Navbar } from '../components/Navbar';
import '../styles/Reachout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { useTheme } from '../useContext/context';

export const Reachout = () => {
    const [ theme ] = useTheme();

    return (
        <section className='reachoutParentSection'>
            <Navbar/>
            
            <section className='reachoutSection'>
                <h1 className='reachoutSectionFirstText'> creatorscale Help </h1>
                <p className='reachoutSectionSecondText'>You can reach out to us now through our various socail media platforms</p>

                <div className='reachoutMainDiv'>
                    <div className='reachoutFirstDiv'>
                        <div className='whatsAppColumn'>
                            <Link to='https://www.whatsapp.com/'> <FontAwesomeIcon icon={faSquareWhatsapp} className='rWhatsappIcon'/> </Link>
                            <div className='rGridContainer'>
                                <p className='rWA'>Whatsapp</p>
                                <p>Get to talk to me through my Whatsapp, And get fast reply</p>
                            </div>
                        </div>

                        <div className='telegramColumn'>
                            <Link to='https://telegram.org/'> <FontAwesomeIcon icon={faTelegram} className='rTelegramIcon'/> </Link>
                            <div className='rGridContainer'>
                                <p className='rTG'>Telegram</p>
                                <p>Get to reach out to me via Telegram, and get fast reply</p>
                            </div>
                        </div>
                    </div>

                    <div className='reachoutSecondDiv'>
                        <div className='instagramColumn'>
                            <Link to='https://www.instagram.com/'> <FontAwesomeIcon icon={faInstagram} className='rInstagramIcon'/> </Link>
                            <div className='rGridContainer'>
                                <p className='rIG'>Instagram</p>
                                <p>Get to me through instagram, Fast and easy. Easy reply</p>
                            </div>
                        </div>

                        <div className='facebookColumn'>
                            <Link to='https://www.Facebook.com/'> <FontAwesomeIcon icon={faFacebook} className='rFacebookIcon'/> </Link>
                            <div className='rGridContainer'>
                                <p className='rFB'>Facebook</p>
                                <p>Get to us via facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </section>
    )
}
import React from "react";
import '../styles/Footer.css';
import { useTheme } from "../useContext/context";

export const Footer = () => {
    const [theme] = useTheme();

    return (
        <footer className={`Footer ${theme}`}>  
             <section className="footerSection">
                <p className="footerLogo">Creatorscale🚀</p>
                <p className="wordTwo">Enhancing creativity</p>
                <p className="wordThree">Providing you with proffessional web service</p>
                <hr className="footerHr"/>
                <p>©️ Mightyman.inc</p>
            </section>
        </footer>
    )
}
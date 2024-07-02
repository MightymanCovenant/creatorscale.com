import React from 'react';
import { Header } from '../components/Header';
import '../styles/About.css';
import { Footer } from '../components/Footer';
import { useTheme } from '../useContext/context';

export const About = () => {
    const [ theme ] = useTheme();

    return (
        <section className={`aboutSection ${theme}`}>
            <Header/>
            <div className={`aboutMainDiv ${theme}`}>
                <h1 className={`aboutFirstText ${theme}`}> Scaling buisness and brand owners </h1>
                <div className={`aboutLoremTextDiv ${theme}`}>
                    <p className={`aboutLoremText ${theme}`}> Welcome to creatorscale🚀, your destination for top-notch 
                        landing pages and social media optimization services. We help businesses grow their online presence 
                        through innovative solutions. Our visually stunning, conversion-optimized landing pages and engaging 
                        social media strategies drive leads and boost brand visibility.
                        With years of digital marketing experience, our team delivers personalized strategies tailored 
                        to your business needs. We focus on results, using the latest design trends and technologies to maximize 
                        your ROI. Our commitment to building long-term, transparent relationships ensures your success.
                        At creatorscale🚀, creativity and innovation are at the heart of everything we do. Let us help you
                         stand out and achieve digital success. Contact us today to elevate your online presence. </p>
                </div>
            </div>

            <Footer/>
        </section>
    )
}
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
                    <p className={`aboutLoremText ${theme}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, assumenda
                        perspiciatis. Repellendus suscipit est blanditiis, reprehenderit nihil asperiores ipsum, 
                        dolore harum rem quam magni beatae voluptatem itaque rerum eaque mollitia?
                        perspiciatis. Repellendus suscipit est blanditiis, reprehenderit nihil asperiores ipsum, 
                        dolore harum rem quam magni beatae voluptatem itaque rerum eaque mollitia?
                        perspiciatis. Repellendus suscipit est blanditiis, reprehenderit nihil asperiores ipsum, 
                        dolore harum rem quam magni beatae voluptatem itaque rerum eaque mollitia?
                        perspiciatis. Repellendus suscipit est blanditiis, reprehenderit nihil asperiores ipsum, 
                        dolore harum rem quam magni beatae voluptatem itaque rerum eaque mollitia?
                        perspiciatis. Repellendus suscipit est blanditiis, reprehenderit nihil asperiores ipsum, 
                        dolore harum rem quam magni beatae voluptatem itaque rerum eaque mollitia?
                        perspiciatis. Repellendus suscipit est blanditiis, reprehenderit nihil asperiores ipsum, 
                        dolore harum rem quam magni beatae voluptatem itaque rerum eaque mollitia?
                        perspiciatis. Repellendus suscipit est blanditiis, reprehenderit nihil asperiores ipsum, 
                        dolore harum rem quam magni beatae voluptatem itaque rerum eaque mollitia?
                        perspiciatis. Repellendus suscipit est blanditiis, reprehenderit nihil asperiores ipsum, 
                        dolore harum rem quam magni beatae voluptatem itaque rerum eaque mollitia?</p>

                        <p> Hello beautiful world </p>
                </div>
            </div>

            <Footer/>
        </section>
    )
}
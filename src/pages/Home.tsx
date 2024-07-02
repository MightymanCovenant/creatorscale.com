import React from 'react';
import { Header } from '../components/Header';
import '../styles/Home.css'
import '../styles/homeres.css'
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { useTheme } from '../useContext/context';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export const Home = () => {
    const [theme] = useTheme();


    return (
        <section className='mainHtmlBody'>
            <Header/>

            <section className={`sectionOne ${theme}`}>
                <div className={`sectionOneMainDiv ${theme}`}>
                    <p className={`sectionOneFirstText ${theme}`}>Helping <span className='span1'> Creators, Influencers, Business owners </span> create landing pages that turn their visitors into paying customers. And retain them afterwards</p>
                    <p className='sectionOneSecondTxt'> We provide web solutions to brands that are looking to <br />appeal and convert their audience </p>
                    <div className='sectionOneBtnDiv'>
                        <Link to='/reachout'> <button className={`sectionOneBtnOne ${theme}`}> Talk to us 📞</button> </Link>
                        <Link to='/about'> <button className={`sectionOneBtnTwo ${theme}`}> Know more 🤷‍♂️ </button> </Link>
                    </div>
                </div>
            </section>

            <section className={`sectionTwo ${theme}`}>
                <p className={`sectionTwoFirstText ${theme}`}> Our services </p>

                <div className={`sectionTwoMainDiv ${theme}`}>

                    <div className={`secTwoInnerDiv1 ${theme}`}>
                        <p className={`secTwoSubHeading ${theme}`}>Social Media Optimization</p>

                        <div className={`secTwoMainInner ${theme}`}>
                            <p> ✅ To convert your audience </p>
                            <p> ✅ Boost your brand </p>
                            <p> ✅ Get more followers </p>
                            <p> ✅ Increase engagement </p>
                        </div>
                    </div>
                    
                    <div className={`secTwoInnerDiv2 ${theme}`}>
                        <p className='secTwoSubHeading'> We create Landing pages </p>

                        <div className='secTwoMainInner'>
                            <p> ✅ Landing pages that markets you and your product</p>
                            <p> ✅ We boost your SEO </p>
                            <p> ✅ We create systems that automate conversions </p>
                            <p> ✅ We proffesionalize your service </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION FOUR */}

            <section className={`sectionThree ${theme}`}>
                <p className={`sectionThreeFirstText ${theme}`}> Top Tier customer satisfaction <br /> We priotize serving your buisness </p>

                <div className={`wrapper ${theme}`}>
                    <div className='div1'>1</div>
                    <div className='div2'>2</div>
                    <div className='div3'>3</div>
                </div>
            </section>

            <Footer/>
        </section>
    )
}
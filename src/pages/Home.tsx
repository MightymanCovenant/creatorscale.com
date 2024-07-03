import React from 'react';
import { Navbar } from '../components/Navbar'
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
            <Navbar/>            

            <section className='sectionOne'>
                <div className='sectionOneMainDiv'>
                    <p className='sectionOneFirstText'>Helping <span className='span1'> Creators, Influencers, Business owners </span> create landing pages that turn their visitors into paying customers. And retain them afterwards</p>
                    <p className='sectionOneSecondTxt'> We provide web solutions to brands that are looking to <br />appeal and convert their audience </p>
                    <div className='sectionOneBtnDiv'>
                        <Link to='/reachout'> <button className='sectionOneBtnOne'> Talk to us 📞</button> </Link>
                        <Link to='/about'> <button className='sectionOneBtnTwo'> Know more 🤷‍♂️ </button> </Link>
                    </div>
                </div>
            </section>

            <section className='sectionTwo'>
                <p className='sectionTwoFirstText'> Our services </p>

                <div className='sectionTwoMainDiv'>

                    <div className='secTwoInnerDiv1'>
                        <p className='secTwoSubHeading'>Social Media Optimization</p>

                        <div className='secTwoMainInner'>
                            <p> ✅ To convert your audience </p>
                            <p> ✅ Boost your brand </p>
                            <p> ✅ Get more followers </p>
                            <p> ✅ Increase engagement </p>
                        </div>
                    </div>
                    
                    <div className='secTwoInnerDiv2'>
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

            <section className='sectionThree'>
                <p className='sectionThreeFirstText'> Top Tier customer satisfaction <br /> We priotize serving your buisness </p>

                <div className='wrapper'>
                    <div className='div1'>1</div>
                    <div className='div2'>2</div>
                    <div className='div3'>3</div>
                </div>
            </section>

            <Footer/>
        </section>
    )
}
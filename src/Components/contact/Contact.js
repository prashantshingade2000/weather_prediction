import React, { useEffect } from 'react'
import './style.css'
import { SplitText } from "gsap/SplitText"
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom'


export default function Contact() {
    gsap.registerPlugin(SplitText);
    useEffect(() => {
        var tl = gsap.timeline(),
            mySplitText = new SplitText(".details", { type: "words,chars" }),
            chars = mySplitText.chars;


        tl.from(chars, {
            duration: 0.8,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01,
        });
    }, []);
    return (
        <>
            <div className='contact-us'>
                <div id="mySidenav" class="sidenav">
                    <p class="logo">Weather Prediction</p>
                    <NavLink to="/home">Weather Prediction</NavLink>
                    {/* <NavLink to="/about">About Project</NavLink> */}
                    {/* <NavLink to="/developer">Developer</NavLink> */}
                </div>
                <div className='contact-data'>
                    <h2 className='details'>About This Project</h2>
                    <p>
                        Our Project Name is Rainfall Weather Prediction.Weather prediction, an ever-evolving scientific endeavor, plays a crucial role in our daily lives. From planning outdoor activities to making important decisions for various industries, accurate weather forecasts are essential. This essay explores the fascinating world of weather prediction, delving into the methods, challenges, and advancements that have shaped this field over time.
                        <br />
                        <br />
                        <b style={{ fontSize: "1.3rem" }} className='details'>The Future of Weather Prediction: </b>  <br />  <br />
                        Looking ahead, the future of weather prediction holds great promise. Advancements in computing power, data availability, and scientific understanding will continue to refine forecasting models. Integration with other fields such as climate science and artificial intelligence will unlock new insights. Improved observation networks, including satellite constellations and ground-based sensors, will provide a wealth of high-quality data for more accurate predictions.
                        <br /><br />

                        <b style={{ fontSize: "1.3rem" }} className='details'>Conclusion:</b> <br />  <br />
                        Weather prediction is a captivating scientific field with immense practical importance. Through the convergence of data, models, and human expertise, meteorologists strive to unlock the secrets of nature's forecast. While challenges persist, continued advancements in technology and scientific understanding ensure that weather predictions will become increasingly accurate, empowering individuals, industries, and societies to make informed decisions based on the ever-changing atmospheric conditions.
                    </p>
                </div>
            </div>
            <div className='footer'>
                <p class="text-center small tm-copyright-text mb-0">Copyright &copy; <span class="tm-current-year">2023</span>| Designed and Developed By Prashant Shingade & Sushant Waghmare</p>
            </div>
        </>
    )
}

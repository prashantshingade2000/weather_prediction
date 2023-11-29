import React, { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './style.css'
import prashant from '../../Assets/prashant.jpeg'
import sushant from '../../Assets/sushant.jpg'
import whatsapp from '../../Assets/whatsapp.png'
import linked from '../../Assets/li.png'
import { NavLink } from 'react-router-dom'

export default function About() {
    gsap.registerPlugin(ScrollTrigger)


    useEffect(() => {
        document.title = "Rainfall Weather Prediction"
        const timelineHandler = gsap.timeline()

        timelineHandler.add('onetime')
        timelineHandler.fromTo(".prashant", { translateY: "-50vh" }, { translateY: "0vh", duration: 3 }, 'onetime')
        timelineHandler.fromTo(".sushant", { translateY: "150vh" }, { translateY: "100vh", duration: 3 }, 'onetime')
    }
        , [])

    return (
        <div className='about'>
            <div id="mySidenav" class="sidenav">
                <p class="logo">Weather Prediction</p>
                <NavLink to="/home">Weather Prediction</NavLink>
                {/* <NavLink to="/about">About Project</NavLink> */}
                {/* <NavLink to="/developer">Developer</NavLink> */}
            </div>
            <div className='about-main'>
                <div className='prashant'>
                    <div className='left-data'>
                        <h1>Prashant Shingade <small style={{ fontSize: "16px" }}>(MscIT)</small></h1>
                        <p>Hello , I'm Prashant Shingade, a MscIt Student from Mumbai Univercity.Talking about my education I have completed my
                            BSC in Information Technology in year 2021.
                            Currently, I'm learning Mscit. </p>
                        <div className='icons'>
                            <a href='https://web.whatsapp.com/send?8689962500' className='i-data'><img src={whatsapp} width={30} /> &nbsp; 8689962500</a>
                            <a href='https://www.linkedin.com/in/prashant-shingade-0b5a36211/' className='i-data'><img src={linked} width={30} />&nbsp; &nbsp;Prashant Shingade</a>
                        </div>
                    </div>
                    <div className='right-data'>
                        <img src={prashant} />
                    </div>
                </div>
                <div className='sushant'>
                    <div className='left-sushant-data'>
                        <img src={sushant} />
                    </div>
                    <div className='right-sushant-data'>
                        <h1>Sushant Waghmare <small style={{ fontSize: "16px" }}>(MscIT)</small></h1>
                        <p>Hello , I'm Sushant Waghmare, a MscIt Student from Mumbai Univercity.Talking about my education I have completed my
                            BSC in Information Technology in year 2021.</p>
                        <div className='icons'>
                            <a href='https://web.whatsapp.com/send?8689962500' className='i-data'><img src={whatsapp} width={30} /> &nbsp; 8450901210</a>
                            <a href='https://www.linkedin.com/in/sushant-waghmare-031992274' className='i-data'><img src={linked} width={30} />&nbsp; &nbsp;Sushant Waghmare</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className='footer'>
                <p class="text-center small tm-copyright-text mb-0">Copyright &copy; <span class="tm-current-year">2023</span>| Designed and Developed By Prashant Shingade & Sushant Waghmare</p>
            </div>
        </div>
    )
}

// import React, { useState, useEffect } from 'react'
// import './style.css'
// import HomeComponents from '../Home';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// export default function Dashboarddata() {
//     const [showHomePage, setShowHomePage] = useState(false);


//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowHomePage(true);
//         }, 1000);

//         const ctx = gsap.context(() => {
//             gsap.registerPlugin(ScrollTrigger);
//             const timelineHandler1 = gsap.timeline();
//             timelineHandler1.add('first');
//             timelineHandler1.fromTo('.logoname', { opacity: '1' }, { opacity: '1', duration: 1 });
//             timelineHandler1.fromTo('.tophr', { translateY: '-100%' }, { translateY: '0', duration: 1 }, 'first');
//             timelineHandler1.fromTo('.bottomhr', { translateY: '100%' }, { translateY: '0', duration: 1 }, 'first');
//             timelineHandler1.fromTo('.logoname', { transform: 'rotate(0deg)' }, { transform: 'rotate(90deg)', delay: 1 }, 'first');
//         },);

//         return () => clearTimeout(timer);
//     }, []);

//     if (showHomePage) {
//         return <HomeComponents />
//     }
//     return (
//         <div className='header'>
//             <div className='home'>
//                 <hr className='tophr' />
//                 <h1 className='logoname'>SKY DREAMERS CLUB</h1>
//                 <hr className='bottomhr' />
//             </div>
//         </div>
//     )
// }

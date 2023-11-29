import React from 'react';
import WeekInfoCardComponents from './WeekInfoCard';
import ChooseStateComponents from './ChooseState';
import HumidityComponents from './HUMIDITY';
import LeftComponents from './Left';
import { NavLink } from 'react-router-dom'


const HomeComponents = () => {
    return (
        <>
            <div className='homeWrap'>
                {/* <div id="mySidenav" class="sidenav"> */}

                    {/* <p class="logo">Weather Prediction</p>
                    <NavLink to="/home">Weather Prediction</NavLink> */}
                    {/* <NavLink to="/about">About Project</NavLink> */}
                    {/* <NavLink to="/developer">Developer</NavLink> */}
                {/* </div> */}
                <div className='weatherSection'>
                    <LeftComponents />
                    <div className='rightSide'>
                        <ChooseStateComponents />
                        <WeekInfoCardComponents />
                        <HumidityComponents />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponents;


//
// 34480b98aa332da53123a0ac63a4ea9d weather api key
// 34480b98aa332da53123a0ac63a4ea9d
// https://home.openweathermap.org/api_keys



// https://simplemaps.com/data/in-cities
// https://openweathermap.org/
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/data/3.0/onecall?lat=20&lon=85&appid=34480b98aa332da53123a0ac63a4ea9d



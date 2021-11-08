import React, {useEffect} from 'react';
import style from './App.module.scss'
import {Header} from './components/Header/Header';
import {Home} from "./components/Home/Home";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {HourlyWeather} from "./components/HourlyWeather/HourlyWeather";

const App = () => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(()=>{
        if (location.pathname === "/") {
            navigate('/Minsk')
        }
    },[])

    return (
        <div className={style.container}>
            <Header/>
            <Routes>
                <Route path='/:name' element={<Home/>}/>
                <Route path='/moreInfo/:name' element={<HourlyWeather/>}/>
            </Routes>
        </div>
    );
}

export default App;

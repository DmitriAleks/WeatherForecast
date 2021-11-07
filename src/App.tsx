import React, {useEffect, useState} from 'react';
import style from './App.module.scss'
import {getWeatherInCity} from './api/api';
import {Header} from './components/Header/Header';
import {Home} from "./components/Home/Home";
import {StateType} from './common/types/type';
import {Route, Routes, useParams} from "react-router-dom";
import {HourlyWeather} from "./components/HourlyWeather/HourlyWeather";


const App = () => {
    const [state, setState] = useState<StateType>({} as StateType)
    const [init, setInit] = useState<boolean>(false)
    const [currentCity, SetCurrentCity] = useState('Minsk')


    const changeState = (nameCity: string) => {
        SetCurrentCity(nameCity)
    }

    useEffect(() => {
        getWeatherInCity.currentWeather(currentCity)
            .then((res) => {
                setState(res.data)
                setInit(true)
            })
    }, [currentCity])
    return (
        <div className={style.container}>
            <Header/>
            <Routes>
                {init && <Route path='/:name' element={<Home state={state} changeState={changeState} />}/>}
                <Route  path='/moreInfo/:name' element={<HourlyWeather />}/>
            </Routes>


        </div>
    );
}

export default App;

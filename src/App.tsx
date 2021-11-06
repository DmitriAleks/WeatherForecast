import React, {useEffect} from 'react';
import style from './App.module.scss'
import {getWeatherInCity} from './api/api';
import {Header} from './components/Header/Header';

function App() {
    // useEffect(() => {
    //     getWeatherInCity.currentWeather('Kiev')
    //         .then((res) => {
    //             console.log(res)
    //         })
    // }, [])
    return (
        <div className={style.container}>
            <Header/>

        </div>
    );
}

export default App;

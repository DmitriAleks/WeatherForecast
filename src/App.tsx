import React, {useEffect, useState} from 'react';
import style from './App.module.scss'
import {getWeatherInCity} from './api/api';
import {Header} from './components/Header/Header';
import {Home} from "./components/Home/Home";


type LocationType = {
    country: string
    lat: number
    localtime: "2021-11-06 22:19"
    localtime_epoch: number
    lon: number
    name: string
    region: string
    tz_id: string
}

type StateType = {
    current: {},
    forecast: {},
    location: LocationType,
}


function App() {
    const [state,setState] = useState<any>({})
    console.log(state)

    useEffect(() => {
        getWeatherInCity.currentWeather('Minsk')
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return (
        <div className={style.container}>
            <Header />
            <Home state={state}/>
        </div>
    );
}

export default App;

import React, {useEffect, useState} from 'react';
import style from './App.module.scss'
import {getWeatherInCity} from './api/api';
import {Header} from './components/Header/Header';
import {Home} from "./components/Home/Home";
import { StateType } from './common/types/type';



function App() {
    const [state,setState] = useState<StateType>({} as StateType)
    const [init, setInit] = useState<boolean>(false)


    const changeState = (state:StateType) => {
        setState(state)
    }
    console.log(state)


    useEffect(() => {
        getWeatherInCity.currentWeather('Minsk')
            .then((res) => {
                setState(res.data)
                setInit(true)
            })
    }, [])
    return (
        <div className={style.container}>
            <Header />
            {init && <Home state={state} changeState={changeState}/>}
        </div>
    );
}

export default App;

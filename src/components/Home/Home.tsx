import React, {useEffect, useState} from 'react';
import style from './Home.module.scss';
import {StateType} from "../../common/types/type";
import {useNavigate, useParams} from "react-router-dom";
import {NextDays} from './NextDays/NextDays';
import {getWeatherInCity} from "../../api/api";


export const Home = React.memo(() => {
    const {name} = useParams()
    const navigate = useNavigate()
    const [state, setState] = useState<StateType>({} as StateType)
    const [init, setInit] = useState<boolean>(false)


    const changeCity = (event: React.MouseEvent) => {
        navigate(`/${(event.target as HTMLTextAreaElement).value}`);
    }

    useEffect(() => {
        getWeatherInCity.currentWeather(name)
            .then((res) => {
                setState(res.data)
                setInit(true)
            })
    }, [name])


    return (
        <div className={style.test}>
            {init && <div className={style.container}>
                <div className={style.btnContainer}>
                    <button onClick={() => {
                        navigate(`/moreInfo/${name}`)
                    }}>Прогноз на 10 дней
                    </button>
                    <button onClick={changeCity} value={'Minsk'}>Минск</button>
                    <button onClick={changeCity} value={'Moscow City'}>Москва</button>
                    <button onClick={changeCity} value={'Bratislava'}>Братислав</button>
                </div>
                <div className={style.weatherContainer}>
                    <div className={style.contentContainer}>
                        <div className={style.header}>
                    <span>
                           {state.location.country}
                    </span>
                            <span>
                        {state.location.localtime}
                    </span>
                        </div>
                        <div className={style.content}>
                            <div className={style.todayInfo}>
                                <span className={style.nameCity}>погода в <span>{state.location.region}</span></span>
                                <div className={style.weatherToday}>
                                    <span>   {state.current.temp_c}C</span>
                                    <div className={style.description}>
                                        <img src={state.current.condition.icon} alt=""/>
                                        <span>{state.current.condition.text}</span>
                                    </div>
                                </div>
                                <div className={style.additionalInfo}>
                                    <span> влажность {state.current.humidity}%</span>
                                    <span> Скорость ветра:{state.current.wind_kph}</span>
                                </div>
                            </div>
                            <div className={style.nextDayInfo}>
                                <p>Завтра</p>
                                <NextDays forecastday={state.forecast.forecastday[1]}/>
                                <p>Послезавтра</p>
                                <NextDays forecastday={state.forecast.forecastday[2]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
})


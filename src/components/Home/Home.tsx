import React from 'react';
import style from './Home.module.scss';
import {StateType} from "../../common/types/type";
import {getWeatherInCity} from "../../api/api";

type HomePropsType = {
    state: StateType
    changeState:(state:StateType) => void
}

export const Home = (props: HomePropsType) => {

    const callbackFunct = (event: React.MouseEvent) => {
        funct((event.target as HTMLTextAreaElement).value)
    }

    const funct = (city:string) => {
        getWeatherInCity.currentWeather(city)
            .then((res)=>{
                changeCity(res.data)
            })
    }

    const changeCity = (state:StateType) => {
        props.changeState(state)
    }

    return (
        <div className={style.container}>
            <div className={style.btnContainer}>
                <button onClick={callbackFunct} value={'Минск'} >Минск</button>
                <button onClick={callbackFunct} value={'Москва'}>Москва</button>
                <button onClick={callbackFunct} value={'Братислав'}>Братислав</button>
            </div>
            <div className={style.weatherContainer}>
                <div className={style.contentContainer}>
                    <div className={style.header}>
                    <span>
                           {props.state.location.country}
                    </span>
                        <span>
                        {props.state.location.localtime}
                    </span>
                    </div>
                    <div className={style.content}>
                        <div className={style.todayInfo}>
                            <span className={style.nameCity}>погода в {props.state.location.region}</span>
                            <div className={style.weatherToday}>
                                <span>   {props.state.current.temp_c}C</span>
                                <span>{props.state.current.condition.text}</span>
                                <span> влажность {props.state.current.humidity}%</span>
                                <img src={props.state.current.condition.icon} alt=""/>
                                <span> Скорость ветра:{props.state.current.wind_kph}</span>
                            </div>
                            <div className={style.additionalInfo}>дополнительно</div>
                        </div>
                        <div className={style.nextDayInfo}>
                            <div className={style.weatherTomorrow}>
                                <span>мин Т{props.state.forecast.forecastday[1].day.mintemp_c}</span>
                                <span>макс Т{props.state.forecast.forecastday[1].day.maxtemp_c}</span>
                                <span>{props.state.forecast.forecastday[1].day.condition.text}</span>
                            </div>
                            <div className={style.weatherAfter}></div>

                        </div>
                    </div>
                </div>


            </div>
        </div>)
}
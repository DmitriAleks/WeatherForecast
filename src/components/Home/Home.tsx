import React from 'react';
import style from './Home.module.scss';
import {ForecastDayType, ForecastType, StateType} from "../../common/types/type";
import {getWeatherInCity} from "../../api/api";
import {useParams, useNavigate} from "react-router-dom";


type HomePropsType = {
    state: StateType
    changeState: (nameCity: string) => void
}

export const Home = (props: HomePropsType) => {
    const {name} = useParams()
    const navigate = useNavigate()


    const changeCity = (event: React.MouseEvent) => {
        navigate(`/${(event.target as HTMLTextAreaElement).value}`);
        props.changeState((event.target as HTMLTextAreaElement).value);
    }


    return (
        <div className={style.container}>
            <div className={style.btnContainer}>
                <button onClick={() => {
                    navigate(`/moreInfo/${name}`)
                }}>Подробнее
                </button>
                <button onClick={changeCity} value={'Minsk'}>Минск</button>
                <button onClick={changeCity} value={'Moscow City'}>Москва</button>
                <button onClick={changeCity} value={'Bratislava'}>Братислав</button>
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
                            <span className={style.nameCity}>погода в <span>{props.state.location.region}</span></span>
                            <div className={style.weatherToday}>
                                <span>   {props.state.current.temp_c}C</span>
                                <div className={style.description}>
                                    <img src={props.state.current.condition.icon} alt=""/>
                                    <span>{props.state.current.condition.text}</span>
                                </div>
                            </div>
                            <div className={style.additionalInfo}>
                                <span> влажность {props.state.current.humidity}%</span>
                                <span> Скорость ветра:{props.state.current.wind_kph}</span>
                            </div>
                        </div>
                        <div className={style.nextDayInfo}>
                            <div className={style.weatherTomorrow}>
                                <NextDays forecastday={props.state.forecast.forecastday[1]}/>
                                <NextDays forecastday={props.state.forecast.forecastday[2]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
type NextDaysProps = {
    forecastday: ForecastDayType
}

const NextDays: React.FC<NextDaysProps> = ({forecastday}) => {
    return (
        <div className={style.weatherTomorrow}>
            <span>мин Т{forecastday.day.mintemp_c}</span>
            <span>макс Т{forecastday.day.maxtemp_c}</span>
            <span>{forecastday.day.condition.text}</span>
        </div>
    )

}
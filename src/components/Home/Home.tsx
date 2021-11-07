import React from 'react';
import style from './Home.module.scss';
import {StateType} from "../../common/types/type";
import {getWeatherInCity} from "../../api/api";
import {useParams, useNavigate} from "react-router-dom";


type HomePropsType = {
    state: StateType
    changeState:(nameCity:string) => void
}

export const Home = (props: HomePropsType) => {
   const{name} = useParams()
   const navigate = useNavigate()


    const changeCity = (event: React.MouseEvent) => {
        navigate(`/${(event.target as HTMLTextAreaElement).value}`);
        props.changeState((event.target as HTMLTextAreaElement).value);
    }


    return (
        <div className={style.container}>
            <div className={style.btnContainer}>
                <button onClick={()=>{navigate(`/moreInfo/${name}`)}} >Подробнее</button>
                <button onClick={changeCity} value={'Minsk'} >Минск</button>
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
import React, {ChangeEvent, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getWeatherInCity} from '../../api/api';
import {SixteenDaysWeatherType} from '../../common/types/type';
import style from './HourlyWeather.module.scss';
import {Day} from "./Day/Day";


export const HourlyWeather = () => {
    console.log('HourlyWeather')
    const {name} = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState<Array<SixteenDaysWeatherType>>([])
    state.length = 10
    const [value, setValue] = useState<string>('')
    const ChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value.replace(/[^a-zA-Z\d]/ig, ""))
    }
    const findCity = () => {
        navigate(`/moreInfo/${value}`)
    }

    useEffect(() => {
        if (name) {
            getWeatherInCity.weatherOnTenDays(name)
                .then((res) => {
                    setState(res.data.data)
                    console.log(res.data.data)
                })
        }
    }, [name])


    return (
        <div className={style.container}>
            <div className={style.btnContainer}>
                <button onClick={() => {
                    navigate(`/${name}`)
                }}>Назад
                </button>
                <input type="text" value={value} onChange={ChangeValue} />
                <button onClick={findCity} >Показать</button>
            </div>
            <div className={style.contentContainer}>
                <div className={style.content}>
                    <span>Погода на 10 дней</span>
                    <div className={style.days}>
                        {state.map((el) => {
                            return <Day date={el.datetime} mint={el.min_temp}
                                         maxt={el.max_temp}/>
                        })}
                    </div>
                </div>

            </div>
        </div>)
}

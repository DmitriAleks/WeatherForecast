import {ForecastDayType} from "../../../common/types/type";
import React from "react";
import style from './NextDats.module.scss'

type NextDaysProps = {
    forecastday: ForecastDayType
}

export const NextDays: React.FC<NextDaysProps> = ({forecastday}) => {
    return (
        <div className={style.container}>
            <span>{forecastday.day.mintemp_c}....{forecastday.day.maxtemp_c}</span>
            <div>
                <span>{forecastday.day.condition.text}</span>
                <img src={forecastday.day.condition.icon} alt=""/>
            </div>
        </div>
    )

}
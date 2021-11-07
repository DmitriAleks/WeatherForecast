import style from "./Day.module.scss";
import React from "react";

type DayProps = {
    date: Date
    maxt: number
    mint: number

}


export const Day = (props: DayProps) => {
    const day = props.date.toString()
    return (
        <div className={style.day}>
            <span>{day.substring(8, 11)}</span>
            <div className={style.temperatureLimit}>
                <span>макс. темп.{props.maxt}</span>
                <span>мин. темп.{props.mint}</span>
            </div>

        </div>
    )
}
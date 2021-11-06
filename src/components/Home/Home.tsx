import React from 'react';
import style from './Home.module.scss';

type HomePropsType = {
    state: any
}

export const Home = (props: HomePropsType) => {
    return (<div className={style.container}>
        <div className={style.btnContainer}>
            <button>Минск</button>
            <button>Москва</button>
            <button>Братислав</button>
        </div>
        <div className={style.weatherContainer}>
            <div className={style.contentContainer}>
                <div className={style.header}>страна и время</div>
                <div className={style.content}>
                    <div className={style.todayInfo}>
                        <span className={style.nameCity}>город</span>
                        <div className={style.weatherToday}>погода</div>
                        <div className={style.additionalInfo}>дополнительно</div>

                    </div>
                    <div className={style.nextDayInfo}>
                        <div className={style.weatherTomorrow}>на завтра</div>
                        <div className={style.weatherAfter}></div>

                    </div>
                </div>
            </div>


        </div>
    </div>)
}
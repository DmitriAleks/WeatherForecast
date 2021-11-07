import React from 'react';
import {useNavigate, useParams} from "react-router-dom";




export const HourlyWeather = () => {
    const{name}= useParams()
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={()=>{
                navigate(`/${name}`)
            }
            } value={'Minsk'} >Назад</button>



        </div>)
}
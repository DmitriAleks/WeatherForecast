import React from 'react'
import style from './Header.module.scss'
import {useParams} from "react-router-dom";



export  const Header =  () => {
   const{ name }= useParams()
    console.log(name + 'header')
    return ( <div className={style.content}>

        <button>Home</button>
        <button>Podobnee</button>

    </div>)
}

import React from 'react'
import {Route, Routes} from "react-router-dom";
import App from '../App';
import {Home} from "./Home/Home";

export const Test = () => {
    return(
        <div>
            <Routes>
                <Route path='/region/Minsk' element={<App/>} />
            </Routes>
        </div>
    )
}
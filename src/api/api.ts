import axios from "axios";


const instance = axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
});

export const getWeatherInCity = {
    currentWeather(city: string = 'Minsk' ) {
        return instance.get(`/forecast.json?key=889bf2e72ffb4c7db78131955210611&q=${city}&days=3&aqi=no&lang=ru`)
    },
    weatherOnTenDays(city: string) {
        return axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=229257e5820d4a98a7003a1deb91356d`)
    },

}
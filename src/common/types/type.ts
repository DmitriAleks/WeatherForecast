
export type ConditionType = {
    text: string,
    icon: string,
    code: number
}
export type CurrentType = {
    cloud: number
    condition: ConditionType
    feelslike_c: number
    feelslike_f: number
    gust_kph: number
    gust_mph: number
    humidity: number
    is_day: number
    last_updated: Date
    last_updated_epoch: number
    precip_in: number
    precip_mm: number
    pressure_in: number
    pressure_mb: number
    temp_c: number
    temp_f: number
    uv: number
    vis_km: number
    vis_miles: number
    wind_degree: number
    wind_dir: string
    wind_kph: number
    wind_mph: number
}


export type LocationType = {
    country: string
    lat: number
    localtime: Date
    localtime_epoch: number
    lon: number
    name: string
    region: string
    tz_id: string
}

export type ForecastType = {
    forecastday: Array<ForecastDayType>
}
export type ForecastDayType ={
    astro: {moon_illumination: string
        moon_phase: string
        moonrise: string
        moonset: string
        sunrise: string
        sunset: string}
    date: Date
    date_epoch: number
    day:DayType
    hour:Array<HourType>

}
export type DayType = {
    avghumidity: number
    avgtemp_c: number
    avgtemp_f: number
    avgvis_km: number
    avgvis_miles: number
    condition: ConditionType
    daily_chance_of_rain: number
    daily_chance_of_snow: number
    daily_will_it_rain: number
    daily_will_it_snow: number
    maxtemp_c: number
    maxtemp_f: number
    maxwind_kph: number
    maxwind_mph: number
    mintemp_c: number
    mintemp_f: number
    totalprecip_in: number
    totalprecip_mm: number
    uv: number
}

export type HourType = {
    chance_of_rain: number
    chance_of_snow: number
    cloud: number
    condition: ConditionType
    dewpoint_c: number
    dewpoint_f: number
    feelslike_c: number
    feelslike_f: number
    gust_kph: number
    gust_mph: number
    heatindex_c: number
    heatindex_f: number
    humidity:number
    is_day: number
    precip_in: number
    precip_mm: number
    pressure_in: number
    pressure_mb: number
    temp_c: number
    temp_f: number
    time: Date
    time_epoch: number
    uv: number
    vis_km: number
    vis_miles: number
    will_it_rain: number
    will_it_snow: number
    wind_degree: number
    wind_dir: string
    wind_kph: number
    wind_mph: number
    windchill_c: number
    windchill_f: number
}
export type SixteenDaysWeatherType = {
    app_max_temp: number
    app_min_temp: number
    clouds: number
    clouds_hi: number
    clouds_low: number
    clouds_mid: number
    datetime: Date
    dewpt: number
    high_temp: number
    low_temp: number
    max_dhi: number
    max_temp: number
    min_temp: number
    moon_phase: number
    moon_phase_lunation: number
    moonrise_ts: number
    moonset_ts: number
    ozone: number
    pop: number
    precip: number
    pres: number
    rh: number
    slp: number
    snow: number
    snow_depth: number
    sunrise_ts: number
    sunset_ts: number
    temp: number
    ts: number
    uv: number
    valid_date: Date
    vis: number
    weather: {icon: string, code: number, description: string}
    wind_cdir: string
    wind_cdir_full: string
    wind_dir: number
    wind_gust_spd: number
    wind_spd: number
}



export type StateType = {
    current: CurrentType,
    forecast: ForecastType,
    location: LocationType,
}


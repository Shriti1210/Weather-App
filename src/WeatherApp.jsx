import { useState } from "react"
import SearchBox from "./SearchBox"
import WeatherInfo from "./WeatherInfo"


export default function WeatherApp(){
    const [weatherInfor,setWeatherInfor]=useState({
            temp:25.05,
            city:"delhi",
            tempMin:25.05,
            tempMax:25.05,
            humidity:47,
            feelsLike:24.05,
            weather:"haze",
    })

    let updateInfo=(result)=>{
        setWeatherInfor(result)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>WeatherApp by Shriti</h1>
            <SearchBox updateInfo={updateInfo}/>
            <WeatherInfo info={weatherInfor}/>
        </div>
    )
}
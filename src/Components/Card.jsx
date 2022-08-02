import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'


const Card = ({ lon, lat,  }) => {

    const [weather, setweather] = useState()
    const [temperture, settemperture] = useState()
    const [isCelsius, setisCelsius] = useState(true)
    const [isLoading, setisLoading] = useState(true)


    useEffect(() => {
        if (lat) {
            const APIkey = 'b8e5e1c51e60cab601c00090ef489387'
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`

            axios.get(URL)
                .then(res => {
                    setweather(res.data)
                    const temp = {
                        celsius: `${Math.round(res.data.main.temp - 273.15)} °C` ,
                        farenheit: `${Math.round(res.data.main.temp - 273.15) * 9/5 + 32} °F`
                    }
                    settemperture(temp)
                    setisLoading(false)
                })
                .catch(err => console.log(err))
            }
            
            
        }, [lat, lon])
        
        console.log(weather);

const handleClick = () => setisCelsius(!isCelsius)

if(isLoading){
    return < LoadingScreen />

} else {
        return (
            <div className='card'>
                <div className="title">
                    <h1>Weather App</h1>
                    <h2>{weather?.name},{weather?.sys.country}</h2>

                </div>

                <div className="content">

                    <div className="img">
                        <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
                        <h2>{isCelsius ? temperture?.celsius : temperture?.farenheit}</h2>
                        <button onClick={handleClick}>{isCelsius ? "Change to °F" : "Change to °C"}</button>


                    </div>

                    <div className="decript">

                        <h3>"{weather?.weather[0].description}"</h3>
                        <h4> Wind Speed {weather?.wind.speed} m/s</h4>
                        <h4>Clouds {weather?.clouds.all} %</h4>
                        <h4>Pressure {weather?.main.pressure} mb</h4>
                        <img className='ico' src="../assets/bxl-tailwind-css.svg" alt="" />

                    </div>

                </div>

            </div>




        )
    }

}

  


export default Card
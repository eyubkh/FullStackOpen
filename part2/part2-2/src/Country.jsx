import React, { useEffect , useState } from 'react'
import {Connection} from './axios'

export default function Country({name,languages,capital,population,img}){
    const [weather = {}, setWeather ]= useState({})
    useEffect(() => {
      Connection(`http://api.weatherstack.com/current?access_key=${import.meta.env.VITE_API_KEY}&query=${capital}`)
      .then(data => {
          setWeather(data.current)
          console.log(data)
      })
    }, [])
    
    return(
    <div>
        <h2>{name}</h2>
        <p>Capital {capital}</p>
        <p>Population {population}</p>
        <h2>Languages</h2>
        {languages.map(item => <p key={item.name}>{item.name}</p>)}
        <img src={img}  alt="" />
        <h2>Weather in {name}</h2>
        <p><span>tempurature</span>  {weather.temperature} Celcius</p>
        <img className="weather" src={weather.weather_icons} alt="" />
        <p>Wind: {weather.wind_speed} mph direcction {weather.wind_dir}</p>

    </div>
    )
  }
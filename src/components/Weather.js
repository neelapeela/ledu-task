import axios from 'axios';
import { useState, useEffect } from 'react'
import Day from './Day';
import CircularProgress from '@mui/material/CircularProgress';


// complete weather display
const Weather = () => {
    const [lat, setLat] = useState(0.0);
    const [long, setLong] = useState(0.0);
    const [data, setData] = useState({})

    useEffect(()=>{
      const fetchdata = async () =>{
        navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res)=>{setData(res)})
      }
      fetchdata()
      console.log(data)
    },[lat, long])

        return(
          <>
      {(typeof data.request!='undefined') ? (
        <>
        <span className='Weather'>
            <h1>Weather</h1>
            <h2>{data.data.city.name}</h2>
            <div className='weatherDisplay'>
                {data.data.list.map((x)=>(data.data.list.indexOf(x)%8==0)?
                  <Day dt={x.dt_txt} temp={x.main.temp} min={x.main.temp_min} max={x.main.temp_max} icon={x.weather[0].icon} wind={x.wind.speed} humidity={x.main.humidity}/>
                :null)}
            </div>
         </span>
        </>
      ): (
        <div><CircularProgress /></div>
      )}
      
    </>)
}

export default Weather
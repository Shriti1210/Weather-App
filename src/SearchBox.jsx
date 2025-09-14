import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false)
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="446bd9cf96cfec51f4802ff3836509d8"
    
    //for api calls we always use async function
    let getWeatherInfo=async()=>{
    try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        }
        console.log(result);
        return result;
        }catch(err){
        setError(true);
        }
    }

    let handleChange=(evt)=>{
       setCity(evt.target.value);
    }
    let handleSubmit=async(evt)=>{
        try{
          evt.preventDefault();
          setError(false);
          let newInfo = await getWeatherInfo();
           if (newInfo) {
                updateInfo(newInfo);
           }
           setCity("");
        }
        catch(err){
            throw err;
        }
    }
    return(
        <div className="SearchBox">
           
           <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} required /> <br></br>
                 <br></br>
                <Button variant="contained"  type="submit" endIcon={<SendIcon />}> Search </Button>
           </form>
           {error && <p style={{color:"red"}}>No such place exists</p>}
        </div> 
    )

}
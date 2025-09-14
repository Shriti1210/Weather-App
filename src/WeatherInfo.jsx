import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./WeatherInfo.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const HOT_URL="https://images.unsplash.com/photo-1591126942117-896647ebcbba?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const COLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const RAIN_URL="https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function WeatherInfo({info}){
    return(
         <div className='weather-info'>
            <h1>Weather Info</h1>
            <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               sx={{ height: 140 }}
               image={info.humidity>80
                  ?RAIN_URL:
                  info.temp>15 
                  ?HOT_URL
                  :COLD_URL}
               title="green iguana"
           />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80
                  ?<ThunderstormIcon/>:
                  info.temp>15 
                  ?<SunnyIcon/>
                  :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature:{info.temp}</p>
          <p>Humidity:{info.humidity}</p>
          <p>Max Temp:{info.tempMax}</p>
          <p>Min Temp:{info.tempMin}</p>
          <p>Weather can be described as <i><b>{info.weather}</b></i> feels Like:{info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}
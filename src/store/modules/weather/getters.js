const getWeatherToday = state => {
 
 if(state.weatherToday.name) {  
 return {
     location: state.weatherToday.name,
     temperature: state.weatherToday.main.temp,
     pressure: state.weatherToday.main.pressure,
     humidity: state.weatherToday.main.humidity,
     sunrise: state.weatherToday.sys.sunrise,
     sunset: state.weatherToday.sys.sunset
 }
 } else{
     return null
 }  
}

export {
    getWeatherToday
}
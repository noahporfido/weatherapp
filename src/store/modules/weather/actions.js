import weatherService from '@/services/weatherService' 

    
   const getWeatherWithZipCode = ({commit},zipCode) => {

    commit('TOGGLE_LOADING', true, { root: true })

    weatherService.getWheatherWithCode(zipCode).then((weatherData) => commit("SET_WEATHER_TODAY", weatherData)).catch(err => console.log(err));

    commit('TOGGLE_LOADING', false, { root: true })
} 


export {
    getWeatherWithZipCode
}
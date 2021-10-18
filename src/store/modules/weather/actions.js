import weatherService from '@/services/weatherService' 

    
   const getWeatherWithZipCode = ({commit},zipCode) => {

    commit('TOGGLE_LOADING', true, { root: true })

    weatherService.getWheatherWithCode(zipCode).then((weatherData) => commit("SET_WEATHER_TODAY", weatherData)).catch(err => { commit('TOGGLE_NOTIFICATION_HEADER', false, { root: true }) });

    commit('TOGGLE_LOADING', false, { root: true })
} 


export {
    getWeatherWithZipCode
}
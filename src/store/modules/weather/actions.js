import weatherService from '@/services/weatherService' 

    
   const getweatherWithZipCode =  async ({commit},zipCode) => {

    commit('TOGGLE_LOADING', true, { root: true })
    const weatherData = await weatherService.getWheatherWithCode(zipCode).catch(err => console.log(err));

    commit("SET_WEATHER_TODAY", weatherData)
    commit('TOGGLE_LOADING', false, { root: true })
} 


export {
    getweatherWithZipCode
}
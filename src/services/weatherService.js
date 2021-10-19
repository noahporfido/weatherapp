import httpService  from './httpService'

const getWheatherWithCode = async (zipCode) => {

    //catch for not showing api key in console when error happens
    const {data} = await httpService.get(`?zip=${zipCode},ch&units=metric&appid=${process.env.VUE_APP_API_TOKEN}`).catch(error => console.clear())

    return data
}

export default {
    getWheatherWithCode
}
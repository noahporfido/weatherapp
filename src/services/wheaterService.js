import httpService  from './httpService'

const getWheatherWithCode = async (zipCode) => {

    const {data} = await httpService.get(`?zip=${zipCode},ch&appid=${process.env.VUE_APP_API_TOKEN}`);

    return data
}

export default {
    getWheatherWithCode
}
import wheaterService from '@/services/wheaterService' 

   const getWheaterWithZipCode =  async ({commit},zipCode) => {
    
   const wheaterData = await wheaterService.getWheatherWithCode(zipCode);

   commit("SET_WHEATER_TODAY", wheaterData)
   } 


export {
    getWheaterWithZipCode
}
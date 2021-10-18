const SET_WHEATER_TODAY = (state, payload) => {
    console.log(payload)
    state.wheaterToday = payload
}


export {
    SET_WHEATER_TODAY
}
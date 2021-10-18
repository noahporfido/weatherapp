const TOGGLE_LOADING = (state, payload) => {
        state.loaderState = payload
}

const TOGGLE_NOTIFICATION_HEADER = (state) => {
    state.showHeader = true
    setTimeout(() => state.showHeader = false, 5000)
}


export {
    TOGGLE_LOADING,
    TOGGLE_NOTIFICATION_HEADER
}
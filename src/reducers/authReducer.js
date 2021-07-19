let initialState = {
    isAuthenticated: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return {
                ...state,
                isAuthenticated:action.payload
            }
        default:
            return state;
    }
}

export default reducer;
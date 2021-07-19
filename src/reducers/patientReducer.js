let initialState = {
    patientList: [],
    error: null,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                patientList: action.payload.patients
            }
        case "LOGIN_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }
}

export default reducer;
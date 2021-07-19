import { combineReducers } from "redux";
import patientReducer from "./patientReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    patient: patientReducer,
    auth: authReducer
});

export default rootReducer;
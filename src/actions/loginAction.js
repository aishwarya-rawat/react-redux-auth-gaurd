
import axios from "axios";
//import * as action from "./actionConstants"
import history from "../history";

const loginSuccess = data => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data
  }
}

const loginRequest = () => {
  return {
    type: "LOGIN_REQUEST"
  }
}

const loginFailure = data => {
  return {
    type: "LOGIN_FAILURE",
    error: data
  }
}

const setAuth = data => {
  return {
    type: "SET_AUTH",
    payload: data
  }
}

export const login = (payload) => {

  const URL = "https://run.mocky.io/v3/3669c83a-9ba1-4424-b08f-a8ef6d699966";
  return (dispatch) => {
    dispatch(loginRequest());
    axios.post(URL, payload)
      .then(response => {
        dispatch(loginSuccess(response.data));
        dispatch(setAuth(true));
        history.push("/patient");
      })
      .catch(error => {
        dispatch(loginFailure(error));
        dispatch(setAuth(false));
      });
  }
}

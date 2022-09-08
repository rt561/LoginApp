import * as actionTypes from "./actionType";
import { toastData } from "../../utils/toaster";
import { POST } from "../../utils/apiService";

export const loginRequest = (data, callback) => {
  // data.uriName="mii"
  // data.device_id="jjjjjjjj"
  // data.device_token="hhh"
  return (dispatch) => {
    POST("https://reqres.in/api/login", data)
      .then((response) => {
        dispatch({
          type: actionTypes.GET_LOGIN_DATA,
          payload: response,
        });

        
        console.log(response);
        // if (response.data.statusCode == 200) {
          localStorage.setItem("token", response.data.token);
          // localStorage.setItem("email", response.data.data.email);
        window.location.href="/dashboard"
       
        // }
        callback();
        toastData(response);
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.GET_ERRORS,
          payload: err,
        });
        toastData(err.response);
      });
  };
};

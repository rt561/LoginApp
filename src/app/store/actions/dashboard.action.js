import * as actionTypes from "./actionType";
import { toastData } from "../../utils/toaster";
import { GET } from "../../utils/apiService";

export const Data = (data)=> {
  const request = GET("https://reqres.in/api/users")
  return (dispatch) =>
    request
      .then((response) => {
        dispatch({
          type: actionTypes.GET_DASHBOARD_DATA,
          payload: response,
        })
         console.log("jjjj")
        
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.GET_ERRORS,
          payload: err,
        })
        toastData(err.response)
      })
}

import * as actionTypes from "./actionType";
import { toastData } from "../../utils/toaster";
import { GET } from "../../utils/apiService";


export const userDetail = (id)=> {
  const request = GET(`https://reqres.in/api/users?id=${id}`)
  return (dispatch) =>
    request
      .then((response) => {
        dispatch({
          type: actionTypes.GET_USERDETAIL_DATA ,
          payload: response,
        })
         console.log("kkkkkk")
        
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.GET_ERRORS,
          payload: err,
        })
        toastData(err.response)
      })
}

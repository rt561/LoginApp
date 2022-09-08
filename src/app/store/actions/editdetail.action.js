import * as actionTypes from './actionType'
import { PUT } from '../../utils/apiService'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export const editdetail = (id,email,first_name,callback) => {

const request =  PUT (`https://reqres.in/api/users/${id}`,{email:email, Name: first_name})
     console.log(request)
  
    return (dispatch) =>
    request
      .then((response) => {
        dispatch({
          type: actionTypes.EDIT_DETAIL ,
          payload: response,
        })
         console.log("vvvvvv")
        
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.GET_ERRORS,
          payload: err,
        })
        // toastData(err.response)
      })
}
import axios from "axios";
import { logout } from "./token";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// initialize the baseUrl // axios.defaults.baseURL = '';

// custom exception display messages
const customException = (res) => {
  switch (res.response.status) {
    case 401:
      toast.error(
        "You have been logged out for your safety. Please login again to re-authenticate.",
        { autoClose: 4000 }
      );
      setTimeout(() => {
        logout();
      }, 3000);

      break;

    default:
      break;
  }
};

export default function AxiosInterceptor() {
  // Add a response interceptor
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error);
      // Do something with request error
      customException(error); // custom exception incoming response error occurred
      return Promise.reject(error);
    }
  );
}

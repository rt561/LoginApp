// import Cookies from "js-cookie";
// import { toast } from "react-toastify";
export const getToken = () => {
  let allcookies = document.cookie.split(';')
  let token = ''
  for (let i = 0; i < allcookies.length; i++) {
    if (allcookies[i].split('=')[0].trim() === 'refresh_token') {
      token = allcookies[i].split('=')[1]
    }
  }
  return token
}

export const getAccToken = () => {
  let token = localStorage.getItem('token')
  return token
}

export const isLogin = () => {
  let allcookies = document.cookie.split(';')
  let token = ''
  for (let i = 0; i < allcookies.length; i++) {
    if ((token = allcookies[i].split('=')[1])) {
      return true
    }
  }

  return false
}

export const logout = () => {
  localStorage.removeItem('token')
  
  // localStorage.removeItem('email')
  // localStorage.removeItem('password')
  localStorage.clear()
  // setTimeout(() => {
    window.location.href = 'http://localhost:3000/'

  // }, 2000)
}

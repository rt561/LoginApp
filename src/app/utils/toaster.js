import { logout } from './token'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const toastData = (toastStatus) => {
  switch (toastStatus?.status) {
    case 200:
      return toast.success(toastStatus?.data?.success);
    case 400: return toast.error(toastStatus?.data?.message);
    case 422: return toast.error(toastStatus?.data?.message);
    case 403: return toast.error(toastStatus?.data?.message) && logout();
    case 404:
    case 500:
    case 505:
      return toast.error(toastStatus?.data?.message);
    case 510:
      return toast.error(toastStatus?.data?.message);
  }
};
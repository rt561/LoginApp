import { combineReducers } from 'redux'
import loginReducer from './login.reducer'
import dashboardReducer from './dashboard.reducer'
import detailReducer from './detail.reducer'
import editdetailReducer from './editdetail.reducer'
const rootReducer = combineReducers({

  loginReducer,
  dashboardReducer,
  detailReducer,
  editdetailReducer,
  
  
})

export default rootReducer

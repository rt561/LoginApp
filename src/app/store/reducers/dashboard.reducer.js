import * as actionTypes from '../actions/actionType';

const initialState = {
  getDashboardData: {},
}

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DASHBOARD_DATA: {
        
      return {
        ...state,
        getDashboardData: action.payload,
      }
     
    }
    default: {
      return state
    }
  }
}

export default dashboardReducer

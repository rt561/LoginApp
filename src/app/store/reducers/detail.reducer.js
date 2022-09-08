import * as actionTypes from "../actions/actionType";

const initialState = {
  userDetailData:{},
}

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERDETAIL_DATA: {
        
      return {
        ...state,
        userDetailData: action.payload,
      }
     
    }
    default: {
      return state
    }
  }
}

export default detailReducer

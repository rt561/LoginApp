import * as actionTypes from "../actions/actionType";

const initialState = {
  loginData: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LOGIN_DATA: {
      return {
        ...state,
        loginData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;

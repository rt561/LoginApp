import * as actionTypes from "../actions/actionType";

const initialState = {
  editData: {},
};

const editdetailReducer  = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_DETAIL: {
      return {
        ...state,
        editData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default editdetailReducer;

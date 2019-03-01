import * as actionTypes from "../action";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, { id: new Date(), value: action.result }]
        // results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter(
        index => index.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;

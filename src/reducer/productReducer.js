import React from "react";
export const initialState = {
  loading: true,
  products: [],
  error: null,
};

function productReducer(state, action) {
  switch (action.type) {
    case "SUCCESS_FETCHING":
      return {
        ...state,
        loading: false,
        error: null,
        products: action.data,
      };

    case "FAILED":
      return {
        ...state,
        error: "Failed to fetch",
      };
    default:
      return state;
  }
}

export default productReducer;

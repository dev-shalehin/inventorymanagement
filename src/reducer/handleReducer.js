export const initialFormState = {
  productName: "",
  brand: "",
  quantity: "",
  price: "",
};

function handleReducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "RESET_FORM":
      return initialFormState;

    default:
      return state;
  }
}

export default handleReducer;

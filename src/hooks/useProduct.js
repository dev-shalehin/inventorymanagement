import { useEffect, useReducer } from "react";
import productReducer, { initialState } from "../reducer/productReducer";

export const useProduct = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const data = await res.json();
        dispatch({ type: "SUCCESS_FETCHING", data });
      } catch {
        dispatch({ type: "FAILED" });
      }
    };
    getProducts();
  }, []);
  const handledelete = (productid) => {
    dispatch({
      type: "DELETE",
      payload: productid,
    });
  };
  return { state};
};

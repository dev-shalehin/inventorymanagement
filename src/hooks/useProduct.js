import { useEffect, useReducer } from "react";
import productReducer, { initialState } from "../reducer/productReducer";
const apiUrl = "http://localhost:3000/products";

export const useProduct = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        dispatch({ type: "SUCCESS_FETCHING", data });
      } catch {
        dispatch({ type: "FAILED" });
      }
    };
    getProducts();
  }, []);

  const pushProduct = async (newProduct) => {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await response.json();
    dispatch({
      type: "ADD_PRODUCT",
      data,
    });
  };
  return { state, pushProduct };
};

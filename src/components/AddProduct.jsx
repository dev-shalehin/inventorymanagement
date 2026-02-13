import { useEffect, useReducer, useState } from "react";
import productReducer, { initialState } from "../reducer/productReducer";

const AddProduct = () => {
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
  });
  return (
    <div>
      <ul>
        {state.products.map((product) => (
          <li key={product.id}>{product.productName}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddProduct;

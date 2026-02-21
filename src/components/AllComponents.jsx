import React from "react";
import ProductTable from "./ProductTable";
import ProductsFeature from "./ProductsFeature";
import { useProduct } from "../hooks/useProduct";

export default function AllComponents() {
  const { state, pushProduct } = useProduct();
  return (
    <>
      <ProductsFeature pushProduct={pushProduct} />
      <ProductTable state={state} />
    </>
  );
}

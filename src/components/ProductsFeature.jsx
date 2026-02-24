import React, { useState } from "react";
import AddProduct from "./AddProduct";
import Buttons from "./commons/Buttons";
export default function ProductsFeature({ pushProduct }) {
  const [productModal, setProductModal] = useState(false);
  return (
    <div>
      <Buttons onClick={() => setProductModal(true)}>Add Product</Buttons>
      {productModal && (
        <AddProduct
          pushProduct={pushProduct}
          onClose={() => setProductModal(false)}
        />
      )}
    </div>
  );
}

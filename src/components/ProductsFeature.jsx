import React, { useState } from "react";
import AddProduct from "./AddProduct";
export default function ProductsFeature({ pushProduct }) {
  const [productModal, setProductModal] = useState(false);
  return (
    <div>
      <button
        className="bg-black text-white px-3 py-2 rounded font-medium"
        onClick={() => setProductModal(true)}
      >
        Add New Product
      </button>
      {productModal && (
        <AddProduct
          pushProduct={pushProduct}
          onClose={() => setProductModal(false)}
        />
      )}
    </div>
  );
}

import React from 'react'

function handleReducer(state, action) {
switch (action.type) {
    case "SUBMIT":
        return{
             action.e.preventDefault();
    const newProduct = {
      productName: formData.productName,
      brand: formData.brand,
      quantity: formData.quantity,
      price: formData.price,
    };
    pushProduct(newProduct);
    onClose();
    setFormData({
      productName: "",
      brand: "",
      quantity: "",
      price: "",
    });
        }
        
        break;

    default:
        break;
}
}
 

export default handleReducer

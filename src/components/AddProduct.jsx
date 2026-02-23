import { useRef, useState } from "react";

const AddProduct = ({ onClose, pushProduct }) => {
  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    quantity: "",
    price: "",
  });
  const modalref = useRef();

  const closeModal = (event) => {
    if (modalref.current === event.target) {
      onClose();
    }
  };

  const handleNewProduct = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandle = (e) => {
    e.preventDefault();
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
  };
  const handleReset = () => {
    setFormData({
      productName: "",
      brand: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <div
      ref={modalref}
      onClick={closeModal}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm text-white h-screen flex items-center justify-center"
    >
      <div className="bg-black p-6 text-center rounded">
        <h3 className="text-3xl font-medium">Add New Product</h3>
        <form onSubmit={submitHandle}>
          <div className="flex gap-5 mt-5">
            <input
              type="text"
              placeholder="Enter Product Name:"
              className="border w-70 h-10 rounded focus:ring-2 focus:ring-white-400 p-2"
              name="productName"
              value={formData.productName}
              onChange={handleNewProduct}
            />
            <input
              type="text"
              placeholder="Product Brand:"
              className="border w-40 h-10 rounded focus:ring-2 focus:ring-white-400 p-2"
              name="brand"
              value={formData.brand}
              onChange={handleNewProduct}
            />
          </div>

          <div className="flex gap-5 mt-5">
            <input
              type="text"
              placeholder="Quantity:"
              className="border w-40 h-10 rounded focus:ring-2 focus:ring-white-400 p-2"
              name="quantity"
              value={formData.quantity}
              onChange={handleNewProduct}
            />
            <input
              type="text"
              placeholder="Sale Price:"
              className="border w-40 h-10 rounded focus:ring-2 focus:ring-white-400 p-2"
              name="price"
              value={formData.price}
              onChange={handleNewProduct}
            />
          </div>

          <div className="flex gap-5 mt-5">
            <input
              type="submit"
              className="text-green-500 bg-white py-2 px-7 rounded font-medium "
            />
            <input
              type="reset"
              className="text-red-800 bg-white py-2 px-7 rounded font-medium "
              onClick={handleReset}
            />
            <button
              type="button"
              onClick={onClose}
              className="text-red-500 bg-white py-2 px-7 rounded font-medium "
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

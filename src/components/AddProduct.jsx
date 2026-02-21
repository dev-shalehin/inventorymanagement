import { useRef } from "react";

const AddProduct = ({ onClose }) => {
  const modalref = useRef();

  const closeModal = (event) => {
    if (modalref.current === event.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalref}
      onClick={closeModal}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm text-white h-screen flex items-center justify-center"
    >
      <div className="bg-black p-6 text-center rounded">
        <h3 className="text-3xl font-medium">Add New Product</h3>
        <form>
          <div className="flex gap-5 mt-5">
            <input
              type="text"
              placeholder="Enter Product Name:"
              className="border w-70 h-10 rounded focus:ring-2 focus:ring-white-400 p-2"
            />
            <input
              type="text"
              placeholder="Product Brand:"
              className="border w-40 h-10 rounded focus:ring-2 focus:ring-white-400 p-2"
            />
          </div>

          <div className="flex gap-5 mt-5">
            <input
              type="text"
              placeholder="Quantity:"
              className="border w-40 h-10 rounded focus:ring-2 focus:ring-white-400 p-2"
            />
            <input
              type="text"
              placeholder="Sale Price:"
              className="border w-40 h-10 rounded focus:ring-2 focus:ring-white-400 p-2"
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

import React, { Children } from "react";

const Buttons = ({ children, onClick }) => {
  return (
    <button
      className="bg-black text-white px-3 py-2 rounded font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Buttons;

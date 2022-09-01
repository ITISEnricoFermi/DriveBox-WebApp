import React from "react";

const FormElement = ({ onchange, type, placeholder, buttonText }) => {
  return (
    <div className="space-x-4 space-y-8">
      <input
        placeholder={placeholder}
        onChange={onchange}
        type={type}
        className="p-3 my-2 rounded-md"
      />
      <button className="bg-red-500 rounded-md p-3">{buttonText}</button>
    </div>
  );
};

export default FormElement;

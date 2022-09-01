import React from "react";

const FormElement = ({children, onchange, type, placeholder, buttonText }) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        onChange={onchange}
        type={type}
        className="p-3 my-2 w-full max-w-[260px] rounded-md"
      />
      {children}
    </div>
  );
};

export default FormElement;

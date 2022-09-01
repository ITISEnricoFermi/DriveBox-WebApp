import React from "react";

const Form = ({ children, onsubmite, title }) => {
  return (
    <div className="flex h-screen">
      <div className="text-center m-auto bg-slate-100 shadow-md rounded-2xl p-8">
        <form onSubmit={onsubmite}>
            <div className="font-semibold text-4xl">{title}</div>
            {children}
        </form>
      </div>
    </div>
  );
};

export default Form;

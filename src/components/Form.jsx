import React from "react";

const Form = ({ children, onsubmite, title, error }) => {
  return (
    <div className="flex h-screen">
      <div className="text-center m-auto bg-slate-100 shadow-md rounded-2xl p-8 max-w-[375px]">
        <form onSubmit={onsubmite} className="space-y-6">
          <div className="font-semibold text-4xl">{title}</div>
          <div className="text-red-500 ">{error}</div>
          {children}
        </form>
      </div>
    </div>
  );
};

export default Form;

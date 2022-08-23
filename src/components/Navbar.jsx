import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-semibold text-indigo-600">
        DriveBox
      </h1>
      <ul className="flex hiden">
        <li className="p-4">Home</li>
        <li className="p-4">Product</li>
        <li className="p-4">FAQ</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

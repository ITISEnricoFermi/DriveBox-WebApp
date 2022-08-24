import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row relative items-center justify-between p-4 bg-gray-300">
      <div className="space-x-8">
        <a href="/" className="">
          <span className="text-3xl font-semibold px-3">DriveBox</span>
        </a>
        <a href="/" className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none">
          <span className="text-white px-3">Home</span>
        </a>
        <a href="/device" className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none">
          <span className="text-white px-3">Device</span>
        </a>
      </div>
      <div className="flex items-center text-rigth space-x-4">
        <a href="/" className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none">
          <span className="text-white px-3">Sign In</span>
        </a>
        <a href="/" className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none">
          <span className="text-white px-3">Sign Up</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

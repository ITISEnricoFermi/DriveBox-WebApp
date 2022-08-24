import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // console.log(user.email);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row relative items-center justify-between p-4 bg-gray-300">
      <div className="flex items-center space-x-8">
        <Link to="/">
          <span className="text-3xl font-semibold px-3">DriveBox</span>
        </Link>
        <Link to="/">
          <button className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none">
            <span className="text-white px-3">Home</span>
          </button>
        </Link>
        <Link to="/device">
          <button className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none">
            <span className="text-white px-3">Device</span>
          </button>
        </Link>
      </div>
      {user?.email ? (
        <div className="flex items-center text-rigth space-x-4">
          <Link to="/account">
            <button className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none">
              <span className="text-white px-3">Account</span>
            </button>
          </Link>
          <button
            onClick={handleLogOut}
            className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none"
          >
            <span className="text-white px-3">Log Out</span>
          </button>
        </div>
      ) : (
        <div className="flex items-center text-rigth space-x-4">
          <Link to="/login">
            <button className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none">
              <span className="text-white px-3">SignIn</span>
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none">
              <span className="text-white px-3">SignUp</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

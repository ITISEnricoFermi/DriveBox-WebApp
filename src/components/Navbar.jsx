import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const toggleDropdown = () => setActive(!active);

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
        <Link to="/shop">
          <button className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none">
            <span className="text-white px-3">Shop</span>
          </button>
        </Link>
        <Link to="/faq">
          <button className="bg-indigo-600 rounded-md py-2 shadow-md shadow-indigo-900/60 hover:shadow-none">
            <span className="text-white px-3">FAQ</span>
          </button>
        </Link>
      </div>

      {/*if user logged show account and logout else show signin and signup*/}

      {user?.email ? (
        <div className="flex items-center text-rigth space-x-4">
          {<p>{user.displayName}</p>}
          <div>
            <div>
              <button
                type="button"
                className="flex rounded-full"
                onClick={toggleDropdown}
              >
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="avatar" />
                ) : (
                  <div className="grid place-items-center bg-white rounded-full w-10 h-10">
                    {user.displayName[0]}
                  </div>
                )}
              </button>
              <li
                style={{ display: active ? "block" : "none" }}
                className="origin-top-right absolute right-2 mt-6 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <ul className="py-2 border-b-2">
                  <button onClick={toggleDropdown}>
                    <Link to="/account">
                      <span className="px-3">Account</span>
                    </Link>
                  </button>
                </ul>
                <ul className="py-2">
                  <button
                    onClick={() => {
                      handleLogOut();
                      toggleDropdown();
                    }}
                  >
                    <span className="px-3">Log Out</span>
                  </button>
                </ul>
              </li>
            </div>
          </div>
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

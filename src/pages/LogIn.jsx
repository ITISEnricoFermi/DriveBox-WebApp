import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      console.log(`User logged in`);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  if (user == null) {
    return (
      <div className="flex items-center justify-center mx-auto my-96">
        <div className="flex justify-center bg-slate-100 shadow-md rounded-2xl p-8 w-full max-w-[350px] h-screen max-h-[450px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col py-4 justify-around space-y-2"
          >
            <span className="text-4xl font-semibold ">SignIn</span>
            {error ? <p className="text-red-500">{error}</p> : null}
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 rounded-md"
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 rounded-md"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />a
            </div>
            <button
              className="h-12 rounded-md bg-red-500 shadow-md"
              type="submit"
            >
              <span className="font-bold">Sign In</span>
            </button>
            <p>
              Do not have account?
              <Link to="/signup" className="text-red-500">
                {" "}
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  } else {
    navigate("/");
  }
};

export default LogIn;

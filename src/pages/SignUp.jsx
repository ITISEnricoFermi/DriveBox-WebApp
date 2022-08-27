import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center mx-auto my-96">
      <div className="flex justify-center bg-slate-100 shadow-md rounded-2xl p-8 w-full max-w-[350px] h-screen max-h-[450px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col py-4 justify-around space-y-2"
        >
          <span className="text-4xl font-semibold ">SignUp</span>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 my-2 rounded-md"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 my-2 rounded-md"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
          <button className="my-6 h-12 rounded-md bg-red-500 shadow-md">
            <span className="font-bold">Sign Up</span>
          </button>
          <p>
            Alrady have account?
            <Link to="/login" className="text-red-500">
              {" "}
              LogIn
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

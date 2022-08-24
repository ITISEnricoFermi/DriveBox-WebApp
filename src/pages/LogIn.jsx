import React from "react";

const LogIn = () => {
  return (
    <div className="flex items-center justify-center mx-auto my-96">
      <div className="flex justify-center bg-slate-100 shadow-md rounded-2xl p-8 w-full max-w-[350px] h-screen max-h-[450px]">
        <form className="flex flex-col py-4 justify-around space-y-2">
          <span className="text-4xl font-semibold ">SignIn</span>
          <div>
            <input
              className="p-3 my-2 rounded-md"
              type="email"
              placeholder="Email"
            />
            <input
              className="p-3 my-2 rounded-md"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>
          <button className="h-12 rounded-md bg-red-500 shadow-md" type="submit">
            <span className="font-bold">Sign In</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

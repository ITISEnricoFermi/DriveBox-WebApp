import React from "react";
import { TypeAnimation } from "react-type-animation";

import helmet from "../img/helmet_render_720.png";

const Home = () => {
  return (
    <div>
      <div className="text-center font-extrabold text-8xl pt-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          DriveBox
        </span>
      </div>
      <div className="flex justify-center border-2 rounded-3xl mx-auto w-1/2 lg:w-1/3 xl:w-1/4 mt-8">
        <img src={helmet} alt="helmet" />
      </div>
      <div className="text-3xl mt-8 bg-gray-50 mx-auto w-1/2 lg:w-1/3 xl:w-1/4 border-2 rounded-3xl">
        <TypeAnimation
          className="text-center"
          sequence={[
            "Welcome to DriveBox!",
            1000,
            "DriveBox is a device that allows you to drive safely and easily.",
            1000,
          ]}
          wrapper="div"
          cursor="true"
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Home;

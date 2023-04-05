import React from "react";
import rocket from "/assets/img/rocket.png";

const Welcome = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Mastermind Academy
        </h1>
        <img className="w-64 h-64" src={rocket} alt="" />
      </div>
    </>
  );
};

export default Welcome;

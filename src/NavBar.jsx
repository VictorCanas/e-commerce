import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  return (
    <div>
      <h2 className="text-black">NavBar</h2>
      <Link to="/about">
        <button>Ir a About</button>
      </Link>
    </div>
  );
};

export default NavBar;

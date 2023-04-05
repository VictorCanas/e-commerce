import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div className="px-4 xl:flex space-x-5 items-center">
      <Link
        to="/cart"
        className="text-2xl flex text-white hover:text-gray-400 duration-500"
      >
        <ion-icon name="cart-outline"></ion-icon>
        <span className="flex absolute -mt-5 ml-4">
          <span className="text-lg">2</span>
        </span>
      </Link>
    </div>
  );
};

export default CartWidget;

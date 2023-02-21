import React from "react";

const CartWidget = () => {
  return (
    <div className="px-4 xl:flex space-x-5 items-center">
      <a className="text-2xl flex text-white hover:text-gray-400 duration-500" href="#">
      <ion-icon name="cart-outline"></ion-icon>
        <span className="flex absolute -mt-5 ml-4">
          <span className="text-lg">2</span>
        </span>
      </a>
    </div>
  );
};

export default CartWidget;

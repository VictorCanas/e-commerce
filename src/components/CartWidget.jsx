import React from "react";

const CartWidget = () => {
  return (
    <div class="px-4 xl:flex space-x-5 items-center">
      <a class="flex text-white hover:text-gray-400 duration-500" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span class="flex absolute -mt-5 ml-4">
          <span class="relative inline-flex rounded-full h-5 w-5">1</span>
        </span>
      </a>
    </div>
  );
};

export default CartWidget;

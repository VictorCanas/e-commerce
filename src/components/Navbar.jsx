import React from "react";
import { useState } from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  //Creando un array de objetos para los enlaces
  const Enlaces = [
    { nombre: "Health", Link: "/" },
    { nombre: "Business", Link: "/" },
    { nombre: "Coaching", Link: "/" },
    { nombre: "Mindset", Link: "/" },
    { nombre: "Finance", Link: "/" },
  ];

  //Creando un useState para abrir y cerrar el menu
  const [open, setOpen] = useState(false);

  return (
    <div className="swadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-gray-900 text-white py-4 md:px-5 px-3">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
          <span className="text-3xl mr-1 pt-2">
            <ion-icon name="rocket-outline"></ion-icon>
          </span>
          Mastermind Academy
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Enlaces.map((link) => (
            <li
              key={link.nombre}
              className="md:ml-8 text-xl md:my-0 my-7 font-[Poppins]"
            >
              <a href={link.Link} className="hover:text-gray-400 duration-500">
                {link.nombre}
              </a>
            </li>
          ))}
          <CartWidget />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

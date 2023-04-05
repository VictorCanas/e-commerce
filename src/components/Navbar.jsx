import React from "react";
import { useState } from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  //Creando un array de objetos para los enlaces
  const Enlaces = [
    { nombre: "Academy", Link: "/" },
    { nombre: "Contact", Link: "/Contact" },
  ];

  const Categorias = [
    { nombre: "Health", Link: "category/health" },
    { nombre: "Business", Link: "/" },
    { nombre: "Coaching", Link: "/" },
    { nombre: "Mindset", Link: "/" },
  ];

  //Creando un useState para abrir y cerrar el menu
  const [open, setOpen] = useState(false);

  return (
    <div className="swadow-md w-full top-0 left-0">
      <div className="bg-gray-900 text-white md:flex items-center justify-between px-4 py-4 md:px-10 lg:px-16">
        <div className="cursor-pointer flex items-center font-bold font-[Poppins] text-2xl">
          <span className="text-3xl mr-1 pt-2">
            <ion-icon name="rocket-outline"></ion-icon>
          </span>
          Mastermind Academy
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer text-3xl absolute right-8 top-6 z-20 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`absolute md:static md:z-auto w-full md:w-auto left-0 md:flex md:items-center bg-gray-900 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Enlaces.map((link) => (
            <li
              key={link.nombre}
              className="my-3 md:mx-6 text-xl font-[Poppins] hover:text-gray-400 duration-500"
            >
              <a href={link.Link}>{link.nombre}</a>
            </li>
          ))}
          <li className="relative group my-3 md:mx-6 text-xl font-[Poppins] hover:text-gray-400 duration-500">
            <a
              href=""
              onMouseEnter={() => setOpen(true)}
            >
              Categories
              <ion-icon name="chevron-down-outline" className="ml-1"></ion-icon>
            </a>
            <ul
              className={`${
                open ? "block" : "hidden"
              } absolute mt-2 py-2 bg-white rounded-lg shadow-lg`}
            >
              {Categorias.map((categoria) => (
                <li key={categoria.nombre} className="px-2 py-">
                  <a href={categoria.Link} onClick={() => setOpen(true)}>{categoria.nombre}</a>
                </li>
              ))}
            </ul>
          </li>
          <CartWidget />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
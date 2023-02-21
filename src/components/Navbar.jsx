import React from "react";

const Navbar = () => {
  let Enlaces = [
    { nombre: "HOME", Link: "/" },
    { nombre: "SERVICE", Link: "/" },
    { nombre: "ABOUT", Link: "/" },
    { nombre: "BLOG", Link: "/" },
    { nombre: "CONTACT", Link: "/" },
  ];

  return (
    <div className="swadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-gray-900 text-white py-4 md:px-5 px-3">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
          <span className="text-3xl mr-1 pt-2">
            <ion-icon name="rocket-outline"></ion-icon>
          </span>
          Mastermind Academy
        </div>
        <div className="text-3xl absolute right-8 top-6 cursor pointer md:hidden">
        <ion-icon name="menu-outline"></ion-icon>
        </div>
        <ul
          className="md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-gray-900 md:z-auto z-[-1]
          left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"
        >
          {Enlaces.map((link) => (
            <li key={link.nombre} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.Link} className="hover:text-gray-400 duration-500">
                {link.nombre}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

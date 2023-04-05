import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center fixed bottom-0 w-full">
      <div className="flex">
        <Link target="_blank" to={"https://www.instagram.com"}>
          <FaFacebook className="mr-2" />
        </Link>
        <Link target="_blank" to={"https://www.facebook.com"}>
          <FaInstagram className="mr-2" />
        </Link>
        <Link target="_blank" to={"https://www.twitter.com"}>
          <FaTwitter className="mr-2" />
        </Link>
      </div>
      <p>Copyright © 2023 Mastermind</p>
    </div>
  );
};

export default Footer;

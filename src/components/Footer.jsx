import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="container mx-auto p-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
      <div className="p-4 sm:col-span-2 lg:col-auto">
        <img src={logo} alt="" className="w-1/3 sm:w-1/3 lg:w-1/2" />
      </div>
      <div className="p-4">
        <h1 className="text-[17px] font-medium  my-4">Support</h1>
        <div className="py-1">
          <p>Contact</p>
          <a href="mailto:merndev0@gmail.com">merndev0@gmail.com</a>
        </div>
        <div className="py-1">
          <p>phone</p>
          <a href="tel:+918826709142">+918826709142</a>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-[17px] font-medium  my-4">Company</h1>
        <div className="py-1">
          <Link to="/">About</Link>
        </div>
        <div className="py-1">
          <Link to="/">Blog</Link>
        </div>
      </div>
      <div className="p-4 sm:col-span-2 lg:col-auto">
        <h1 className="text-[17px] font-medium my-4">Support</h1>
        <Link to="/" className="block py-1">
          Privacy Policy
        </Link>
        <Link to="/" className="block py-1">
          Shipping Policy
        </Link>
        <Link to="/" className="block py-1">
          Terms of Service
        </Link>
        <Link to="/" className="block py-1">
          Return & Refund Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;

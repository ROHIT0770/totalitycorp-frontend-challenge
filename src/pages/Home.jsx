import React, { useState } from "react";
import { Link } from "react-router-dom";
import { category } from "../data/category";
import hero from "../assets/hero.svg";

const Home = () => {
  return (
    <div className="h-full w-full container mx-auto pt-20">
      <div className="bg-[#f4f1ed] lg:h-[calc(100vh-5rem)] flex justify-center">
        <img src={hero} alt="" className="h-full" />
      </div>
      <div className="flex flex-col py-14">
        <h1 className="text-2xl lg:text-4xl py-4 font-bold text-center">
          Products
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          {category.map((item) => (
            <Link
              to={`/products/${item.link}`}
              key={item.id}
              className="relative group rounded-xl overflow-hidden aspect-square"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full group-hover:scale-110 transition-all duration-700"
              />
              <p className="absolute inset-0 text-white bg-black/50 grid place-items-center font-semibold text-xl text-center tracking-wide">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

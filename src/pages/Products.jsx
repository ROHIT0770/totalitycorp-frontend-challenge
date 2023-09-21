import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const res = await axios(
        `https://fakestoreapi.com/products/category/${name}`
      );
      console.log(res);
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const addProduct = (product) => {
    // dispatch the function
    dispatch(add(product));
  };

  return (
    <div className="container mx-auto flex flex-col pt-20 p-4 py-14 mt-4">
      <p className="py-1 mb-4">products &gt; {name}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
        {products.map((item) => (
          <div
            key={item.id}
            className="aspect-square rounded-xl p-4 text-center border-2"
          >
            <div className="h-2/3 grid place-items-center">
              <img src={item.image} alt="" className="h-28 sm:h-32" />
            </div>
            <h1 className="line-clamp-1 py-1 px-4">{item.title}</h1>
            <div className="font-semibold">
              <span className=" text-green-700">
                -{Math.floor((100 * item.price) / Math.ceil(item.price * 2))}%
              </span>
              <strike className="text-gray-500 px-3">
                {Math.ceil(item.price * 2)}
              </strike>
              <span>&#x20B9;{Math.floor(item.price)}</span>
            </div>
            <button
              onClick={() => addProduct(item)}
              className="bg-green-100 text-green-900 font-semibold tracking-wide px-5 py-2 rounded-full mt-4 text-center"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

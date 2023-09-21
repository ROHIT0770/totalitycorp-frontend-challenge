import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { add, calculateTotal, remove, removeAll } from "../store/cartSlice";

const Cart = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart, dispatch]);

  const handleClearProduct = (product) => {
    dispatch(removeAll(product));
  };

  const handleAddProduct = (product) => {
    dispatch(add(product));
  };

  const handleRemoveProduct = (product) => {
    dispatch(remove(product));
  };

  return (
    <div className="container mx-auto flex flex-col py-24">
      {cart.cartItems.length === 0 ? (
        <>
          <div className="text-center">
            <h1 className="text-2xl my-5 font-semibold">
              Your cart is currently empty
            </h1>
            <Link to="/" className="text-lg">
              &larr; Start shopping
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 p-4 lg:px-10">
              <div className="flex flex-row items-center justify-between tracking-wide py-4 border-b">
                <h1 className="text-xl lg:text-4xl font-bold">Shopping Cart</h1>
                <p className="text-gray-600 font-semibold">
                  {cart.totalQuantity} Items
                </p>
              </div>

              {cart.cartItems.map((item) => (
                <>
                  <div
                    key={item.id}
                    className="hidden rounded-xl p-4 text-center md:flex flex-row items-center justify-between"
                  >
                    <div className="h-20 w-20 grid place-items-center">
                      <img
                        src={item.image}
                        alt=""
                        className="h-[80%] aspect-square"
                      />
                    </div>

                    <div className="flex flex-col text-start w-36">
                      <p>{item.category}</p>
                      <h1 className="line-clamp-1 py-1">{item.title}</h1>
                    </div>

                    <div className="flex items-center gap-x-4">
                      <button
                        onClick={() => handleRemoveProduct(item)}
                        className="w-8 h-8 text-2xl font-bold text-green-800"
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => handleAddProduct(item)}
                        className="w-8 h-8 text-2xl font-bold text-green-800"
                      >
                        +
                      </button>
                    </div>

                    <div className="font-semibold">
                      <span className=" text-green-700">
                        -
                        {Math.floor(
                          (100 * item.price) / Math.ceil(item.price * 2)
                        )}
                        %
                      </span>
                      <strike className="text-gray-500 px-3">
                        {Math.ceil(item.price * item.quantity * 2)}
                      </strike>
                      <span>&#x20B9;{item.price * item.quantity}</span>
                    </div>

                    <button
                      onClick={() => handleClearProduct(item)}
                      className="text-red-900 font-bold text-2xl"
                    >
                      &times;
                    </button>
                  </div>

                  <div
                    key={item.id}
                    className="md:hidden rounded-xl p-4 my-5 border text-center w-full flex flex-col"
                  >
                    <div className="flex flex-row h-2/3">
                      <div className="flex flex-col">
                        <div className="grid place-items-center">
                          <img
                            src={item.image}
                            alt=""
                            className="w-[82%] aspect-square"
                          />
                        </div>
                        <div className="flex justify-center my-2 items-center gap-x-2">
                          <button
                            onClick={() => handleRemoveProduct(item)}
                            className="w-8 h-8 text-2xl font-bold text-green-800"
                          >
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button
                            onClick={() => handleAddProduct(item)}
                            className="w-8 h-8 text-2xl font-bold text-green-800"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="w-2/3 pl-2">
                        <div className="flex flex-col text-start w-36">
                          <p>{item.category}</p>
                          <h1 className="line-clamp-2 py-1">{item.title}</h1>
                        </div>

                        <div className="font-semibold text-center my-4">
                          <span className=" text-green-700">
                            -
                            {Math.floor(
                              (100 * item.price) / Math.ceil(item.price * 2)
                            )}
                            %
                          </span>
                          <strike className="text-gray-500 px-3">
                            {Math.ceil(item.price * item.quantity * 2)}
                          </strike>
                          <span>&#x20B9;{item.price * item.quantity}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleClearProduct(item)}
                      className="text-red-900 bg-red-100 rounded font-bold lg:text-2xl w-full h-12"
                    >
                      Remove
                    </button>
                  </div>
                </>
              ))}
            </div>

            <div className="lg:w-1/3 p-4 text-sm sm:text-base lg:px-10 bg-[whitesmoke] tracking-wide uppercase font-semibold text-gray-600">
              <h1 className="text-3xl border-b pb-4 font-bold my-5 capitalize text-black">
                Summary
              </h1>

              <div className="flex flex-row justify-between items-center py-1">
                <p>items {cart.totalQuantity}</p>
                <p>&#x20B9; {Math.floor(cart.totalAmount * 2)}</p>
              </div>

              <div className="flex flex-row justify-between my-5 py-1">
                <p>Discount</p>
                <p className="text-green-700">
                  - &#x20B9; {Math.floor(cart.totalAmount)}
                </p>
              </div>

              <div className="flex flex-row justify-between items-center my-5 py-1">
                <p>Delivery charges</p>
                <p>
                  <strike>&#x20B9;50</strike>
                  <span className="text-green-700"> FREE Delivery</span>
                </p>
              </div>

              <div className="flex flex-row justify-between items-center my-5 py-1">
                <p>total Price</p>
                <p>&#x20B9; {Math.floor(cart.totalAmount)}</p>
              </div>

              <button className="uppercase tracking-wide w-full h-12 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

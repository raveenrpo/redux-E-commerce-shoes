import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import Navbaar from "../components/Navbaar";
import Footer from "../components/Footer";

const Cart = () => {
  const { cartItems, currency, delevaryfee, carttotal, deleteitem, quantity } =
    useContext(Shopcontext);
  return (
    <div>
      <Navbaar />
      <div className="p-10">
        <div className="text-center text-2xl pt-10 border-t">
          <Title text1={"Your "} text2={" Cart"} />
        </div>
        {cartItems.length === 0 ? (
          <div className="text-center mt-10">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="mt-10">
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-4 mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.img}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p>{`Quantity: ${item.quantity}`}</p>
                      <p>{`Price: ${currency}${item.price}`}</p>
                    </div>
                  </div>
                  <p>{`Total: ${currency}${item.price * item.quantity}`}</p>
                  <div className="flex gap-2">
                    <button
                      className="bg-black text-white rounded-lg px-2"
                      onClick={() => quantity(item, 1)}
                    >
                      +
                    </button>
                    <button
                      className="bg-black text-white rounded-lg px-2"
                      onClick={() => deleteitem(index)}
                    >
                      Dlete
                    </button>
                    <button
                      className="bg-black text-white rounded-lg px-2"
                      onClick={() => quantity(item, -1)}
                    >
                      -
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-10 text-lg ">
              <p>Subtotal:</p>
              <p>{`${currency}${carttotal()}`}</p>
            </div>
            <div className="flex justify-between text-lg ">
              <p>Delivery Fee:</p>
              <p>{`${currency}${delevaryfee}`}</p>
            </div>
            <div className="flex justify-between text-xl font-bold mt-4">
              <p>Total:</p>
              <p>{`${currency}${carttotal() + delevaryfee}`}</p>
            </div>
            <div className="text-center mt-10">
              <Link to={"/payment"}>
                <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

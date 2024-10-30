import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import Navbaar from "../components/Navbaar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartData,
  fetchUsers,
  deleteItem,
  updateQuantity,
} from "../ShopSlice/shopeSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shop.cartItems);
  const currency = useSelector((state) => state.shop.currency);
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson);
  console.log(user.id);
  useEffect(() => {
    dispatch(fetchCartData(user.id));
  });
  const handlequantity = (prd, num) => {
    if (prd.quantity === 1 && num === -1) return;
    const newquantity = cartItems.map((ite) =>
      ite.id === prd.id ? { ...ite, quantity: ite.quantity + num } : ite
    );
    dispatch(updateQuantity({ userId: user.id, newQuantity: newquantity }));
  };
  // const { cartItems, delevaryfee, carttotal, deleteitem, quantity } =
  //   useContext(Shopcontext);

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
                  {/* <p>{`Total: ${currency}${item.price * item.quantity}`}</p> */}
                  <div className="flex gap-2">
                    <button
                      className="bg-black text-white rounded-lg px-2"
                      // onClick={handlequantity(item, 1)}
                    >
                      +
                    </button>
                    <button
                      className="bg-black text-white rounded-lg px-2"
                      // onClick={() =>
                      //    dispatch(deleteItem(user.id, index, cartItems))
                      // }
                    >
                      Dlete
                    </button>
                    <button
                      className="bg-black text-white rounded-lg px-2"
                      // onClick={handlequantity(item, -1)}
                    ></button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-10 text-lg ">
              <p>Subtotal:</p>
              {/* <p>{`${currency}${carttotal()}`}</p> */}
            </div>
            <div className="flex justify-between text-lg ">
              <p>Delivery Fee:</p>
              {/* <p>{`${currency}${delevaryfee}`}</p> */}
            </div>
            <div className="flex justify-between text-xl font-bold mt-4">
              <p>Total:</p>
              {/* <p>{`${currency}${carttotal() + delevaryfee}`}</p> */}
            </div>
            <div className="text-center mt-10">
              <Link to={`/payment/${user.id}`}>
                <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                  Place To Order
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

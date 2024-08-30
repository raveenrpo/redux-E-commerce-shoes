import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import product from "../db.json";

export const Shopcontext = createContext();

const ShopcontextProvider = (props) => {
  const nav = useNavigate();
  const currency = "$";
  const delevaryfee = 10;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userJson = localStorage.getItem("user");
      if (!userJson) return;
      const user = JSON.parse(userJson);
      try {
        const response = await axios.get(
          `http://localhost:4000/users/${user.id}`
        );
        setCartItems(response.data.cart);
      } catch (err) {
        console.error("Error fetching cart data:", err);
      }
    };
    fetchData();
  });

  const addToCart = async (pd) => {
    const userJson = localStorage.getItem("user");
    if (!userJson) {
      alert("Please login");
      nav("/login");
      return;
    }
    const user = JSON.parse(userJson);
    try {
      const response = await axios.get(
        `http://localhost:4000/users/${user.id}`
      );
      const cartData = response.data.cart;
      const itemExists = cartData.some((item) => item.id === pd.id);
      if (itemExists) {
        alert("Item is already in the cart");
        return;
      }
      const updatedCart = [...cartData, pd];
      await axios.patch(`http://localhost:4000/users/${user.id}`, {
        cart: updatedCart,
      });
      setCartItems(updatedCart);
    } catch (err) {
      console.error("Error updating cart:", err);
    }
  };

  const quantity = (prd, num) => {
    if (prd.quantity === 1 && num === -1) return;
    const newquantity = cartItems.map((ite) =>
      ite.id === prd.id ? { ...ite, quantity: ite.quantity + num } : ite
    );
    setCartItems(newquantity);
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson);
    axios
      .patch(`http://localhost:4000/users/${user.id}`, { cart: newquantity })
      .then((res) => console.log("done"))
      .catch((error) => console.log("error", error));
  };

  const carttotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const deleteitem = async (index) => {
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson);
    const updatedCart = cartItems.filter((item, ind) => ind !== index);
    try {
      await axios.patch(`http://localhost:4000/users/${user.id}`, {
        cart: updatedCart,
      });
      setCartItems(updatedCart);
    } catch (err) {
      console.error("Error deleting item from cart:", err);
    }
  };

  const value = {
    product,
    currency,
    delevaryfee,
    cartItems,
    addToCart,
    carttotal,
    deleteitem,
    quantity,
  };

  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};

export default ShopcontextProvider;

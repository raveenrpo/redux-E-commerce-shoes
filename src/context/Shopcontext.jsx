// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import product from "../db.json";

// export const Shopcontext = createContext();

// const ShopcontextProvider = (props) => {
//   const nav = useNavigate();
//   const currency = "$";
//   const delevaryfee = 10;
//   const [cartItems, setCartItems] = useState([]);
//   const [usercount, setusercount] = useState([]);
//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         axios
//           .get(`http://localhost:4000/users`)
//           .then((res) => setusercount(res.data));
//         return;
//       } catch (error) {
//         console.log("error in userfetching");
//       }
//     };
//     fetchdata();
//   });

//   // ------------------------------------------------cart section------------------------------------------------------------

//   useEffect(() => {
//     const fetchData = async () => {
//       const userJson = localStorage.getItem("user");
//       if (!userJson) return;
//       const user = JSON.parse(userJson);
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/users/${user.id}`
//         );
//         const productids = product.products.map((item) => item.id);
//         const upcart = response.data.cart.filter((item) =>
//           productids.includes(item.id)
//         );

//         setCartItems(upcart);
//       } catch (err) {
//         console.error("Error fetching cart data:", err);
//       }
//     };
//     fetchData();
//   });

//   const addToCart = async (pd) => {
//     const userJson = localStorage.getItem("user");
//     if (!userJson) {
//       alert("Please login");
//       nav("/login");
//       return;
//     }
//     const user = JSON.parse(userJson);
//     try {
//       const response = await axios.get(
//         `http://localhost:4000/users/${user.id}`
//       );
//       const cartData = response.data.cart;
//       const itemExists = cartData.some((item) => item.id === pd.id);
//       if (itemExists) {
//         alert("Item is already in the cart");
//         return;
//       }
//       const updatedCart = [...cartData, pd];
//       await axios.patch(`http://localhost:4000/users/${user.id}`, {
//         cart: updatedCart,
//       });
//       setCartItems(updatedCart);
//     } catch (err) {
//       console.error("Error updating cart:", err);
//     }
//   };

//   const quantity = (prd, num) => {
//     if (prd.quantity === 1 && num === -1) return;
//     const newquantity = cartItems.map((ite) =>
//       ite.id === prd.id ? { ...ite, quantity: ite.quantity + num } : ite
//     );
//     setCartItems(newquantity);
//     const userJson = localStorage.getItem("user");
//     const user = JSON.parse(userJson);
//     axios
//       .patch(`http://localhost:4000/users/${user.id}`, { cart: newquantity })
//       .then((res) => console.log("done"))
//       .catch((error) => console.log("error", error));
//   };

//   const carttotal = () => {
//     return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   };

//   const deleteitem = async (index) => {
//     const userJson = localStorage.getItem("user");
//     const user = JSON.parse(userJson);
//     const updatedCart = cartItems.filter((item, ind) => ind !== index);
//     try {
//       await axios.patch(`http://localhost:4000/users/${user.id}`, {
//         cart: updatedCart,
//       });
//       setCartItems(updatedCart);
//     } catch (err) {
//       console.error("Error deleting item from cart:", err);
//     }
//   };

//   // -----------------------------------------------------------admin section-----------------------------------------------------------
//   const addproduct = (newproduct) => {
//     axios
//       .post("http://localhost:4000/products", newproduct)
//       .then((res) => {
//         alert("Product added successfully");
//       })
//       .catch((error) => {
//         console.error("There was an error adding the product!", error);
//       });
//   };

//   const updateprd = (updatedproduct, id) => {
//     axios
//       .patch(`http://localhost:4000/products/${id}`, updatedproduct)
//       .then((res) => {
//         alert("Product Updated successfully");
//       })
//       .catch((error) => {
//         console.error("There was an error while updating the product!", error);
//       });
//   };

//   const deleteprd = (id) => {
//     axios
//       .delete(`http://localhost:4000/products/${id}`)
//       .then((res) => {
//         alert("Product Deleted successfully");
//       })
//       .catch((error) => {
//         console.error("There was an error while deleting the product!", error);
//       });
//   };

//   const toblock = async (id) => {
//     try {
//       await axios.patch(`http://localhost:4000/users/${id}`, {
//         blockStatus: true,
//       });
//       alert("Bocked successfully");
//     } catch (err) {
//       console.error("Error while  blocking:", err);
//     }
//   };
//   const tounblock = async (id) => {
//     try {
//       await axios.patch(`http://localhost:4000/users/${id}`, {
//         blockStatus: false,
//       });
//       alert("Unblocked successfully");
//     } catch (err) {
//       console.error("Error while  Unblocking:", err);
//     }
//   };
//   const payment = async (order) => {
//     axios
//       .post("http://localhost:4000/order", order)
//       .then((res) => {
//         alert("Your order is done successfully successfully");
//         nav("/");
//       })
//       .catch((error) => {
//         console.error("There was an error in order!", error);
//       });
//   };

//   const deletecart = (userid) => {
//     const newcart = [];
//     axios
//       .patch(`http://localhost:4000/users/${userid}`, { cart: [] })
//       .then((res) => {
//         // alert("cart updated successfully");
//       });
//     setCartItems(newcart).catch((error) => {
//       console.error("There was an error while deleting the cart!", error);
//     });
//   };

//   const value = {
//     product,
//     currency,
//     delevaryfee,
//     cartItems,
//     addToCart,
//     carttotal,
//     deleteitem,
//     quantity,
//     usercount,
//     addproduct,
//     updateprd,
//     deleteprd,
//     toblock,
//     tounblock,
//     payment,
//     deletecart,
//   };

//   return (
//     <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
//   );
// };

// export default ShopcontextProvider;

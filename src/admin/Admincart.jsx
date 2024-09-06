import React, { useContext, useState, useEffect } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { Link, useParams } from "react-router-dom";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Admincart = () => {
  const { userid } = useParams();
  const { usercount, currency } = useContext(Shopcontext);
  const [productdata, setproductdata] = useState([]);
  const [name, setname] = useState("");
  //   console.log(usercount);
  //   console.log(userid);
  const fetchproductdata = () => {
    usercount.map((item) => {
      if (item.id === userid) {
        setproductdata(item.cart);
        setname(item.name);
      }
    });
  };
  useEffect(() => {
    fetchproductdata();
  }, [userid]);
  //   console.log(productdata);
  return (
    <div>
      <div className="p-10">
        <Link to={"/adminuser"}>
          <button className="pt-10 px-11 text-xl">
            <FontAwesomeIcon icon={faArrowLeft} />
            back
          </button>
        </Link>
        <div className="text-center text-2xl pt-10 border-t">
          <Title text1={"Cart  "} text2={"  " + name} />
        </div>
        {productdata.length === 0 ? (
          <div className="text-center mt-10">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="mt-10">
            <ul className="space-y-4">
              {productdata.map((item, index) => (
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
                </li>
              ))}
            </ul>
            {/* <div className="flex justify-between mt-10 text-lg ">
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
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admincart;

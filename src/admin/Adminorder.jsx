import React, { useContext, useState, useEffect } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { useParams } from "react-router-dom";

const Adminorder = () => {
  const { orderid } = useParams();
  const { product } = useContext(Shopcontext);
  const [orderdetails, setorderdetails] = useState([]);
  const [cartdetails, setcartdetails] = useState([]);

  const fetchproductdata = () => {
    const order = product.order.find((item) => item.userid === orderid);
    if (order) {
      setorderdetails([order]);
      setcartdetails(order.cart);
    }
  };

  useEffect(() => {
    fetchproductdata();
  }, [orderid, product.order]);

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-7xl p-4 bg-white rounded-lg shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xl font-medium text-gray-500">
                  Order Id
                </th>
                <th className="px-6 py-3 text-left text-xl font-medium text-gray-500">
                  User Id
                </th>
                <th className="px-6 py-3 text-left text-xl font-medium text-gray-500">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xl font-medium text-gray-500">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xl font-medium text-gray-500">
                  Address
                </th>
                <th className="px-6 py-3 text-left text-xl font-medium text-gray-500">
                  Phone no
                </th>
                <th className="px-24 py-3 text-left text-xl font-medium text-gray-500">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xl font-medium text-gray-500">
                  Total price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orderdetails.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.userid}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.address}</td>
                  <td className="px-6 py-4">{item.number}</td>
                  <td className="px-6 py-4">
                    <ul>
                      {cartdetails.map((ite) => (
                        <li key={ite.id}>
                          <div>Title: {ite.title}</div>
                          <div>Quantity: {ite.quantity || "N/A"}</div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Adminorder;

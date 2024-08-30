import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontext";
import Navbaar from "../components/Navbaar";

const Product = () => {
  const { productid } = useParams();
  const { product, addToCart } = useContext(Shopcontext);
  const [productdata, setproductdata] = useState(false);
  const fetchproductdata = () => {
    product.products.map((item) => {
      if (item.id == productid) {
        setproductdata(item);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchproductdata();
  }, [productid]);

  return (
    <div>
      <Navbaar />
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-22">
        <img className="w-full md:max-w-[480px]" src={productdata.img} />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-700">
            {productdata.title}
          </p>
          <p className="text-gray-500">{productdata.category}</p>
          <p className="text-xl text-black-500">${productdata.price}</p>
          <p className="text-gray-500">
            this product is an best product under this category
          </p>
          <button
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            onClick={() => addToCart(productdata)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

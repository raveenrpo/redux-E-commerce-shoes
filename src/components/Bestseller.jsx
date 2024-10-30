import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";
import Productitem from "./Productitem";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../ShopSlice/shopeSlice";
const Bestseller = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.shop.products);
  const [bestseller, setbestseller] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    const bestproduct = products.filter((item) => item.bestseller);
    setbestseller(bestproduct.slice(0, 5));
  }, [products]);
  console.log(bestseller);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST " text2=" SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover the pinnacle of style and comfort with our collection of
          bestselling shoes! From the latest trends to timeless classics, these
          top picks represent the very best in footwear that everyone's raving
          about. Step into the shoes that are making waves this year and find
          your new favorite pair today!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestseller.map((item, index) => (
          <Productitem
            key={index}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
      <hr></hr>
    </div>
  );
};

export default Bestseller;

import React, { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Title from "../components/Title";
import Productitem from "../components/Productitem";
import Navbaar from "../components/Navbaar";
import Footer from "../components/Footer";
const Collection = () => {
  const { product } = useContext(Shopcontext);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [filterproduct, setfilterproduct] = useState([]);
  const [category, setcategory] = useState([]);
  const [search, setsearch] = useState("");
  const searchfilterproduct = () => {
    let productcopy = product.products;
    if (search) {
      productcopy = productcopy.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setfilterproduct(productcopy);
  };
  const categorytog = (e) => {
    const value = e.target.value;
    setcategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const applayfilter = () => {
    let productcopy = product.products;
    if (category.length > 0) {
      productcopy = productcopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setfilterproduct(productcopy);
  };
  const toggleCategories = () => {
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  useEffect(() => {
    applayfilter();
  }, [category]);
  useEffect(() => {
    searchfilterproduct();
  }, [search]);
  return (
    <div>
      <Navbaar />
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        <div className="min-w-40 mx-2 pt-0">
          <p
            className="my-2 text-sm flex items-center cursor-pointer gap-2 "
            onClick={toggleCategories}
          >
            FILTER
            <FontAwesomeIcon
              icon={isCategoriesVisible ? faAngleUp : faAngleDown}
              className="text-xl m-1 mb-1 sm:hidden"
            />
          </p>
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              isCategoriesVisible ? "block" : "hidden"
            } md:block`}
          >
            <p className="mb text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Men"}
                  name="cat"
                  onChange={categorytog}
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Women"}
                  name="cat"
                  onChange={categorytog}
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={"Kids"}
                  name="cat"
                  onChange={categorytog}
                />
                Kids
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL "} text2={" COLLECTION"} />
            <div className="pb-4">
              <i className="fas fa-search text-gray-500"></i>
              <input
                type="text"
                placeholder="search..."
                className="text-xl text-black  hover:bg-gray-100 rounded-lg"
                onChange={(e) => setsearch(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterproduct.map((item, index) => (
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;

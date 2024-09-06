import React, { useContext, useState, useEffect } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Addnewproduct from "./Addnewproduct";
import Updateproduct from "./Updateproduct";
const Adminproduct = () => {
  const { product, currency } = useContext(Shopcontext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [search, setsearch] = useState("");
  const [filterproduct, setfilterproduct] = useState([]);
  const searchfilterproduct = () => {
    let productcopy = product.products;
    if (search) {
      productcopy = productcopy.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setfilterproduct(productcopy);
  };
  useEffect(() => {
    searchfilterproduct();
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        className="text-xl text-black  hover:bg-gray-100 rounded-lg absolute top-20 right-2"
        onChange={(e) => setsearch(e.target.value)}
      ></input>
      <Link to={"/adminhome"}>
        <button className="pt-10 px-11 text-xl">
          <FontAwesomeIcon icon={faArrowLeft} />
          back
        </button>
      </Link>
      <div className="mt-4">
        <div className="flex justify-center">
          <button
            className=" bg-lime-600 py-2 px-2 rounded-lg"
            onClick={handleOpenModal}
          >
            Add product
          </button>
        </div>
        <ul className="space-y-4">
          {filterproduct.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b pb-4 mb-4"
            >
              <div className="flex items-center">
                <img src={item.img} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>{`Price: ${currency}${item.price}`}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Link to={`/updateproduct/${item.id}`}>
                  <button className="bg-black text-white rounded-lg px-2">
                    Update
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Addnewproduct isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Adminproduct;

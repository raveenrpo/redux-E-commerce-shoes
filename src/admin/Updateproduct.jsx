import React, { useContext, useState, useEffect } from "react";
import Title from "../components/Title";
import { useNavigate, useParams } from "react-router-dom";
import { Shopcontext } from "../context/Shopcontext";

const Updateproduct = () => {
  const nav = useNavigate();
  const { item } = useParams();
  const { product, updateprd, deleteprd } = useContext(Shopcontext);
  const [productdata, setproductdata] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [updatedproduct, setupdatedproduct] = useState({
    title: "",
    img: "",
    rating: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    const fetchproductdata = () => {
      const foundProduct = product.products.find((pr) => pr.id == item);
      if (foundProduct) {
        setproductdata(foundProduct);
      }
    };

    fetchproductdata();
  }, [item, product.products]);

  useEffect(() => {
    if (productdata) {
      setupdatedproduct({
        title: productdata.title,
        img: productdata.img,
        rating: productdata.rating,
        price: productdata.price,
        category: productdata.category,
      });
    }
  }, [productdata]);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setupdatedproduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    updateprd(updatedproduct, item);
    console.log(updatedproduct);
    toggleFormVisibility();
  };

  const deletesub = () => {
    deleteprd(item);
    nav("/adminproduct");
  };

  if (!productdata) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-22">
        <img
          className="w-full md:max-w-[480px]"
          src={productdata.img}
          alt="Product"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-400">
            <span className="text-2xl text-black">Name:</span>{" "}
            {productdata.title}
          </p>
          <p className="font-semibold text-lg text-gray-400">
            <span className="text-2xl text-black">Category:</span>{" "}
            {productdata.category}
          </p>
          <p className="font-semibold text-lg text-gray-400">
            <span className="text-2xl text-black">Price:</span>{" "}
            {productdata.price}
          </p>

          <button
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            onClick={toggleFormVisibility}
          >
            {isFormVisible ? "Cancel" : "Update Product"}
          </button>
          <button
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            onClick={deletesub}
          >
            Delete Product
          </button>
        </div>
      </div>

      {isFormVisible && (
        <div className="fixed inset-1 bg-gray-500 bg-opacity-10 flex justify-center items-center">
          <div className="bg-gray-400 p-8 rounded-lg w-[500px] h-[600px] relative">
            <button
              onClick={toggleFormVisibility}
              className="absolute top-2 right-2 text-gray-600"
            >
              X
            </button>
            <p className="text-center">
              <Title text1={"Update "} text2={" Product"} />
            </p>
            <form
              onSubmit={handlesubmit}
              className="flex flex-col items-center sm:max-w-96 m-auto mt-14 gap-4 text-gray-600"
            >
              <input
                className="w-full ms-2 ps-1 border rounded border-gray-400"
                type="text"
                name="title"
                value={updatedproduct.title}
                onChange={handlechange}
                placeholder="Title"
                required
              />
              <input
                className="w-full ms-2 ps-1 border rounded border-gray-400"
                type="text"
                name="img"
                value={updatedproduct.img}
                onChange={handlechange}
                placeholder="Image URL"
                required
              />
              <input
                className="w-full ms-2 ps-1 border rounded border-gray-400"
                type="text"
                name="rating"
                value={updatedproduct.rating}
                onChange={handlechange}
                placeholder="Rating"
                required
              />
              <input
                type="text"
                className="w-full ms-2 ps-1 border rounded border-gray-400"
                name="price"
                value={updatedproduct.price}
                onChange={handlechange}
                placeholder="Price"
                required
              />
              <input
                type="text"
                className="w-full ms-2 ps-1 border rounded border-gray-400"
                name="category"
                value={updatedproduct.category}
                onChange={handlechange}
                placeholder="Category"
                required
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                UPDATE
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Updateproduct;

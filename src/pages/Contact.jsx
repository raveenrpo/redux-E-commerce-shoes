import React from "react";
import Title from "../components/Title";
import Navbaar from "../components/Navbaar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbaar />
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-22">
        <img
          className="w-full md:max-w-[480px]"
          src="https://cdn.pixabay.com/photo/2018/01/11/21/27/desk-3076954_1280.jpg"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-700">Our Store</p>
          <p className="text-gray-500">
            54089 Willms Station <br />
            Sterk 345 Washington
          </p>
          <p className="text-gray-500">
            Tel:(123) 456 222-1234
            <br />
            Email:stepintrend@stepin.com
          </p>
          <p className="font-semibold text-xl text-gray-700">
            Careers at Foreever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-x-84 bg-gray-200 m-1 p-2 rounded-md hover:bg-white">
            Explore More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

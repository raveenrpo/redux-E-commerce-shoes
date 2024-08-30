import React from "react";

const Footer = () => {
  return (
    <div style={{ background: "gray" }}>
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 px-14 py-10 text-sm">
        <div>
          <h1 className="step-in-trend mb-0 w-20">
            Step<span style={{ color: "#A7A6BA" }}>In</span>Trend
          </h1>
          <p className="w-full md:w-2/3 text-gray-600">
            We're passionate about bringing you the finest selection of
            footwear,. For any questions or assistance, our dedicated support
            team is just a click away. Step confidently into comfort and style
            with us, and join our community of satisfied customers. Happy
            shopping!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+12-234-5690</li>
            <li>stepintrend@stepin.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr></hr>
        <p className="py-5 text-sm text-center">Copyright 2024@ stepin.com </p>
      </div>
    </div>
  );
};

export default Footer;

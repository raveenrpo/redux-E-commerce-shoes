import React from "react";
import Title from "../components/Title";
import Navbaar from "../components/Navbaar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbaar />

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] px-10"
          src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <p className="px-3">
          Welcome to STEPINTREND, where innovation meets tradition in the world
          of footwear. Founded in 1999 with a vision to redefine comfort and
          style, our journey began with a simple yet powerful idea: to create
          shoes that not only look good but feel amazing.
          <br />
          Our mission is to blend high-quality materials with cutting-edge
          design to deliver footwear that enhances your everyday life. We are
          committed to sustainability, using eco-friendly materials and
          practices to reduce our footprint while maintaining the highest
          standards of craftsmanship.
          <br />
          At STEPINTREND, we believe in the power of great design and the
          importance of detail. Our team of skilled artisans and designers work
          tirelessly to bring you shoes that are not only stylish but also
          durable and comfortable. Each pair of shoes is crafted with care,
          ensuring that you experience the perfect balance of form and function.
          <br />
          <br />
          <b>Our Story</b>
          <p>
            Our story began in 1999 when Roronova decided to bring a fresh
            perspective to the footwear industry. What started as a small
            workshop with a handful of skilled artisans quickly evolved into a
            thriving business, driven by a shared vision of combining classic
            styles with modern functionality. From our humble beginnings, we
            have continuously pushed the boundaries of design and craftsmanship.
            Each milestone we've reached has been a testament to our unwavering
            commitment to quality and innovation.
          </p>
        </p>
      </div>
      <div className="flex flex-col md:flex-row text-s mb-20">
        <div className="border-r-4 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Craftsmanship</b>
          <p>
            We use only the finest materials and cutting-edge techniques to
            ensure each pair of shoes meets our rigorous standards for
            durability and comfort.
          </p>
        </div>
        <div className="border-r-4 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Sustainability</b>
          <p>
            We are committed to reducing our environmental footprint by
            incorporating eco-friendly materials and ethical production
            practices.
          </p>
        </div>
        <div className="border-r-4 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Customer-Centric Approach</b>
          <p>
            Your satisfaction is our priority. We strive to provide exceptional
            service and products that exceed your expectations.
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">
          Subscribe now & get 25% off
        </p>
        <p className="text-gray-400 mt-3">
          Don’t miss out on exclusive deals and the latest updates.Stay ahead in
          style and comfort—sign up now and step into amazing savings!
        </p>
        <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
          <input
            className="w-full sm:flex-1 outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="bg-black text-white text-xs px-10 py-4"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default About;

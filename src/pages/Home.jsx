import React from "react";
import Hero from "../components/Hero";
import Latestcollection from "../components/Latestcollection";
import Bestseller from "../components/Bestseller";
import Ourpolicy from "../components/Ourpolicy";
import Footer from "../components/Footer";
import Navbaar from "../components/Navbaar";

const Home = () => {
  return (
    <div>
      <Navbaar />
      <Hero />
      <Latestcollection />
      <Bestseller />
      <Ourpolicy />
      <Footer />
    </div>
  );
};

export default Home;

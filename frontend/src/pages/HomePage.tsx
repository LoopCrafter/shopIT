import React from "react";
import Hero from "../components/layout/pages/home/Hero";
import GenderCollectionSection from "../components/products/GenderCollectionSection";
import NewArrivals from "../components/products/NewArrivals";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
    </div>
  );
};

export default HomePage;

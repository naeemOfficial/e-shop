"use client";
import React from "react";
import OurCard from "./ui/OurCard";
import { ourData } from "../Data/Dummy";

const OurProduct = () => {
  const slicedData = ourData.slice(0, 6);

  return (
    <div className="container mx-auto py-28">
      <div className=" px-8 py-28">
        <div className="text-left">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Explore Our Products
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-11">
        {slicedData.map((product, index) => (
          <OurCard key={index} {...product} />
        ))}
      </div>
      <div className="flex py-20 justify-center">
        <button className="text-white bg-primary py-4 px-[53px] text-base font-medium rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default OurProduct;

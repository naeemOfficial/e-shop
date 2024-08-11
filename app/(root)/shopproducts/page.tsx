"use client";
import OurCard from "@/components/ui/OurCard";
import { ourData } from "@/Data/Dummy";
import React from "react";

const ShopProducts = () => {
  return (
    <div className="container mx-auto py-20">
      <div className=" px-8 py-28">
        <div className="text-left">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Explore Our Products
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
        {ourData.map((product, index) => (
          <OurCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;

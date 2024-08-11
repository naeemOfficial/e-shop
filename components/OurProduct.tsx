"use client"
import React from "react";
import OurCard from "./ui/OurCard";
import { ourData } from "../Data/Dummy";
import Link from "next/link";

const OurProduct = () => {
  const slicedData = ourData.slice(0, 6);

  return (
    <div className="container mx-auto py-20 px-4">
      <div className=" py-28">
        <div className="text-left">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Explore Our Products
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {slicedData.map((product, index) => (
          <OurCard key={index} {...product} />
        ))}
      </div>
      <div className="flex pt-20 justify-center">
        <Link href="/shopproducts">
          <button className="text-white bg-primary py-4 px-[53px] text-base font-medium rounded">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurProduct;

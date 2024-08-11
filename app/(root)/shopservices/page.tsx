"use client";
import React from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import { serviceData } from "@/Data/Dummy";

const ShopServices = () => {
  return (
    <div className="container mx-auto flex justify-center items-center px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ShopServices;

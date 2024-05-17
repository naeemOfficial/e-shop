"use client";

import React from "react";
import { useRouter } from "next/compat/router";


const ServiceDetails = () => {
    const router = useRouter();
  
    if (!router) {
      // Handle the case where router is null
      return <div>Router is not available.</div>;
    }
  
    const { service_name, rate, description, service_features } = router.query;
  
    return (
      <div>
        <h2>{service_name}</h2>
        <p>Rate: {rate}</p>
        <p>Description: {description}</p>
        <p>Service Features: {service_features}</p>
      </div>
    );
  };

export default ServiceDetails;


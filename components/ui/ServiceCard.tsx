import React from "react";
import { ServiceProps } from "../../Data/Dummy";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import Link from "next/link";

const ServiceCard: React.FC<ServiceProps> = ({
  image,
  service_name,
  rate,
  description,
  service_features,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-[650px]">
      <div className="py-3 text-center bg-primary">
        <h3 className="text-xl font-semibold text-white">{service_name}</h3>
      </div>
      <div className="relative bg-[#F1F1F1] h-[350px]">
        <div className="absolute w-[650px] flex items-center justify-center">
          <img
            src={image}
            alt={service_name}
            className="w-full h-[350px] object-cover"
          />
        </div>

        <div className="absolute top-5 right-5 flex ">
          <div className="flex flex-col items-center justify-center text-secondary">
            <div className="mb-5 p-[6px] rounded-full bg-white">
              <IoIosHeartEmpty className="text-2xl" />
            </div>
            <div className="mb-5 p-[6px] rounded-full bg-white">
              <PiShoppingCartSimple className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="px-4 py-4 text-center">
          <h2 className="text-base font-medium text-secondary mt-4">
            {service_name}
          </h2>
          <p className="text-[#7d7d7d] mt-2">
            Save Up to $100 on a Complete Internet
          </p>
          <div className="mt-4 mb-6">
            <Link href="/memberships">
              <button className="bg-primary text-white px-16 py-4 text-base rounded mr-4">
                Sign up
              </button>
            </Link>
            <Link
              href="/servicedetails"
            >
              <button className="border border-secondary text-secondary px-11 py-4 text-base  rounded">
                More Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

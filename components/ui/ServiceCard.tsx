import React, { useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMoreDetails = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full sm:w-[350px] md:w-[500px] lg:w-[650px]">
      <div className="py-3 text-center bg-primary">
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {service_name}
        </h3>
      </div>
      <div className="relative bg-[#F1F1F1] h-[250px] sm:h-[300px] md:h-[350px]">
        <div className="absolute w-full flex items-center justify-center">
          <img
            src={image}
            alt={service_name}
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover"
          />
        </div>

        <div className="absolute top-3 sm:top-5 right-3 sm:right-5 flex">
          <div className="flex flex-col items-center justify-center text-secondary">
            <div className="mb-3 sm:mb-5 p-[4px] sm:p-[6px] rounded-full bg-white">
              <IoIosHeartEmpty className="text-xl sm:text-2xl" />
            </div>
            <div className="p-[4px] sm:p-[6px] rounded-full bg-white">
              <PiShoppingCartSimple className="text-xl sm:text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <div className="px-2 sm:px-4 py-2 sm:py-4 text-center">
          <h2 className="text-base font-medium text-secondary mt-2 sm:mt-4">
            {service_name}
          </h2>
          <p className="text-[#7d7d7d] mt-1 sm:mt-2">
            Save Up to $100 on a Complete Internet
          </p>
          <div className="mt-3 sm:mt-4 mb-4 sm:mb-6">
            <Link href="/memberships">
              <button className="bg-primary text-white px-12 sm:px-16 py-3 sm:py-4 text-sm sm:text-base rounded mr-3 sm:mr-4">
                Sign up
              </button>
            </Link>

            <button
              className="border border-secondary text-secondary px-8 sm:px-11 py-3 sm:py-4 text-sm sm:text-base rounded"
              onClick={handleMoreDetails}
            >
              More Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Quick View */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md sm:max-w-lg mx-2 sm:mx-4 relative">
            <button
              className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={image}
              alt={service_name}
              className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {service_name}
            </h3>
            <p className="text-primary text-md sm:text-lg mb-4">${rate}</p>
            <p className="text-[#7d7d7d] mb-4">{description}</p>
            <ul className="list-disc list-inside">
              {service_features.map((feature, index) => (
                <li key={index} className="text-[#7d7d7d]">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 sm:mt-6 bg-primary text-white px-6 py-2 sm:py-3 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;

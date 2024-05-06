import { TeamProps } from "@/Data/Dummy";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Teamcard: React.FC<TeamProps> = ({ image, name, role }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="py-[20px] text-center">
        <img
          src={image}
          alt=""
          className="w-[180px] h-[180px] object-cover rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-[#7d7d7d] text-base mb-4">{role}</p>
        <div className="flex justify-center space-x-4 text-2xl text-primary mt-7">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Teamcard;

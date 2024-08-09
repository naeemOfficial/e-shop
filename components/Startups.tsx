import Link from "next/link";
import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const Startups = () => {
  return (
    <div className="container mx-auto py-20 px-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <h2 className="text-[39px] lg:text-[45px] font-bold leading-[55px]">
            Join <span className="text-primary">6,000+</span> Startups <br />{" "}
            Growing with <span className="text-primary">ETA07</span>
          </h2>
          <ul className="py-5">
            <li className="flex items-center mb-2 ">
              <IoCheckmarkOutline className="text-2xl text-primary mr-2" />
              <p className="text-[#7d7d7d] text-base">
                Lorem ipsum dolor sit amet
              </p>
            </li>
            <li className="flex items-center mb-2">
              <IoCheckmarkOutline className="text-2xl text-primary mr-2" />
              <p className="text-[#7d7d7d] text-base">Sed do eiusmod tempor</p>
            </li>
            <li className="flex items-center mb-2">
              <IoCheckmarkOutline className="text-2xl text-primary mr-2" />
              <p className="text-[#7d7d7d] text-base">
                ut labore et dolore magna aliqua
              </p>
            </li>
          </ul>
          <div className="flex justify-left">
            <Link href="/memberships">
              <button className="bg-primary text-white px-14 py-3 text-base rounded mr-4">
                Sign up
              </button>
            </Link>
            <button className="border border-secondary text-secondary px-10 py-3 text-base  rounded">
              More Details
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-[50px]">
          <img
            className="w-full"
            src="/products/image3.png"
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default Startups;

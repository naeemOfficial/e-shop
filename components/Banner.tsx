"use client";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div className="container mx-auto py-14">
      <div className="flex flex-col lg:flex-row items-center justify-center py-4 px-6 lg:px-12">
        <div className="lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0">
          <h2 className="text-2xl md:text-4xl lg:text-[64px] text-secondary font-bold mb-2 lg:w-[650px] md:leading-[64px]">
            Discover the Future of{" "}
            <span className="text-primary">Online Shopping & Services</span>
          </h2>
          <p className="text-base lg:text-lg mb-4 text-[#7D7D7D] lg:w-full py-8">
            Your Gateway to Exclusive Deals, Local Services, and Member-Only
            Benefits. Join Today!
          </p>
          <div className="space-y-4 lg:space-y-0 lg:space-x-8 flex flex-col lg:flex-row items-center lg:items-stretch">
            <Link href="/memberships">
              <button className="bg-primary text-white font-bold px-11 py-4 md:px-9 rounded">
                Become a Member
              </button>
            </Link>
            <Link href="/shopproducts">
              <button className="bg-white border border-secondary text-secondary font-bold py-4 px-[62px] rounded flex items-center justify-center lg:justify-between">
                <span className="flex items-center">
                  Shop Now
                  <MdArrowOutward className="ml-2 text-lg" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src="/banner.png"
            alt="Description of your image"
            className="w-full h-auto lg:rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

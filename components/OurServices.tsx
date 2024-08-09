import Link from "next/link";
import React from "react";


const OurServices = () => {
  return (
    <div className="container mx-auto px-4">
      <div className=" py-28">
        <div className="text-left">
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Explore Our Services
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-11 ">
        {/* Card 1 */}
        <div className="bg-white shadow-xl ">
          <div className="bg-primary py-4">
            <h2 className="text-white text-xl font-semibold text-center">
              Cable & Internet
            </h2>
          </div>
          <div className="relative">
            <img
              src="/Cable & Internet.jpg"
              alt="Image"
              className="w-full h-[450px] object-cover"
            />
          </div>
          <div className="px-4 py-4 text-center">
            <h2 className="text-base font-medium text-secondary mt-4">
              Xfinity Comcast
            </h2>
            <p className="text-[#7d7d7d] mt-2">
              Save Up to $100 on a Complete Internet
            </p>
            <div className="mt-4 mb-6">
              <Link href="/memberships">
                <button className="bg-primary text-white px-14 py-4 text-base rounded mr-4">
                  Sign up
                </button>
              </Link>
              <Link href="/shopservices">
                <button className="border border-secondary text-secondary px-10 py-4 text-base4 rounded mt-4">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow-xl">
          <div className="bg-primary py-4">
            <h2 className="text-white text-xl font-semibold text-center">
              Electricity
            </h2>
          </div>
          <div className="relative">
            <img
              src="/Electricity.jpg"
              alt="Image"
              className="w-full h-[450px] object-cover"
            />
          </div>
          <div className="px-4 py-4 text-center">
            <h2 className="text-base font-medium text-secondary mt-4">
              Xfinity Comcast
            </h2>
            <p className="text-[#7d7d7d] mt-2">
              Save Up to $100 on a Complete Internet
            </p>
            <div className="mt-4 mb-6">
              <Link href="/memberships">
                <button className="bg-primary text-white px-14 py-4 text-base rounded mr-4">
                  Sign up
                </button>
              </Link>
              <Link href="/shopservices">
                <button className="border border-secondary text-secondary px-10 py-4 text-base  rounded mt-4">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow-xl">
          <div className="bg-primary py-4">
            <h2 className="text-white text-xl font-semibold text-center">
              Healthcare
            </h2>
          </div>
          <div className="relative">
            <img
              src="/Healthcare.jpg"
              alt="Image"
              className="w-full h-[450px]  object-cover"
            />
          </div>
          <div className="px-4 py-4 text-center">
            <h2 className="text-base font-medium text-secondary mt-4">
              Xfinity Comcast
            </h2>
            <p className="text-[#7d7d7d] mt-2">
              Save Up to $100 on a Complete Internet
            </p>
            <div className="mt-4 mb-6">
              <Link href="/memberships">
                <button className="bg-primary text-white px-14 py-4 text-base rounded mr-4">
                  Sign up
                </button>
              </Link>
              <Link href="/shopservices">
                <button className="border border-secondary text-secondary px-10 py-4 text-base  rounded mt-4">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow-xl">
          <div className="bg-primary py-4">
            <h2 className="text-white text-xl font-semibold text-center">
              Medical Testing
            </h2>
          </div>
          <div className="relative">
            <img
              src="/Medical Testing.jpg"
              alt="Image"
              className="w-full h-[450px] object-cover"
            />
          </div>
          <div className="px-4 py-4 text-center">
            <h2 className="text-base font-medium text-secondary mt-4">
              Xfinity Comcast
            </h2>
            <p className="text-[#7d7d7d] mt-2">
              Save Up to $100 on a Complete Internet
            </p>
            <div className="mt-4 mb-6">
              <Link href="/memberships">
                <button className="bg-primary text-white px-14 py-4 text-base rounded mr-4">
                  Sign up
                </button>
              </Link>
              <Link href="/shopservices">
                <button className="border border-secondary text-secondary px-10 py-4 text-base  rounded mt-4">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-28 justify-center">
        <Link href="/shopservices">
          <button className="text-white bg-primary py-4 px-[53px] text-base font-medium rounded">
            View All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurServices;

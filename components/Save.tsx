import React from "react";
import Image from "next/image";
import img1 from "../public/bxsupport.png";
import img2 from "../public/tokecn.png";
import img3 from "../public/saving.png";

const Save = () => {
  return (
    <section className="container mx-auto py-20 px-4">
      <h2 className="text-[40px] font-bold mb-20 text-center">
        Save Big with Hot Rates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
        <div className="bg-white shadow-xl rounded-md overflow-hidden flex flex-col justify-center items-center py-5">
          <Image src={img3} alt="Support Icon" width={80} height={80} />
          <div className="p-4 text-center">
            <p className="text-secondary text-xl">Over $3 Billion on saving</p>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-md overflow-hidden flex flex-col justify-center items-center">
          <Image src={img2} alt="Support Icon" width={80} height={80} />
          <div className="p-4 text-center">
            <p className="text-secondary text-xl">Low price guarantee</p>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-md overflow-hidden flex flex-col justify-center items-center">
          <Image src={img1} alt="Support Icon" width={80} height={80} />
          <div className="p-4 text-center">
            <p className="text-secondary text-xl">24/7 Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Save;

import React from "react";

const MoreProducts = () => {
  return (
    <div className="container mx-auto flex justify-center px-4">
      <div className="flex flex-col  gap-8">
        <div className="flex gap-8">
          <img
            src="/products/image1.png"
            alt="Product 1"
            className="w-[730px] h-[456px] "
          />
          <img
            src="/products/image2.png"
            alt="Product 2"
            className="w-[730px] h-[456px]"
          />
        </div>

        <div className="flex gap-8">
          <div className="flex bg-white shadow-2xl w-[730px] items-center">
            <div className="my-[78px]  pl-[60px] pr-[150px]">
              <h2 className="text-[40px] leading-9 font-semibold  mb-4">
                Decor Your Home with <br /> our Furtiture
              </h2>
              <p className="text-[#7d7d7d] text-base mb-8">
                Crafting Comfort, Inspiring Style: Explore Endless Possibilities
                for Home Decor with Our Exceptional Furniture Designs.
              </p>
              <button className="bg-primary text-white font-bold py-4 px-8 rounded">
                View All Products
              </button>
            </div>
          </div>
          <div>
            <img
              src="/products/image3.png"
              alt="Next.js Image"
              className="w-[730px] h-[456px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;

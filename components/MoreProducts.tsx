import React from "react";

const MoreProducts = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-8">
        {/* First row of images */}
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="/products/image1.png"
            alt="Product 1"
            className="w-full md:w-1/2 h-auto"
          />
          <img
            src="/products/image2.png"
            alt="Product 2"
            className="w-full md:w-1/2 h-auto"
          />
        </div>

        {/* Second row with text and image */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex bg-white shadow-2xl w-full md:w-1/2 items-center">
            <div className="m-8 md:my-[78px] md:pl-[60px] md:pr-[150px]">
              <h2 className="text-xl md:text-[40px] leading-9 font-semibold mb-4">
                Decor Your Home with <br /> our Furniture
              </h2>
              <p className="text-[#7d7d7d] text-sm md:text-base mb-8">
                Crafting Comfort, Inspiring Style: Explore Endless Possibilities
                for Home Decor with Our Exceptional Furniture Designs.
              </p>
              <button className="bg-primary text-white font-bold py-2 md:py-4 px-4 md:px-8 rounded">
                View All Products
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/products/image3.png"
              alt="Next.js Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;

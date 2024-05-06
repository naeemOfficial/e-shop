import React from "react";
import { OurProps } from "../../Data/Dummy";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import ReactStars from "react-stars";

const OurCard: React.FC<OurProps> = ({
  image,
  product_name,
  price,
  discount_price,
  rating,
  num_reviews,
  stock_status,
  description,
  color,
  sizes,
  seller_brand_name,
  estimated_delivery_date,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-[490px] mx-8">
      <div className="relative bg-[#F1F1F1] h-[350px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={image}
            alt={product_name}
            className="h-[300px] object-cover"
          />
        </div>
        <div className="absolute top-5 left-5 flex py-2 px-3 rounded bg-primary">
          <div className="flex flex-col items-center justify-center text-sm font-semibold text-white">
            -40%
          </div>
        </div>
        <div className="absolute top-5 right-5 flex ">
          <div className="flex flex-col items-center justify-center text-secondary">
            <div className="mb-5 p-[6px] rounded-full bg-white">
              <IoIosHeartEmpty className="text-2xl" />
            </div>
            <div className="mb-5 p-[6px] rounded-full bg-white">
              <IoEyeOutline className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{product_name}</h3>
        <div className="flex gap-5">
          <p className="text-primary text-base font-medium mb-2">
            {discount_price}
          </p>
          <p className="text-[#7D7D7D] text-base font-medium line-through mb-2">
            {price}
          </p>
        </div>
        <div className="flex items-center mb-2">
          <ReactStars
            count={5}
            value={rating}
            size={24}
            color2={"#FDC648"}
            edit={false}
          />
          <span className="text-gray-600 text-sm ml-1">{rating}</span>
          <p className="text-gray-600 text-sm ml-2">({num_reviews})</p>
        </div>
        <p className="text-secondary font-bold text-sm mb-2">
          Seller: {seller_brand_name}
        </p>
        <p className="text-secondary text-sm mb-2">
          Estimated Delivery Date: {estimated_delivery_date}
        </p>
      </div>
    </div>
  );
};

export default OurCard;

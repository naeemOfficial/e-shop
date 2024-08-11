import React, { useState } from "react";
import { ProductProps } from "../../Data/Dummy";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline, IoPerson } from "react-icons/io5";
import StarRatings from "react-star-ratings";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Carousel: React.FC<ProductProps> = ({
  id,
  image,
  product_name,
  price,
  discount_price,
  rating,
  num_reviews,
  stock_status,
}) => {
  const [isQuickViewVisible, setQuickViewVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToWishlist = () => {
    const productData = {
      id,
      image,
      product_name,
      price,
      stock_status,
    };
    const existingWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );
    existingWishlist.push(productData);
    localStorage.setItem("wishlist", JSON.stringify(existingWishlist));
    toast.success("Successfully added to wishlist!");
  };

  const toggleQuickView = () => {
    setQuickViewVisible(!isQuickViewVisible);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 10));
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-[500px]">
      <div className="relative bg-[#F1F1F1] h-[350px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={image}
            alt={product_name}
            className="h-auto md:h-[400px] object-cover"
          />
        </div>
        <div className="absolute top-5 left-5 flex py-2 px-3 rounded bg-primary">
          <div className="flex flex-col items-center justify-center text-sm font-semibold text-white">
            -40%
          </div>
        </div>
        <div className="absolute top-5 right-5 flex">
          <div className="flex flex-col items-center justify-center text-secondary">
            <div
              className="mb-5 p-[6px] rounded-full bg-white"
              onClick={handleAddToWishlist}
            >
              <IoIosHeartEmpty className="text-2xl cursor-pointer" />
            </div>
            <div
              className="mb-5 p-[6px] rounded-full bg-white"
              onClick={toggleQuickView}
            >
              <IoEyeOutline className="text-2xl cursor-pointer" />
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
          <StarRatings
            rating={4.5}
            starRatedColor="#FDC648"
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="2px"
          />
          <span className="text-gray-600 text-sm ml-1">{rating}</span>
          <p className="text-gray-600 text-sm ml-2 flex items-center">
            <IoPerson className="mr-1" />
            {num_reviews}
          </p>
        </div>
      </div>
      {isQuickViewVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-4xl w-full flex">
            <img
              src={image}
              alt={product_name}
              className="w-1/2 h-auto object-cover rounded-lg"
            />
            <div className="w-1/2 pl-8">
              <h2 className="text-2xl font-semibold mb-4">{product_name}</h2>
              <p className="text-lg font-medium">Price: {price}</p>
              <p className="text-lg font-medium">
                Discount Price: {discount_price}
              </p>
              <div className="flex items-center mb-2">
                <StarRatings
                  rating={4.5}
                  starRatedColor="#FDC648"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="2px"
                />
                <span className="text-gray-600 text-sm ml-1">{rating}</span>
                <p className="text-gray-600 text-sm ml-2 flex items-center">
                  <IoPerson className="mr-1" />
                  {num_reviews}
                </p>
              </div>
              <p className="text-lg font-medium">
                Stock Status: {stock_status}
              </p>
              <p className="mt-4">
                Description: This is a detailed description of the product.
              </p>
              <div className="mt-4 flex items-center">
                <label htmlFor="quantity" className="mr-2">
                  Quantity:
                </label>
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded-l-md"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b border-gray-200">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="px-2 py-1 bg-gray-200 text-gray-800 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg">
                Add to Cart
              </button>
              <button
                onClick={toggleQuickView}
                className="mt-4 ml-2 px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Carousel;

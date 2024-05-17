import React, { useEffect, useState } from "react";
import { ProductProps } from "../../Data/Dummy";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import ReactStars from "react-stars";
import Link from "next/link";
import WishList from '../../app/(root)/wishlist/page';

const Carousel: React.FC<
  ProductProps & { addToWishlistHandler: (item: ProductProps) => void }
> = ({
  image,
  product_name,
  price,
  discount_price,
  rating,
  num_reviews,
  stock_status,
  addToWishlistHandler,
}) => {
  const [wishList, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  })
  const [product, setProduct] = useState('');

  useEffect(() => {
    // Save the wishlist to localStorage whenever it changes
    localStorage.setItem('wishlist', JSON.stringify(wishList));
  }, [wishList]);
  const addToWishlist = (product_name) => {
    console.log("Adding to wishlist:", product_name); // Debugging log
    if (product_name.trim() === '' || wishList.includes(product_name)) return; // Prevent adding empty or duplicate product names
    console.log("Previous Wishlist:", wishList); // Debugging log
    setWishlist(prevWishList => [...prevWishList, product_name]); // Update state with the new product
    console.log("New Wishlist:", [...wishList, product_name]); // Debugging log
    setProduct('');
  };
  // const addToWishlist = (product_name: string) => {
  //   console.log(product_name);
  //   localStorage.setItem("product",product_name)
  //   // const newItem: ProductProps = {
  //   //   image,
  //   //   product_name,
  //   //   // price,
  //   //   // discount_price,
  //   //   // rating,
  //   //   // num_reviews,
  //   //   // stock_status,
  //   // };
  //   // addToWishlistHandler(newItem);
  // };
  return (
    <div className="bg-white rounded-lg shadow-md w-[500px]">
      <div className="relative bg-[#F1F1F1] h-[350px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={image}
            alt={product_name}
            className="h-[400px] object-cover"
          />
        </div>
        <div className="absolute top-5 left-5 flex py-2 px-3 rounded bg-primary">
          <div className="flex flex-col items-center justify-center text-sm font-semibold text-white">
            -40%
          </div>
        </div>
        <div className="absolute top-5 right-5 flex ">
          <div className="flex flex-col items-center justify-center text-secondary">
            <div
              className="mb-5 p-[6px] rounded-full bg-white"
              onClick={() => addToWishlist(product_name)}
            >
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
      </div>
    </div>
  );
};

export default Carousel;

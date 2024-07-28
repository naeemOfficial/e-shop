"use client";
import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const WishList: React.FC = () => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const handleDelete = (index: number) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(index, 1);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (item: any) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCart.push(item);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-semibold mb-5">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-600">No items in the wishlist.</p>
      ) : (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Image</th>
              <th className="py-2 px-4 border-b border-gray-200">Product Name</th>
              <th className="py-2 px-4 border-b border-gray-200">Price</th>
              <th className="py-2 px-4 border-b border-gray-200">Stock Status</th>
              <th className="py-2 px-4 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b flex justify-center items-center border-gray-200">
                  <img src={item.image} alt={item.product_name} className="h-16 w-16 object-cover"/>
                </td>
                <td className="py-2 px-4 text-center border-b border-gray-200">{item.product_name}</td>
                <td className="py-2 px-4 text-center border-b border-gray-200">{item.price}</td>
                <td className="py-2 px-4 text-center border-b border-gray-200">{item.stock_status}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <div className="flex justify-center items-center h-full">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="py-2 px-6 rounded bg-primary mr-7 text-white"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="hover:text-red-600 text-xl"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WishList;

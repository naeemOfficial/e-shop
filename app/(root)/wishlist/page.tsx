"use client";
import React, { useEffect, useState } from "react";
import { productData, ProductProps } from "@/Data/Dummy";

const WishList = () => {
  const [wishlistItems, setWishlistItems] = useState<any>([]);

  const datas = productData;
  console.log(datas);

  useEffect(() => {
    const product_name = localStorage.getItem("product");
    console.log(product_name);
    if (product_name) {
      const foundProduct = productData.find(
        (item) => item.product_name === product_name
      );
    //   setWishlistItems(foundProduct)
      console.log(foundProduct);
    }
  }, []);

  if (!wishlistItems || wishlistItems.length === 0) {
    return <div>No items in the wishlist</div>;
  }

  return (
    <div>
      <h2>Wishlist</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Stock Status</th>
          </tr>
        </thead>
        <tbody>
          {wishlistItems.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>{item.product_name}</td>
              <td>{item.price}</td>
              <td>{item.stock_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishList;

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartWithQuantity = storedCart.map((item: any) => ({
      ...item,
      quantity: item.quantity || 1, // Ensure quantity is set
    }));
    setCart(cartWithQuantity);
  }, []);

  const handleDelete = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-semibold mb-5">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">No items in the cart.</p>
      ) : (
        <>
          <table className="min-w-full bg-white mb-5">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200">Image</th>
                <th className="py-2 px-4 border-b border-gray-200">
                  Product Name
                </th>
                <th className="py-2 px-4 border-b border-gray-200">Price</th>
                <th className="py-2 px-4 border-b border-gray-200">Quantity</th>
                <th className="py-2 px-4 border-b border-gray-200">Subtotal</th>
                <th className="py-2 px-4 border-b border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b flex justify-center items-center border-gray-200">
                      <img
                        src={item.image}
                        alt={item.product_name}
                        className="h-16 w-16 object-cover"
                      />
                    </td>
                    <td className="py-2 px-4 text-center border-b border-gray-200">
                      {item.product_name}
                    </td>
                    <td className="py-2 px-4 text-center border-b border-gray-200">
                      {item.price}
                    </td>
                    <td className="py-2 px-4 text-center border-b border-gray-200">
                      {item.quantity}
                    </td>
                    <td className="py-2 px-4 text-center border-b border-gray-200">
                      {item.price}
                    </td>
                    <td className="py-2 px-4 text-center border-b border-gray-200">
                      <button
                        onClick={() => handleDelete(index)}
                        className="hover:text-red-600 text-xl"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="text-center">
            <Link href="/payment">
              <button className="bg-primary text-white px-4 py-2 rounded">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

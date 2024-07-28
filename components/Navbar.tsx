"use client";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { LuAlignRight } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto">
      <nav className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-44 h-14 md:h-16 md:w-52 object-cover"
              />
            </Link>
            <h1 className="text-white text-lg font-bold">Your Logo</h1>
          </div>

          <div className="hidden md:flex items-center text-secondary text-center">
            <div className="flex justify-center space-x-[35px]">
              <Link href="/shopproducts">
                {" "}
                <h1>Shop Products</h1>
              </Link>
              <Link href="/shopservices">
                <h1>Shop Services</h1>
              </Link>
              <Link href="/memberships">
                <h1>Memberships</h1>
              </Link>
              <Link href="/agentreferrals">
                <h1>Agent Referrals</h1>
              </Link>
            </div>
            <div className="ml-[35px] relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 w-full rounded-md bg-primary text-white"
              />
              <button className="absolute text-white text-2xl right-0 top-0 mt-2 mr-2">
                <IoSearch />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-[16px]">
            <Link href="/wishlist">
              <div className="relative">
                <IoMdHeartEmpty className="text-secondary mr-4 cursor-pointer text-2xl" />
              </div>
            </Link>
            <Link href="/cart">
              <div className="relative">
                <CgShoppingCart className="text-secondary mr-4 cursor-pointer text-2xl" />
              </div>
            </Link>
            <div className="p-2 rounded-full bg-primary">
              <FaRegUser
                className="text-white cursor-pointer text-xl"
                onClick={toggleDrawer}
              />
            </div>

            <button
              onClick={toggleDrawer}
              className="text-black text-2xl focus:outline-none ml-5 md:hidden"
            >
              <LuAlignRight />
            </button>
          </div>
        </div>
      </nav>

      <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
        <div style={{ width: 300, height: "100%", backgroundColor: "#fff" }}>
          <div className="p-4">
            <h2>Drawer Content</h2>
            <p>This is the content inside the drawer.</p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;

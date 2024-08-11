"use client";
import { IoMdHeartEmpty } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { LuAlignRight } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { AiOutlineProject } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";
import { MdCardMembership } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { UserButton, useUser, useClerk } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser(); // Get the current user from Clerk
  const { openSignIn } = useClerk(); // Get methods to open sign-in and sign-up

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleSignInClick = () => {
    if (!user) {
      openSignIn();
    }
  };

  return (
    <div className="container mx-auto px-4">
      <nav className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-32 h-10 md:h-16 md:w-52 object-cover"
              />
            </Link>
            <h1 className="text-white text-lg font-bold">Your Logo</h1>
          </div>

          <div className="hidden md:flex items-center text-secondary text-center space-x-4 lg:space-x-8">
            <Link href="/shopproducts">
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
            <div className="relative">
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

          <div className="flex items-center gap-4">
            <Link href="/wishlist">
              <div className="relative">
                <IoMdHeartEmpty className="text-secondary cursor-pointer text-2xl" />
              </div>
            </Link>
            <Link href="/cart">
              <div className="relative">
                <CgShoppingCart className="text-secondary cursor-pointer text-2xl" />
              </div>
            </Link>
            <div className="p-2 rounded-full bg-primary">
              {user ? (
                <div className="flex gap-4 items-center">
                  <UserButton />
                </div>
              ) : (
                <div className="flex gap-4 items-center">
                  <button
                    onClick={handleSignInClick}
                    className="text-white cursor-pointer text-xl"
                  >
                    <FaRegUser />
                  </button>
                </div>
              )}
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
          <div className="p-4 flex flex-col h-full px-5">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-44 h-14 md:h-16 md:w-52 object-cover"
                />
              </Link>
            </div>
            <div className="flex-grow mt-9">
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="text-[30px]">
                    <AiOutlineProject />
                  </div>
                  <Link href="/shopproducts">Shop Products</Link>
                </li>
                <li className="flex items-center gap-4">
                  <div className="text-[30px]">
                    <MdHomeRepairService />
                  </div>
                  <Link href="/shopservices">Shop Services</Link>
                </li>
                <li className="flex items-center gap-4">
                  <div className="text-[30px]">
                    <MdCardMembership />
                  </div>
                  <Link href="/memberships">Memberships</Link>
                </li>
                <li className="flex items-center gap-4">
                  <div className="text-[30px]">
                    <MdOutlineSupportAgent />
                  </div>
                  <Link href="/agentreferrals">Agent Referrals</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import ProductCard from "./ui/Carousel";
import { productData } from "@/Data/Dummy";

const Flash = () => {
  const [countdownDate, setCountdownDate] = useState(Date.now() + 100000000);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numCards, setNumCards] = useState(3);

  useEffect(() => {
    const updateNumCards = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setNumCards(3);
      } else if (screenWidth >= 768) {
        setNumCards(2);
      } else {
        setNumCards(1);
      }
    };

    updateNumCards();

    window.addEventListener("resize", updateNumCards);

    return () => window.removeEventListener("resize", updateNumCards);
  }, []);

  const handleCountdownComplete = () => {
    const newCountdownDate = Date.now() + 100000000;
    setCountdownDate(newCountdownDate);

    setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.length);
  };

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  const getCurrentProducts = () => {
    const startIndex = currentIndex;
    const endIndex = (currentIndex + numCards) % productData.length;
    if (startIndex <= endIndex) {
      return productData.slice(startIndex, endIndex);
    } else {
      return [
        ...productData.slice(startIndex),
        ...productData.slice(0, endIndex),
      ];
    }
  };

  return (
    <div className="container mx-auto py-[50px] px-4 lg:py-[150px]">
      <div className="flex items-center mb-8">
        <img src="/icons/iphone.png" alt="Icon" className="h-12" />
        <p className="text-xl font-semibold text-primary">Today’s</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col lg:flex-row items-center gap-[65px]">
          <p className="text-secondary text-[30px] lg:text-[40px] font-bold">Flash Sales</p>
          <Countdown
            date={countdownDate}
            onComplete={handleCountdownComplete}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="flex text-start items-end justify-between gap-4 lg:gap-8">
                <div>
                  <p className="text-secondary text-sm">Days</p>
                  <p className="text-secondary text-[30px] lg:text-[40px] font-semibold">
                    {addLeadingZero(days)}
                  </p>
                </div>
                <span className="text-primary text-[30px] lg:text-[40px] font-semibold">
                  :
                </span>
                <div>
                  <p className="text-secondary text-sm">Hours</p>
                  <p className="text-secondary text-[30px] lg:text-[40px] font-semibold">
                    {addLeadingZero(hours)}
                  </p>
                </div>
                <span className="text-primary text-[30px] lg:text-[40px] font-semibold">
                  :
                </span>
                <div>
                  <p className="text-secondary text-sm">Minutes</p>
                  <p className="text-secondary text-[30px] lg:text-[40px] font-semibold">
                    {addLeadingZero(minutes)}
                  </p>
                </div>
                <span className="text-primary text-[30px] lg:text-[40px] font-semibold">
                  :
                </span>
                <div>
                  <p className="text-secondary text-sm">Seconds</p>
                  <p className="text-secondary text-[30px] lg:text-[40px] font-semibold">
                    {addLeadingZero(seconds)}
                  </p>
                </div>
              </div>
            )}
          />
        </div>
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <button
            className="p-2 rounded-sm bg-primary hover:bg-gray-300 focus:outline-none"
            onClick={() =>
              setCurrentIndex(
                (prevIndex) =>
                  (prevIndex - 1 + productData.length) % productData.length
              )
            }
          >
            <FaChevronLeft className="h-7 w-7 text-white hover:text-secondary " />
          </button>
          <button
            className="p-2 rounded-sm bg-primary hover:bg-gray-300 focus:outline-none"
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % productData.length
              )
            }
          >
            <FaChevronRight className="h-7 w-7 text-white hover:text-secondary " />
          </button>
        </div>
      </div>
      <div className="flex justify-center py-20 gap-10">
        {getCurrentProducts().map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Flash;

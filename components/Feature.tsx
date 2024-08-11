import React from "react";
import { cardData } from "../Data/Dummy";
import Card from "./ui/Card";

const Feature = () => {
  return (
    <div>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center my-10 md:my-28 justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Our Awesome Feature</h2>
            <p className="text-[#7D7D7D] text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center">
              {cardData.slice(0, 3).map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
            <div className="flex flex-wrap justify-center mt-10 md:mt-20">
              {cardData.slice(3).map((card, index) => (
                <Card
                  key={index + 3}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

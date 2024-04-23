import React from "react";

export interface CardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, className }) => {
  return (
   <div className={`card ${className}`}>
     <div className=" bg-white justify-center w-[400px] text-center">
      <div className="flex justify-center">
        <div className="flex p-4 bg-primary w-28 rounded-md justify-center items-center">
          <img src={image} alt="" className="" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-[#7D7D7D] text-base">{description}</p>
      </div>
    </div>
   </div>
  );
};

export default Card;

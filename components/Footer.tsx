import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-primary py-16 px-5">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center md:justify-between ">
        <div className="pr-0 lg:pr-[200px] mb-8 lg:mb-0 text-center lg:text-left">
          <h3 className="text-[40px] lg:text-[50px] font-semibold mb-4 text-white">
            <span className="text-secondary">E</span>-Shop
          </h3>
        </div>
        <div className="w-full md:w-1/4 mb-8 lg:mb-0 text-center lg:text-start">
          <h3 className="text-lg mb-2 text-secondary">Menu</h3>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-base text-white">
                Shop Products
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-base text-white">
                Shop Services
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-base text-white">
                Memberships
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-base text-white">
                Agent Referrals
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 lg:mb-0 text-center lg:text-start">
          <h3 className="text-lg mb-2 text-secondary">Legal</h3>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-base text-white">
                Privacy Policy
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-base text-white">
                Copyright Information
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-base text-white">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-auto text-center lg:text-left">
          <h3 className="text-lg mb-4 text-secondary">Get in Touch</h3>
          <div className="flex justify-center lg:justify-start gap-8">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.6668 16.0364C30.6668 7.92014 24.0962 1.33301 16.0002 1.33301C7.90416 1.33301 1.3335 7.92014 1.3335 16.0364C1.3335 23.1529 6.37883 29.0784 13.0668 30.4458V20.4475H10.1335V16.0364H13.0668V12.3606C13.0668 9.52282 15.3695 7.21438 18.2002 7.21438H21.8668V11.6254H18.9335C18.1268 11.6254 17.4668 12.2871 17.4668 13.0957V16.0364H21.8668V20.4475H17.4668V30.6663C24.8735 29.9312 30.6668 23.6675 30.6668 16.0364Z"
                fill="white"
              />
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2244_1252)">
                <path
                  d="M25.2013 1.53711H30.108L19.388 13.7904L32 30.4611H22.1253L14.392 20.3491L5.54133 30.4611H0.632L12.0987 17.3544L0 1.53844H10.1253L17.116 10.7811L25.2013 1.53711ZM23.48 27.5251H26.1987L8.648 4.31978H5.73067L23.48 27.5251Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2244_1252">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2 0H11.4L10.2 4.6L9 0H7C7.4 1.2 7.8 2.2 8.2 3.4C8.8 5 9.2 6.4 9.2 7.2V12H11V7.2L13.2 0ZM18 9V6C18 5 17.8 4.4 17.4 3.8C17 3.2 16.4 3 15.6 3C14.8 3 14.2 3.4 13.8 4C13.4 4.4 13.2 5 13.2 6V9.2C13.2 10.2 13.4 10.8 13.8 11.2C14.2 11.8 14.8 12 15.6 12C16.4 12 17 11.6 17.4 11C17.8 10.8 18 10 18 9ZM16.4 9.4C16.4 10.2 16.2 10.6 15.6 10.6C15 10.6 14.8 10.2 14.8 9.4V5.6C14.8 4.8 15 4.4 15.6 4.4C16.2 4.4 16.4 4.8 16.4 5.6V9.4ZM24 12V3H22.4V9.8C22 10.4 21.8 10.6 21.4 10.6C21.2 10.6 21 10.4 21 10.2V3H19.4V10C19.4 10.6 19.4 11 19.6 11.4C19.6 11.8 20 12 20.6 12C21.2 12 21.8 11.6 22.4 11V12H24ZM24.8 21C24.2 21 24 21.4 24 22.2V23H25.6V22.2C25.6 21.4 25.4 21 24.8 21ZM19 21C18.8 21 18.4 21.2 18.2 21.4V26.8C18.4 27 18.8 27.2 19 27.2C19.4 27.2 19.6 26.8 19.6 26V22.2C19.6 21.4 19.4 21 19 21Z"
                fill="white"
              />
              <path
                d="M28.7998 16.5996C28.3998 15.1996 27.1998 13.9996 25.9998 13.9996C22.7998 13.5996 19.3998 13.5996 15.9998 13.5996C12.5998 13.5996 9.3998 13.5996 5.9998 13.9996C4.7998 13.9996 3.5998 15.1996 3.1998 16.5996C2.7998 18.5996 2.7998 20.7996 2.7998 22.7996C2.7998 24.7996 2.7998 26.7996 3.1998 28.7996C3.5998 30.1996 4.7998 31.3996 5.9998 31.7996C9.1998 32.1996 12.5998 32.1996 15.9998 32.1996C19.1998 32.1996 22.5998 32.1996 25.9998 31.7996C27.1998 31.3996 28.3998 30.1996 28.7998 28.7996C29.1998 26.7996 29.1998 24.7996 29.1998 22.7996C29.1998 20.7996 29.1998 18.5996 28.7998 16.5996ZM22.7998 22.7996C22.7998 25.1996 20.9998 27.1996 18.7998 27.1996C16.5998 27.1996 14.7998 25.1996 14.7998 22.7996C14.7998 20.3996 16.5998 18.5996 18.7998 18.5996C20.9998 18.5996 22.7998 20.3996 22.7998 22.7996ZM26.7998 15.9996C26.3998 15.5996 25.9998 15.1996 25.1998 15.1996C24.3998 15.1996 24.1998 15.5996 24.1998 15.9996C24.1998 16.3996 24.1998 16.7996 24.1998 17.1996C24.1998 17.5996 24.5998 17.9996 24.9998 17.9996C25.3998 17.9996 25.7998 17.9996 26.1998 17.5996C26.5998 17.1996 26.7998 16.7996 26.7998 16.3996V15.9996Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-20 md:pt-10">
        <hr className="border-white"/>
       <p className="text-white text-base text-center pt-5">Copyright © 2024 E-Shop LLC. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto flex justify-between items-start">
        <div className="pr-[200px]">
          <h3 className="text-[50px] font-semibold mb-4 text-white">
            <span className="text-secondary">E</span>-Shop
          </h3>
        </div>
        <div className="w-full md:w-1/4">
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
        <div className="w-full md:w-1/4">
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
        <div>
          <h3 className="text-lg mb-4 text-secondary">Get in Touch</h3>
          <div className="flex gap-8">
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
              <g clip-path="url(#clip0_2244_1252)">
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
                d="M28.7998 16.5996C28.3998 15.1996 27.1998 13.9996 25.9998 13.9996C22.7998 13.5996 19.3998 13.5996 15.9998 13.5996C12.5998 13.5996 9.3998 13.5996 5.9998 13.9996C4.7998 13.9996 3.5998 15.1996 3.1998 16.5996C2.7998 18.5996 2.7998 20.7996 2.7998 22.7996C2.7998 24.7996 2.7998 26.9996 3.1998 28.9996C3.5998 30.3996 4.5998 31.3996 5.9998 31.5996C9.3998 31.9996 12.5998 31.9996 15.9998 31.9996C19.3998 31.9996 22.5998 31.9996 25.9998 31.5996C27.3998 31.3996 28.5998 30.3996 28.7998 28.9996C29.1998 26.9996 29.1998 24.7996 29.1998 22.7996C29.1998 20.7996 29.1998 18.5996 28.7998 16.5996ZM10.3998 18.3996H8.3998V28.5996H6.5998V18.3996H4.7998V16.5996H10.3998V18.3996ZM15.1998 28.5996H13.5998V27.5996C12.9998 28.3996 12.3998 28.5996 11.7998 28.5996C11.1998 28.5996 10.9998 28.3996 10.7998 27.9996C10.7998 27.7996 10.5998 27.3996 10.5998 26.5996V19.5996H12.1998V26.5996C12.1998 26.7996 12.3998 26.9996 12.5998 26.9996C12.9998 26.9996 13.1998 26.7996 13.5998 26.1996V19.5996H15.1998V28.5996ZM21.1998 25.7996C21.1998 26.5996 21.1998 27.1996 20.9998 27.5996C20.7998 28.1996 20.3998 28.5996 19.7998 28.5996C19.1998 28.5996 18.5998 28.1996 18.1998 27.5996V28.3996H16.5998V16.5996H18.1998V20.3996C18.7998 19.7996 19.1998 19.3996 19.7998 19.3996C20.3998 19.3996 20.7998 19.7996 20.9998 20.3996C21.1998 20.7996 21.1998 21.3996 21.1998 22.1996V25.7996ZM27.1998 24.3996H23.9998V25.9996C23.9998 26.7996 24.1998 27.1996 24.7998 27.1996C25.1998 27.1996 25.3998 26.9996 25.5998 26.5996V25.5996H27.1998V26.7996C27.1998 27.1996 26.9998 27.3996 26.7998 27.7996C26.3998 28.3996 25.7998 28.7996 24.7998 28.7996C23.9998 28.7996 23.3998 28.3996 22.7998 27.7996C22.3998 27.3996 22.1998 26.5996 22.1998 25.7996V22.7996C22.1998 21.7996 22.3998 21.1996 22.5998 20.7996C22.9998 20.1996 23.5998 19.7996 24.5998 19.7996C25.3998 19.7996 25.9998 20.1996 26.3998 20.7996C26.7998 21.1996 26.7998 21.9996 26.7998 22.7996V24.3996H27.1998Z"
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
              <path
                d="M27.4071 1.33301C28.2715 1.33301 29.1005 1.67639 29.7117 2.28762C30.323 2.89885 30.6663 3.72786 30.6663 4.59227V27.4071C30.6663 28.2715 30.323 29.1005 29.7117 29.7117C29.1005 30.323 28.2715 30.6663 27.4071 30.6663H4.59227C3.72786 30.6663 2.89885 30.323 2.28762 29.7117C1.67639 29.1005 1.33301 28.2715 1.33301 27.4071V4.59227C1.33301 3.72786 1.67639 2.89885 2.28762 2.28762C2.89885 1.67639 3.72786 1.33301 4.59227 1.33301H27.4071ZM26.5923 26.5923V17.9552C26.5923 16.5462 26.0325 15.195 25.0362 14.1987C24.0399 13.2024 22.6887 12.6426 21.2797 12.6426C19.8945 12.6426 18.2812 13.49 17.4989 14.7612V12.9523H12.9523V26.5923H17.4989V18.5582C17.4989 17.3034 18.5093 16.2767 19.7641 16.2767C20.3692 16.2767 20.9495 16.5171 21.3774 16.9449C21.8052 17.3728 22.0456 17.9531 22.0456 18.5582V26.5923H26.5923ZM7.65597 10.3937C8.38207 10.3937 9.07844 10.1053 9.59187 9.59187C10.1053 9.07844 10.3937 8.38207 10.3937 7.65597C10.3937 6.14042 9.17153 4.9019 7.65597 4.9019C6.92555 4.9019 6.22504 5.19206 5.70855 5.70855C5.19206 6.22504 4.9019 6.92555 4.9019 7.65597C4.9019 9.17153 6.14042 10.3937 7.65597 10.3937ZM9.92116 26.5923V12.9523H5.40708V26.5923H9.92116Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-6">
        <hr className="border-white"/>
       <p className="text-white text-base text-center pt-5">Copyright © 2024 E-Shop LLC. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

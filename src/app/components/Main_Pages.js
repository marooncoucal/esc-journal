'use client';

import React from 'react';

export default function MainPages({ backgroundImage, title, description }) {
  return (
    <div className="w-full h-screen">
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute mb-24 left-4 right-4 md:left-[61px] md:w-[674px] bottom-10 flex flex-col items-start gap-[22px]">
          <p className="font-medium text-white text-[32px] md:text-[50px] leading-tight">
            {title}
          </p>

          <p className="text-white text-base md:text-lg leading-[21px]">
            {description}
          </p>
        </div>

        {/* Кнопка фильтра — включить при необходимости */}
        {/* <div className="absolute bottom-5 right-5 w-[41px] h-[42px] bg-[#ff1468] flex items-center justify-center">
          <img
            src={Image_URL +"/faders-horizontal.svg"}
            alt="Filter icon"
            className="w-[33px] h-[33px]"
          />
        </div> */}
      </div>
    </div>
  );
}

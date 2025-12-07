'use client';

import React from 'react';

export default function ArticleMainBlock({
  image,
  bgColor,
  title,
  category,
  authors,
  tagText,
  textColor = 'white',
  reverse = false,
}) {
  // Цвет фона
  const backgroundColorMap = {
    pink: '#ff2070',
    violet: '#9381FF',
    yellow: '#FFCC01',
    green: '#B1FA63',
    black: '#000000',
  };

  const resolvedBgColor = backgroundColorMap[bgColor] || '#ff2070';

  // Цвет текста
  const textColorMap = {
    white: 'text-white',
    black: 'text-black',
    pink: 'text-[#ff1468]',
    violet: 'text-[#9381FF]',
    yellow: 'text-[#FFCC01]',
    green: 'text-[#B1FA63]',
  };

  const resolvedTextColor = textColorMap[textColor] || 'text-white';

  // Порядок блоков
  const layoutClass = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`flex flex-col ${layoutClass} w-full h-auto bg-black`}>
      
      {/* Блок с изображением */}
      <div className="relative w-full md:w-1/2 aspect-square">
        <img
          src={image}
          alt="Article image"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 px-3 py-1 h-[45px] bg-[#ff1468] flex items-center justify-center">
          <span className="text-white text-lg">{tagText}</span>
        </div>
      </div>

      {/* Блок с текстом */}
      <div
  className="relative w-full md:w-1/2 aspect-[2/1] md:aspect-square p-6 flex items-end"
  style={{ backgroundColor: resolvedBgColor }}
>
  <div className={`flex flex-col gap-6 max-w-[690px] ${resolvedTextColor}`}>
    <div className={`text-sm uppercase ${resolvedTextColor}`}>{category}</div>

    <p className={`font-yf-ecto font-bold text-[48px] leading-[49px] md:text-[75px] md:leading-[76px] ${resolvedTextColor}`}>
      {title}
    </p>

    <p className={`font-yf-giga font-normal text-[16px] md:text-[22px] ${resolvedTextColor}`}>
      {authors}
    </p>
  </div>
</div>

    </div>
  );
}

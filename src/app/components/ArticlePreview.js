'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ArticlePreview({
  image,
  bgColor,
  title,
  category,
  authors,
  tagText,
  link,
  textColor = 'white',
  reverse = false,
}) {
  const backgroundColorMap = {
    pink: '#ff2070',
    violet: '#9381FF',
    yellow: '#FFCC01',
    green: '#B1FA63',
    black: '#000000',
  };

  const textColorMap = {
    white: '#ffffff',
    black: '#000000',
    pink: '#ff1468',
    violet: '#9381FF',
    yellow: '#FFCC01',
    green: '#B1FA63',
  };

  const resolvedBgColor = backgroundColorMap[bgColor] || '#ff2070';
  const resolvedTextColor = textColorMap[textColor] || '#ffffff';

  const layoutClass = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={link}
      className="block w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`flex flex-col ${layoutClass} w-full h-auto bg-black cursor-pointer`}>

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
          className="relative w-full md:w-1/2 aspect-square p-6 flex items-start justify-center"
          style={{
            backgroundColor: hovered ? resolvedTextColor : resolvedBgColor,
            color: hovered ? resolvedBgColor : resolvedTextColor,
          }}
        >
          <div className="flex flex-col gap-6 max-w-[690px] w-full">
            <div className="text-sm uppercase font-label">
              {category}
            </div>

            <p className="font-title text-[24px] md:text-[38px] lg:text-[48px] leading-tight">
              {title}
            </p>

            <p className="text-base md:text-lg">
              {authors}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}


// 'use client';

// import Link from 'next/link';

// export default function ArticlePreview({
//   image,
//   bgColor,
//   title,
//   category,
//   authors,
//   tagText,
//   link,
//   textColor = 'white',
//   reverse = false,
// }) {
//   const backgroundColorMap = {
//     pink: '#ff2070',
//     violet: '#9381FF',
//     yellow: '#FFCC01',
//     green: '#B1FA63',
//     black: '#000000',
//   };

//   const resolvedBgColor = backgroundColorMap[bgColor] || '#ff2070';

//   const textColorMap = {
//     white: 'text-white',
//     black: 'text-black',
//     pink: 'text-[#ff1468]',
//     violet: 'text-[#9381FF]',
//     yellow: 'text-[#FFCC01]',
//     green: 'text-[#B1FA63]',
//   };

//   const resolvedTextColor = textColorMap[textColor] || 'text-white';

//   const layoutClass = reverse ? 'md:flex-row-reverse' : 'md:flex-row';

//   return (
//     <Link href={link} className="block w-full">
//       <div className={`flex flex-col ${layoutClass} w-full h-auto bg-black cursor-pointer`}>

//         {/* Блок с изображением */}
//         <div className="relative w-full md:w-1/2 aspect-square">
//           <img
//             src={image}
//             alt="Article image"
//             className="absolute w-full h-full object-cover"
//           />
//           <div className="absolute top-0 left-0 px-3 py-1 h-[45px] bg-[#ff1468] flex items-center justify-center">
//             <span className="text-white text-lg">{tagText}</span>
//           </div>
//         </div>

//         {/* Блок с текстом */}
//         <div
//           className="relative w-full md:w-1/2 aspect-square p-6 flex items-start justify-center"
//           style={{ backgroundColor: resolvedBgColor }}
//         >
//           <div className={`flex flex-col gap-6 max-w-[690px] ${resolvedTextColor}`}>
//             {/* Категория — шрифт label */}
//             <div className={`text-sm uppercase font-label ${resolvedTextColor}`}>
//               {category}
//             </div>

//             {/* Заголовок — шрифт title (YFFRARETRIAL-EctoBold) */}
//             <p className={`font-title text-[24px] md:text-[38px] lg:text-[48px] leading-tight ${resolvedTextColor}`}>
//               {title}
//             </p>

//             {/* Авторы — шрифт по умолчанию */}
//             <p className={`text-base md:text-lg ${resolvedTextColor}`}>
//               {authors}
//             </p>
//           </div>
//         </div>

//       </div>
//     </Link>
//   );
// }
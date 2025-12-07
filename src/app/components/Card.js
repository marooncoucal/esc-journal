'use client';

import React from 'react';
import Link from 'next/link';

export default function Card({
  image,
  title,
  description,
  tag,
  link,
  hoverTextColor,
  hoverOverlayColor,
  blendMode = 'overlay', // значение по умолчанию
}) {
  // Классы цвета текста по ховеру
  const hoverColorClass = {
    pink: 'group-hover:text-[#ff1468]',
    violet: 'group-hover:text-[#9381FF]',
    green: 'group-hover:text-[#B1FA63]',
    yellow: 'group-hover:text-[#FFCC01]',
  }[hoverTextColor] || 'group-hover:text-[#ff1468]';

  // Цветной слой для наложения
  const overlayColorMap = {
    pink: 'bg-[#ff1468]',
    violet: 'bg-[#9381FF]',
    green: 'bg-[#B1FA63]',
    yellow: 'bg-[#FFCC01]',
  };

  const overlayClass = overlayColorMap[hoverOverlayColor] || 'bg-[#ff1468]';

  return (
    <Link href={link} className="block w-full max-w-[360px] group">
      <div className="relative w-full h-auto bg-black overflow-hidden cursor-pointer transition hover:opacity-90">

        {/* Верхнее изображение */}
        <div
          className="w-full aspect-square bg-cover bg-center relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Цветной полупрозрачный оверлей с эффектом наложения */}
          <div
            className={`absolute inset-0 hidden group-hover:block transition-all duration-300 pointer-events-none ${overlayClass}`}
            style={{ mixBlendMode: blendMode }}
          />

          {/* Тег */}
          <div className="absolute top-0 left-0 bg-[#ff1468] text-[11px] sm:text-[13px] text-white font-medium leading-none p-0 m-0">
            <span className="block px-2 py-1">{tag}</span>
          </div>
        </div>

        {/* Текстовый блок */}
        <div className="pt-4 pb-8 space-y-2">
          <p className={`text-white font-yf-giga font-bold text-[18px] leading-[20px] sm:text-[24px] sm:leading-[26px] transition-colors ${hoverColorClass}`}>
            {title}
          </p>
          <div className={`text-white text-[10px] leading-[12px] sm:text-[12px] sm:leading-[14px] font-semibold transition-colors ${hoverColorClass}`}>
            {description}
          </div>
        </div>

      </div>
    </Link>
  );
}

// 'use client';

// import React from 'react';
// import Link from 'next/link';

// export default function Card({ image, title, description, tag, link, hoverTextColor, hoverOverlayColor }) {
//   const hoverColorClass = {
//     pink: 'group-hover:text-[#ff1468]',
//     violet: 'group-hover:text-[#9381FF]',
//     green: 'group-hover:text-[#B1FA63]',
//     yellow: 'group-hover:text-[#FFCC01]',
//   }[hoverTextColor] || 'group-hover:text-[#ff1468]';

//   const overlayColorMap = {
//     pink: 'bg-[#ff1468]',
//     violet: 'bg-[#9381FF]',
//     green: 'bg-[#B1FA63]',
//     yellow: 'bg-[#FFCC01]',
//   };

//   const overlayClass = overlayColorMap[hoverOverlayColor] || 'bg-[#ff1468]';

//   return (
//     <Link href={link} className="block w-full max-w-[360px] group">
//       <div className="relative w-full h-auto bg-black overflow-hidden cursor-pointer transition hover:opacity-90">

//         {/* Верхнее изображение */}
//         <div
//           className="w-full aspect-square bg-cover bg-center relative"
//           style={{ backgroundImage: `url(${image})` }}
//         >
//           {/* Цветной полупрозрачный оверлей по ховеру */}
//           <div
//             className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none ${overlayClass}`}
//           />

//           {/* Тег */}
//           <div className="absolute top-0 left-0 bg-[#ff1468] text-[11px] sm:text-[13px] text-white font-medium leading-none p-0 m-0">
//             <span className="block px-2 py-1">{tag}</span>
//           </div>
//         </div>

//         {/* Текстовый блок */}
//         <div className="p-4 space-y-2">
//           <p className={`text-white text-[13px] font-medium leading-snug transition-colors ${hoverColorClass}`}>
//             {title}
//           </p>
//           <div className={`text-white text-[8px] font-medium transition-colors ${hoverColorClass}`}>
//             {description}
//           </div>
//         </div>

//       </div>
//     </Link>
//   );
// }
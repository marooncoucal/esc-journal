"use client";

import Image from "next/image";
import React from "react";

export default function MainBlock({
  isVideo,
  backgroundImage,
  title,
  description,
}) {
  // const isVideo = backgroundImage.endsWith(".mp4") || backgroundImage.endsWith(".webm");
  return (
    <div className="w-full h-[100svh] md:h-screen relative">
      <div className="ImageVideo absolute inset-0 overflow-hidden">
        {isVideo == 'yes' ? (
            <iframe
              src={backgroundImage}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
              allowFullScreen
              className="absolute top-0 left-0 h-full aspect-[16/9]"
              style={{ transformOrigin: "center center" }}
            />
        ) : (
          <Image
            src={backgroundImage}
            fill
            alt="title"
            className="object-cover aspect-[16/9] h-full object-center"
          />
        )}
      </div>
      <div className="TextCont relative z-10 pb-34 left-4 right-4 md:left-[61px] md:w-[674px] h-full flex flex-col justify-end items-start gap-[4px]">
        <p className="font-yf-ecto font-medium text-white text-[48px] leading-[49px] md:text-[75px] md:leading-[76px]">
          {title}
        </p>
        <p className="text-white text-base md:text-lg leading-[21px]">
          {description}
        </p>
        <div className="inline-flex h-[30px] items-center">
          <div className="text-white underline text-[17px] leading-[25.5px] font-medium cursor-pointer">
            Читать далее
          </div>
        </div>
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
  );
}

// export default function MainBlock() {
//   return (
//     <div className="w-full h-full">
//       <div className="relative w-full min-h-[840px] bg-[url(/3840-2160-2.png)] bg-cover bg-center">
//         <div className="absolute left-4 right-4 md:left-[61px] md:w-[674px] bottom-10 flex flex-col items-start gap-[22px]">
//           <p className="font-medium text-white text-[32px] md:text-[50px] leading-tight">
//             НОСИМОЕ ИСКУССТВО И ЭСТЕТИКА БЕЗ ПРАВИЛ
//           </p>

//           <p className="text-white text-base md:text-lg leading-[21px]">
//             Почему дизайн костюма на самом деле является синтезом изобразительности
//           </p>

//           <div className="inline-flex h-[30px] items-center">
//             <div className="text-white underline text-[17px] leading-[25.5px] font-medium cursor-pointer">
//               Читать далее
//             </div>
//           </div>
//         </div>

//         {/* Кнопка фильтра
//         <div className="absolute bottom-5 right-5 w-[41px] h-[42px] bg-[#ff1468] flex items-center justify-center">
//           <img
//             src={Image_URL +"/faders-horizontal.svg"}
//             alt="Filter icon"
//             className="w-[33px] h-[33px]"
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// }

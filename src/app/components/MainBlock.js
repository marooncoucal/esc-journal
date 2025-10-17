'use client';

import React from 'react';

export default function MainBlock({ backgroundImage, title, description }) {
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

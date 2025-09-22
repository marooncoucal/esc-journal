// 'use client';

// import { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const pathname = usePathname(); // Получаем текущий путь

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1180);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const menuItems = [
//     { label: 'Успех или провал', href: '/uspex_ili_proval' },
//     { label: 'Диалоги поколений', href: '/dialogi_pokolenij' },
//     { label: 'Нераскрытые таланты', href: '#' },
//     { label: 'Жизнь после диплома', href: '#' },
//     { label: 'О нас', href: '#' },
//   ];

//   return (
//     <div className="bg-transparent fixed top-0 left-0 w-full z-10">
//       <div className="w-full h-20 bg-black flex items-center justify-between px-5">
//         <Link href="/" passHref>
//           <div className="cursor-pointer">
//             <Image
//               src="/logo.svg"
//               alt="Logo"
//               width={isMobile ? 80 : 125}
//               height={isMobile ? 35 : 48}
//             />
//           </div>
//         </Link>

//         {!isMobile ? (
//           <div className="flex items-center gap-[62px] whitespace-nowrap">
//             {menuItems.map(({ label, href }, index) => {
//               const isActive = pathname === href;
//               return (
//                 <Link href={href} key={index}>
//                   <div
//                     className={`font-medium text-[17px] leading-[25.5px] tracking-[-0.32px] transition-colors duration-300 cursor-pointer 
//                     ${isActive ? 'text-[#FF1468]' : 'text-white hover:text-[#FF1468]'}`}
//                   >
//                     {label}
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         ) : (
//           <button onClick={() => setIsOpen(!isOpen)}>
//   <div
//     className={`transition-transform duration-300 ease-in-out ${
//       isOpen ? 'rotate-45' : 'rotate-0'
//     }`}
//   >
//     <Image src="/burger.svg" alt="Menu" width={24} height={24} />
//   </div>
// </button>
//         )}
//       </div>

//       {/* Мобильное меню */}
//       {isMobile && isOpen && (
//         <div className="bg-black text-white px-5 py-4 flex flex-col gap-4">
//         {menuItems.map(({ label, href }, index) => {
//   const isActive = pathname === href;
//   return (
//     <Link href={href} key={index}>
//       <div
//         onClick={() => setIsOpen(false)} // <-- Закрываем меню
//         className={`font-medium text-[17px] transition-colors duration-300 cursor-pointer 
//         ${isActive ? 'text-[#FF1468]' : 'hover:text-[#FF1468] active:text-[#FF1468]'}`}
//       >
//         {label}
//       </div>
//     </Link>
//   );
// })}
//         </div>
//       )}
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1180);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { label: 'Успех или провал', href: '/uspex_ili_proval' },
    { label: 'Диалоги поколений', href: '/dialogi_pokolenij' },
    { label: 'Нераскрытые таланты', href: '/neraskrytye_talanty' },
    { label: 'Жизнь после диплома', href: '/zhizn_posle_diploma' },
    { label: 'О нас', href: '#' },
  ];

  return (
    <div className="bg-transparent fixed top-0 left-0 w-full z-10">
      <div className="w-full h-20 bg-black flex items-center justify-between px-5">
        <Link href="/" passHref>
          <div className="cursor-pointer">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={isMobile ? 80 : 125}
              height={isMobile ? 35 : 48}
            />
          </div>
        </Link>

        {!isMobile ? (
          <div className="flex items-center gap-[62px] whitespace-nowrap">
            {menuItems.map(({ label, href }, index) => {
              const isActive = pathname === href;
              return (
                <Link href={href} key={index}>
                  <div
                    className={`font-menu text-[17px] leading-[25.5px] tracking-[-0.32px] transition-colors duration-300 cursor-pointer relative
                      ${isActive ? 'text-[#FF1468] underline underline-offset-4' : 'text-white hover:text-[#FF1468]'}`}
                  >
                    {label}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <div
              className={`transition-transform duration-300 ease-in-out ${
                isOpen ? 'rotate-90' : 'rotate-0'
              }`}
            >
              <Image src="/burger.svg" alt="Menu" width={24} height={24} />
            </div>
          </button>
        )}
      </div>

      {/* Мобильное меню */}
      {isMobile && isOpen && (
        <div className="bg-black text-white px-5 py-4 flex flex-col gap-4">
          {menuItems.map(({ label, href }, index) => {
            const isActive = pathname === href;
            return (
              <Link href={href} key={index}>
                <div
                  onClick={() => setIsOpen(false)}
                  className={`font-menu text-[17px] transition-colors duration-300 cursor-pointer relative
                    ${isActive ? 'text-[#FF1468] underline underline-offset-4' : 'hover:text-[#FF1468] active:text-[#FF1468]'}`}
                >
                  {label}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

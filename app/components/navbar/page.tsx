'use client'
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isScrolled = scrollPosition > 0;

  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];

  const logoPath = isScrolled ? "/logo-um.png" : "/logo-um1.png";

  return (
    <nav
      className={`fixed inset-x-0 lg:px-40 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-24 pl-1 px-8 mx-auto max-w-screen-xl">
        <div>
          <Image src={logoPath} alt="logo" width={120} height={120} className="h-24 w-24 md:h-32 md:w-32" />
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <FiX className="w-8 h-8 text-black" onClick={closeMenu} />
          ) : (
            <FiMenu className={`w-8 h-8 ${isScrolled ? "text-black" : "text-white"}`} onClick={toggleMenu}  />
          )}
        </div>
        <ul
          className={`hidden md:flex space-x-4 text-lg font-semibold ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {menuLinks.map((menu, i) => (
            <li
              key={i}
              className={`px-2 hover:text-red-500 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              <a href={menu.link} onClick={closeMenu}>
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50">
          <div className="flex flex-col items-center justify-center h-screen">
            <ul className="flex flex-col items-center space-y-8 text-white text-2xl font-semibold">
              {menuLinks.map((menu, i) => (
                <li key={i}>
                  <a href={menu.link} onClick={closeMenu}>
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="absolute top-0 right-0 m-4">
              <FiX className="w-8 h-8 text-white" onClick={closeMenu} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}










// 'use client'
// import React, { useEffect, useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentPosition = window.pageYOffset;
//       setScrollPosition(currentPosition);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const isScrolled = scrollPosition > 0;

//   const menuLinks = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "#about" },
//     { name: "Services", link: "#services" },
//     { name: "Portfolio", link: "#portfolio" },
//     { name: "Contact", link: "#contact" },
//   ];

//   const logoPath = isScrolled ? "/logo-um.png" : "/logo-um1.png";

//   return (
//     <nav
//       className={`fixed inset-x-0 lg:px-40 transition-all duration-500 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="flex justify-between items-center h-24 pl-1 px-8 mx-auto max-w-screen-xl">
//         <div>
//           <Image src={logoPath} alt="logo" width={120} height={120} />
//         </div>
//         <div className="md:hidden">
//           {isMenuOpen ? (
//             <FiX className="w-8 h-8" onClick={closeMenu} />
//           ) : (
//             <FiMenu className="w-8 h-8 text-white" onClick={toggleMenu}  />
//           )}
//         </div>
//         <ul
//           className={`hidden md:flex space-x-4 text-lg font-semibold ${
//             isMenuOpen ? "" : "hidden"
//           }`}
//         >
//           {menuLinks.map((menu, i) => (
//             <li
//               key={i}
//               className={`px-2 hover:text-red-500 ${
//                 isScrolled ? "text-black" : "text-white"
//               }`}
//             >
//               <a href={menu.link} onClick={closeMenu}>
//                 {menu.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50">
//           <div className="flex flex-col items-center justify-center h-screen">
//             <ul className="flex flex-col items-center space-y-8 text-white text-2xl font-semibold">
//               {menuLinks.map((menu, i) => (
//                 <li key={i}>
//                   <a href={menu.link} onClick={closeMenu}>
//                     {menu.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <div className="absolute top-0 right-0 m-4">
//               <FiX className="w-8 h-8 text-white" onClick={closeMenu} />
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }














// 'use client';
// import React, { useEffect, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import Image from "next/image";

// export default function Navbar() {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentPosition = window.pageYOffset;
//       setScrollPosition(currentPosition);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const isScrolled = scrollPosition > 0;

//   const menuLinks = [
//     { name: "Home", link: "#home" },
//     { name: "About", link: "#about" },
//     { name: "Services", link: "#services" },
//     { name: "Portfolio", link: "#portfolio" },
//     { name: "Contact", link: "#contact" },
//   ];

//   const logoPath = isScrolled ? "/logo-um.png" : "/logo-um1.png";

//   return (
//     <div
//       className={`fixed inset-x-0 lg:px-40 transition-all duration-500 ${
//         isScrolled ? "bg-white shadow-lg" : "bg-transparent"
//       }`}
//     >
//       <div className="flex justify-around items-center gap-10 max-w-screen-xl h-24 mx-8">
//         <div className="sm:pr-1">
//           <Image src={logoPath} alt="logo" width={120} height={120} />
//         </div>
//         <div className="md:hidden pl-24">
//           <FiMenu className="w-8 h-8" />
//         </div>
//         <ul className="hidden md:flex space-x-4 lg:pl-96 text-lg font-semibold">
//           {menuLinks.map((menu, i) => (
//             <li
//               key={i}
//               className={`px-2 hover:text-red-500 ${
//                 isScrolled ? "text-black" : "text-white"
//               }`}
//             >
//               <a href={menu.link}>{menu.name}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }











// 'use client';

// import Image from "next/image"
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FiMenu } from "react-icons/fi";

// export default function Navbar() {
//   const [open, setopen] = useState(false);
//   const menuLinks: any = [
//     { name: "Home", link: '#home' },
//     { name: "About", link: '#about' },
//     { name: "Services", link: '#services' },
//     { name: "Portfolio", link: '#portfolio' },
//     { name: "Contact", link: '#contact' },
//   ]

//   return (
//     <div className="fixed lg:px-40">
//       <div className="flex justify-around items-center gap-10 w-full h-24">

//         <div className="sm:pr-1">
//           <Image src="/logo-um1.png" alt="logo" width={120} height={120}></Image>
//         </div>

//         <div className="md:hidden pl-24 fill-black">
//           <FiMenu className="w-8 h-8" />
//         </div>

//         <ul className="hidden md:flex space-x-4 lg:pl-96 text-white text-lg font-semibold">
//           {menuLinks?.map((menu: any, i: any) => (
//             <li key={i} className='px-2 hover:text-red-500'>
//               <a href={menu?.link}>{menu?.name}</a>
//             </li>

//           ))}
//         </ul>

//       </div>
//     </div>
//   )
// }
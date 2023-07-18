import Image from "next/image";
import TypingAnimation from "../typeanimation/page";
import { FiChevronsDown } from "react-icons/fi";

export default function Home() {
  return (
    <section id="home">
      <div className="bg-[url('/u4.jpg')] h-screen">
        <div className="md:space-y-6 py-16 md:py-32 space-y-3">
          <div className="flex items-center justify-center mt-28 lg:mt-4">
            <div className="flex justify-center items-center bg-gray-600 bg-opacity-50 rounded-full w-52 h-52 md:w-52 md:h-52">
              <img className="rounded-full w-48 h-48 md:w-48 md:h-48 drop-shadow-3xl shadow-cyan-500/50"
                src="/usamamalik2.jpg" alt="usama" />
            </div>
          </div>
          <div className="flex justify-center items-center -ml-6 tracking-widest space-x-1 md:space-x-3 px-16 font-bold">
            <p className="text-white text-3xl md:text-4xl">USAMA</p>
            <p className="text-red-500 text-3xl md:text-4xl">MALIK</p>
          </div>
          <div className="flex justify-center items-center -ml-2 space-x-1 md:space-x-2">
            <p className="text-white text-center text-lg md:text-2xl font-semibold">I'm a</p>
            <div className="flex justify-center items-center text-white text-lg md:text-2xl font-semibold ml-2 overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}>
              <TypingAnimation />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button><FiChevronsDown className="text-white animate-bounce w-8 h-8 mt-24 md:mt-20" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}




// import Image from "next/image"
// import TypingAnimation from "../typeanimation/page";
// import { FiChevronsDown } from "react-icons/fi";


// export default function Home() {
//   return (
//     <section id="home">
//       <div className="bg-[url('/u4.jpg')] h-screen">
//         <div className="md:space-y-8 py-32">
//           <div className="flex items-center justify-center">
//             <div className="flex justify-center items-center bg-gray-600 bg-opacity-50 rounded-full w-28 h-28 md:w-52 md:h-52">
//               <img className=" rounded-full w-24 h-24 md:w-48 md:h-48 drop-shadow-3xl shadow-cyan-500/50"
//                 src="/usamamalik2.jpg" alt="usama" ></img>
//             </div>
//           </div>
//           <div className="flex justify-center items-center -ml-6 tracking-wides space-x-3 font-bold ">
//             <p className="text-white text-2xl md:text-4xl">USAMA</p>
//             <p className="text-red-500 text-2xl md:text-4xl">MALIK</p>
//           </div>
//           <div className="flex justify-center -ml-2 items-center space-x-2" >
//             <p className="text-white text-center text-2xl font-semibold">I'm a</p>
//             <div className="flex justify-center items-center text-white text-2xl font-semibold ml-2 overflow-hidden"
//               style={{ transformStyle: "preserve-3d" }}>
//               <TypingAnimation />
//             </div>
//           </div>
//           <div className="flex justify-center items-center">
//             <button><FiChevronsDown className="text-white animate-bounce w-8 h-8 mt-20" /></button>
//           </div>
//         </div>


//       </div>
//     </section>
//   )
// }
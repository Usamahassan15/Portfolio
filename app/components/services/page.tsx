import React from "react";
import { FaRegLightbulb, FaLaptopCode } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/Si";
import { ImFacebook2 } from "react-icons/im";

export default function Services() {
  return (
    <section id="services">
      <div className="max-w-screen-xl px-6 py-8 mx-auto sm:px-6 sm:py-12 lg:px-40">
        <div>
          <h2 className="text-xl font-bold text-red-500 sm:text-xl pt-16 py-3">SERVICES</h2>

          <h2 className="text-xl text-black font-extrabold sm:text-3xl pb-16">Quality Services</h2>
        

        <ul className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <li>
            <div  className="block overflow-hidden group h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105 drop-shadow-2xl">
              <div>
                <FaRegLightbulb className="w-10 h-16 fill-red-500" />
              </div>
              <div>
                <p className="font-bold text-lg">Creative Design</p>
              </div>
              <div>
                <p className="text-lg leading-loose">
                  Web design is a similar process of creation, with the intention of presenting...
                </p>
              </div>             
            </div>
          </li>
          <li>
          <div className="block overflow-hidden group h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105 drop-shadow-2xl">
              <div>
                <FaLaptopCode className="w-10 h-16 fill-red-500" />
              </div>
              <div>
                <p className="font-bold text-lg">Web Development</p>
              </div>
              <div>
                <p className="text-lg leading-loose">
                  Web design is a similar process of creation, with the intention of presenting...
                </p>
              </div>             
            </div>
          </li>

          <li>
          <div className="block overflow-hidden group h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105 drop-shadow-2xl">
              <div>
                <RiAppleLine className="w-10 h-16 fill-red-500" />
              </div>
              <div>
                <p className="font-bold text-lg">Brand Identity</p>
              </div>
              <div>
                <p className="text-lg leading-loose">
                  Web design is a similar process of creation, with the intention of presenting...
                </p>
              </div>             
            </div>
          </li>

          <li>
          <div className="block overflow-hidden group h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105 drop-shadow-2xl">
              <div>
                <SiAdobephotoshop className="w-10 h-16 fill-red-500" />
              </div>
              <div>
                <p className="font-bold text-lg">Adobe Photoshop</p>
              </div>
              <div>
                <p className="text-lg leading-loose">
                  Web design is a similar process of creation, with the intention of presenting...
                </p>
              </div>             
            </div>
          </li>

          <li>
          <div className="block overflow-hidden group h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105 drop-shadow-2xl">
              <div>
                <SiAdobeillustrator className="w-10 h-16 fill-red-500" />
              </div>
              <div>
                <p className="font-bold text-lg">Adobe Illustrator</p>
              </div>
              <div>
                <p className="text-lg leading-loose">
                  Web design is a similar process of creation, with the intention of presenting...
                </p>
              </div>             
            </div>
          </li>

          <li>
          <div className="block overflow-hidden group h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105 drop-shadow-2xl">
              <div>
                <ImFacebook2 className="w-10 h-16 fill-red-500" />
              </div>
              <div>
                <p className="font-bold text-lg">Social Media</p>
              </div>
              <div>
                <p className="text-lg leading-loose">
                  Web design is a similar process of creation, with the intention of presenting...
                </p>
              </div>             
            </div>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
}



// import React from "react";
// import { FaRegLightbulb, FaLaptopCode } from "react-icons/fa";
// import { RiAppleLine } from "react-icons/ri";
// import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/Si";
// import { ImFacebook2 } from "react-icons/im";

// export default function Services() {
//   return (
//     <div id="services">
//       <div className="pl-6 md:pl-48 pt-8 md:pt-28 space-y-2">
//         <h1 className="text-xl text-red-500 font-semibold">SERVICES</h1>
//         <h1 className="font-extrabold text-3xl">Quality Services</h1>
//       </div>

//       <div className="space-y-12 grid sm:grid-cols-2 gap-4 lg:block md:block">
//         <div className="px-6 md:px-12 lg:px-48 flex flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-12 pt-8 md:pt-24">
//           <div className="bg-white w-full md:w-72 lg:w-96 h-80 md:h-96 lg:h-96 pl-4 md:pl-8 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
            // <div>
            //   <FaRegLightbulb className="w-10 h-16 fill-red-500" />
            // </div>
            // <div>
            //   <p className="font-bold text-lg">Creative Design</p>
            // </div>
            // <div>
            //   <p className="text-lg leading-loose">
            //     Web design is a similar process of creation, with the intention of presenting...
            //   </p>
            // </div>
//           </div>

//           <div className="bg-white w-full md:w-72 lg:w-96 h-80 md:h-96 lg:h-96 pl-4 md:pl-8 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
//             <div>
//               <FaLaptopCode className="w-16 h-16 fill-red-500" />
//             </div>
//             <div>
//               <p className="font-bold text-lg">Web Development</p>
//             </div>
//             <div>
//               <p className="text-lg leading-loose">
//                 Web design is a similar process of creation, with the intention of presenting...
//               </p>
//             </div>
//           </div>

//           <div className="bg-white w-full md:w-72 lg:w-96 h-80 md:h-96 lg:h-96 pl-4 md:pl-8 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
//             <div>
//               <RiAppleLine className="w-16 h-16 fill-red-500" />
//             </div>
//             <div>
//               <p className="font-bold text-lg">Brand Identity</p>
//             </div>
//             <div>
//               <p className="text-lg leading-loose">
//                 Web design is a similar process of creation, with the intention of presenting...
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="px-6 md:px-12 lg:px-48 flex flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-12">
//           {/* Add remaining code here */}
//           <div className="bg-white w-full md:w-72 lg:w-96 h-80 md:h-96 lg:h-96 pl-4 md:pl-8 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
//             <div>
//               <SiAdobephotoshop className="w-16 h-16 fill-red-500" />
//             </div>
//             <div>
//               <p className="font-bold text-lg">Adobe Photoshop</p>
//             </div>
//             <div>
//               <p className="text-lg leading-loose">
//                 Web design is a similar process of creation, with the intention of presenting...
//               </p>
//             </div>
//           </div>

//           <div className="bg-white w-full md:w-72 lg:w-96 h-80 md:h-96 lg:h-96 pl-4 md:pl-8 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
//             <div>
//               <SiAdobeillustrator className="w-16 h-16 fill-red-500" />
//             </div>
//             <div>
//               <p className="font-bold text-lg">Adobe Illustrator</p>
//             </div>
//             <div>
//               <p className="text-lg leading-loose">
//                 Web design is a similar process of creation, with the intention of presenting...
//               </p>
//             </div>
//           </div>

//           <div className="bg-white w-full md:w-72 lg:w-96 h-80 md:h-96 lg:h-96 pl-4 md:pl-8 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
//             <div>
//               <ImFacebook2 className="w-16 h-16 fill-red-500" />
//             </div>
//             <div>
//               <p className="font-bold text-lg">Social Media</p>
//             </div>
//             <div>
//               <p className="text-lg leading-loose">
//                 Web design is a similar process of creation, with the intention of presenting...
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










// import React from "react";
// import { FaRegLightbulb, FaLaptopCode } from "react-icons/fa";
// import { RiAppleLine } from "react-icons/ri";
// import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/Si";
// import { ImFacebook2 } from "react-icons/im";

// export default function Services() {
//   return (
//     <div id="services">
//       <div className="pl-6 md:pl-48 pt-8 md:pt-28 space-y-2">
//         <h1 className="text-xl text-red-500 font-semibold">SERVICES</h1>
//         <h1 className="font-extrabold text-3xl">Quality Services</h1>
//       </div>

//       <div className="space-y-12 grid sm:grid-cols-2 gap-4 lg:block md:block">
//         <div className="px-6 md:px-48 flex flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-12 pt-8 md:pt-24">
//           <div className="bg-white w-full md:w-72 h-96 pl-4 md:pl-12 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
//             <div>
//               <FaRegLightbulb className="w-10 h-16 fill-red-500" />
//             </div>
//             <div>
//               <p className="font-bold text-lg">Creative Design</p>
//             </div>
//             <div>
//               <p className="text-lg leading-loose max-w-[190px]">
//                 Web design is a similar process of creation, with the intention of presenting...
//               </p>
//             </div>
//           </div>

//           <div className="bg-white w-full md:w-72 h-96 pl-4 md:pl-12 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
//             <div>
//               <FaLaptopCode className="w-16 h-16 fill-red-500" />
//             </div>
//             <div>
//               <p className="font-bold text-lg">Web Development</p>
//             </div>
//             <div>
//               <p className="text-lg leading-loose max-w-[190px]">
//                 Web design is a similar process of creation, with the intention of presenting...
//               </p>
//             </div>
//           </div>

//           <div className="bg-white w-full md:w-72 h-96 pl-4 md:pl-12 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
//             <div>
//               <RiAppleLine className="w-16 h-16 fill-red-500" />
//             </div>
//             <div>
//               <p className="font-bold text-lg">Brand Identity</p>
//             </div>
//             <div>
//               <p className="text-lg leading-loose max-w-[190px]">
//                 Web design is a similar process of creation, with the intention of presenting...
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="px-6 md:px-48 flex flex-wrap md:flex-nowrap space-y-6 md:space-y-0 md:space-x-12">
//           {/* Add remaining code here */}
//           <div className="bg-white w-full md:w-72 h-96 pl-4 md:pl-12 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
//             <div>
//               <SiAdobephotoshop className="w-16 h-16 fill-red-500" />
//             </div>
//             <div>
//               <p className="font-bold text-lg">Adobe Photoshop</p>
//             </div>
//             <div>
//               <p className="text-lg leading-loose max-w-[190px]">
//                 Web design is a similar process of creation, with the intention of presenting...
//               </p>
//             </div>
//           </div>

//           <div className="bg-white w-full md:w-72 h-96 pl-4 md:pl-12 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
//             <div>
//               <SiAdobeillustrator  className="w-16 h-16 fill-red-500" />
//             </div>
//             <div>
//               <p className="font-bold text-lg">Adobe Illustrator</p>
//             </div>
//             <div>
//               <p className="text-lg leading-loose max-w-[190px]">
//                 Web design is a similar process of creation, with the intention of presenting...
//               </p>
//             </div>
//           </div>

//           <div className="bg-white w-full md:w-72 h-96 pl-4 md:pl-12 pt-4 md:pt-16 space-y-6 drop-shadow-2xl">
//             <div>
//               <ImFacebook2 className="w-16 h-16 fill-red-500" />
//             </div>
//             <div>
//               <p className="font-bold text-lg">Social Media</p>
//             </div>
//             <div>
//               <p className="text-lg leading-loose max-w-[190px]">
//                 Web design is a similar process of creation, with the intention of presenting...
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








// import { FaRegLightbulb } from "react-icons/Fa";
// import { FaLaptopCode } from "react-icons/Fa";
// import { RiAppleLine } from "react-icons/ri";
// import { SiAdobephotoshop } from "react-icons/Si";
// import { SiAdobeillustrator } from "react-icons/Si";
// import { ImFacebook2  } from "react-icons/Im";



// export default function Services(){
//     return(
//     <section id="services">
//         <div>
//             <div className="pl-48 pt-36 space-y-4">
//                 <h1 className=" text-xl text-red-500 font-semibold">SERVICES</h1>
//                 <h1 className="font-extrabold text-3xl">Quality Services</h1>
//             </div>

//             <div className="space-y-12">
//                 <div className="px-48 flex space-x-12 pt-24">


//                     <div className="bg-white w-72 h-96 pl-12 pt-16 space-y-6 drop-shadow-2xl">
//                         <div><FaRegLightbulb className="w-10 h-16 fill-red-500"/></div>
//                         <div> <p className="font-bold text-lg">Creative Design</p></div>
//                         <div><p className=" text-1xl leading-loose max-w-[190px]">Web design is a similar process of creation, with the intention of <br/> presenting...</p></div>
                       
//                     </div>


//                     <div className="bg-white w-72 h-96 pl-12 pt-16 space-y-6 drop-shadow-2xl">
//                         <div><FaLaptopCode className="w-16 h-16  fill-red-500"/></div>
//                         <div><p className="font-bold text-lg">Web Development</p></div>
//                         <div><p className="text-1xl leading-loose max-w-[190px]">Web design is a similar process of creation, with the intention of presenting...</p></div>
//                     </div>
//                     <div className="bg-white w-72 h-96 pl-12 pt-16 space-y-6 drop-shadow-2xl">
//                         <div><RiAppleLine className="w-16 h-16  fill-red-500"/></div>
//                         <div><p className="font-bold text-lg">Brand Identity</p></div>
//                         <div><p className="text-1xl leading-loose max-w-[190px]">Web design is a similar process of creation, with the intention of presenting...</p></div>
//                     </div>
//                 </div>

//                 <div className="px-48 flex space-x-12">


//                     <div className="bg-white w-72 h-96 pl-12 pt-16 space-y-6 drop-shadow-2xl">
//                         <div><SiAdobephotoshop className="w-16 h-16  fill-red-500"/></div>
//                         <div> <p className="font-bold text-lg">Adobe Photoshop</p></div>
//                         <div><p className=" text-1xl leading-loose max-w-[190px]">Web design is a similar process of creation, with the intention of <br/> presenting...</p></div>
                       
//                     </div>


//                     <div className="bg-white w-72 h-96 pl-12 pt-16 space-y-6 drop-shadow-2xl">
//                         <div><SiAdobeillustrator className="w-16 h-16  fill-red-500"/></div>
//                         <div><p className="font-bold text-lg">Adobe Illustrator</p></div>
//                         <div><p className="text-1xl leading-loose max-w-[190px]">Web design is a similar process of creation, with the intention of presenting...</p></div>
//                     </div>
//                     <div className="bg-white w-72 h-96 pl-12 pt-16 space-y-6 drop-shadow-2xl">
//                         <div><ImFacebook2  className="w-16 h-16  fill-red-500"/></div>
//                         <div><p className="font-bold text-lg">Social Media</p></div>
//                         <div><p className="text-1xl leading-loose max-w-[190px]">Web design is a similar process of creation, with the intention of presenting...</p></div>
//                     </div>
//                 </div>

               
            
                        
//             </div>  

//             <div className="flex px-48 py-24 text-lg space-x-2">
//                 <p className="font-semibold">Are you interested in working with me?</p>
//                 <button className="font-bold text-red-500"> Let's started now</button>
//             </div>
                
//         </div>
//     </section>
//     )
// }
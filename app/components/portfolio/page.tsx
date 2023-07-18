import Image from "next/image";


export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="max-w-screen-xl px-6 py-8 mx-auto sm:px-6 sm:py-12 lg:px-40">
        <header>
          <h2 className="text-xl font-bold text-red-500 sm:text-xl pt-16 py-3">PORTFOLIO</h2>

          <h2 className="text-xl text-black font-extrabold sm:text-3xl pb-16">Featured Works</h2>
        </header>

        <div className="flex pt-16 font-medium justify-start lg:space-x-8 space-x-4">
          <button className="text-red-500">All</button>
          <button className="hover:text-red-500">Design</button>
          <button className="hover:text-red-500">Branding</button>
          <button className="hover:text-red-500">Photography</button>
        </div>

        <ul className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <li>
            <a href="#" className="block overflow-hidden group">
              <Image
                src="/u5.jpg"
                alt=""
                width={100}
                height={100}
                className="h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>

          <li>
            <a href="#" className="block overflow-hidden group">
              <Image
                src="/u6.jpg"
                alt=""
                width={100}
                height={100}
                className="h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>

          <li>
            <a href="#" className="block overflow-hidden group">
              <Image
                src="/u7.jpg"
                alt=""
                width={100}
                height={100}
                className="h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>

          <li>
            <a href="#" className="block overflow-hidden group">
              <Image
                src="/u8.jpg"
                alt=""
                width={100}
                height={100}
                className="h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>

          <li>
            <a href="#" className="block overflow-hidden group">
              <Image
                src="/u9.jpg"
                alt=""
                width={100}
                height={100}
                className="h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>

          <li>
            <a href="#" className="block overflow-hidden group">
              <Image
                src="/u10.jpg"
                alt=""
                width={100}
                height={100}
                className="h-48 sm:h-72 md:h-76 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}









// export default function Portfolio(){
//     return(
//         <section id="portfolio">
//   <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-40">
//     <header>
//       <h2 className="text-xl font-bold text-red-500 sm:text-xl pt-16 py-3">
//       PORTFOLIO
//       </h2>

//       <h2 className="text-xl text-black font-extrabold sm:text-3xl pb-16">
//       Featured Works
//       </h2>
//     </header>

//     <div className="flex pt-16 font-medium justify-start lg:space-x-8 space-x-4">
//         <button className="text-red-500">All</button>
//         <button className="hover:text-red-500">Design</button>
//         <button className="hover:text-red-500">Branding</button>
//         <button className="hover:text-red-500">Photography</button>
//     </div>

//     <ul className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
//       <li>
//         <a href="#" className="block overflow-hidden group">
//           <Image
//             src="/u5.jpg"
//             alt=""
//             className="h-[220px] w-[289px] object-cover transition duration-500 group-hover:scale-105 sm:h-[220px]"
//           />

//         </a>
//       </li>

//       <li>
//         <a href="#" className="block overflow-hidden group">
//           <Image
//             src="/u6.jpg"
//             alt=""
//             className="h-[220px] w-[289px] object-cover transition duration-500 group-hover:scale-105 sm:h-[220px]"
//           />
//         </a>
//       </li>

//       <li>
//         <a href="#" className="block overflow-hidden group">
//           <Image
//             src="/u7.jpg"
//             alt=""
//             className="h-[220px] w-[289px] object-cover transition duration-500 group-hover:scale-105 sm:h-[220px]"
//           />
//         </a>
//       </li>

//       <li>
//         <a href="#" className="block overflow-hidden group">
//           <Image
//             src="/u8.jpg"
//             alt=""
//             className="h-[220px] w-[289px] object-cover transition duration-500 group-hover:scale-105 sm:h-[220px]"
//           />
//         </a>
//       </li>

//       <li>
//         <a href="#" className="block overflow-hidden group">
//           <Image
//             src="/u9.jpg"
//             alt=""
//             className="h-[220px] w-[289px] object-cover transition duration-500 group-hover:scale-105 sm:h-[220px]"
//           />
//         </a>
//       </li>

//       <li>
//         <a href="#" className="block overflow-hidden group">
//           <Image
//             src="/u10.jpg"
//             alt=""
//             className="h-[220px] w-[289px] object-cover transition duration-500 group-hover:scale-105 sm:h-[220px]"
//           />
//         </a>
//       </li>
//     </ul>
//   </div>
// </section>
//     )
// }








// import Image from "next/image"
// export default function Portfolio(){
//     return(
//     <section id="portfolio"> 
//         <div className="bg-slate-50">
//                 <div className="flex lg:pl-48 pt-32 pl-7">
//                     <h1 className="text-red-500 font-semibold text-xl">PORTFOLIO</h1>
//                 </div>
//                 <div className="flex lg:pl-48 pl-7">
//                     <h1 className="text-black-500 font-extrabold text-3xl pt-2">Featured Works</h1>
//                 </div>
//                 <div className="flex lg:pl-48 pl-7 pt-16 font-medium justify-start lg:space-x-8 space-x-4">
//                     <button className="text-red-500">All</button>
//                     <button className="hover:text-red-500">Design</button>
//                     <button className="hover:text-red-500">Branding</button>
//                     <button className="hover:text-red-500">Photography</button>
//                 </div>
//         <div className="space-y-12 lg:px-32 sm:px-6 sm:grid-cols-2 md:px-20 md:grid-cols-3 xl:px-48 pb-40 pt-8">
//             <div className="flex space-x-12">
//                 <Image src="/u5.jpg" height={60} width ={289} alt="watch" className="w-[289px] h-60" ></Image>
//                 <Image src="/u6.jpg" height={60} width ={289} alt="laptop" className="w-[289px] h-60"></Image>
//                 <Image src="/u7.jpg" height={60} width ={289} alt="home" className="w-[289px] h-60"></Image>
//             </div>

//             <div className="flex space-x-12">
//                 <Image src="/u8.jpg" height={60} width ={289} alt="ipad"className="w-[289px] h-60"></Image>
//                 <Image src="/u9.jpg" height={60} width ={289} alt="meta"className="w-[289px] h-60"></Image>
//                 <Image src="/u10.jpg" height={60} width ={289} alt="coding"className="w-[289px] h-60"></Image>
//             </div>
//         </div>




//     <div className="bg-black flex justify-center py-24 space-x-36">
//         <div className="text-white space-y-4">
//             <p className="text-4xl font-bold">450</p>
//             <p className="text-1xl font-semibold">Happy clients</p>
//          </div>

//          <div className="text-white space-y-4">
//             <p className="text-4xl font-bold">546</p>
//             <p className="text-1xl font-semibold">Projects Finished</p>
//          </div>

//          <div className="text-white space-y-4">
//             <p className="text-4xl font-bold">120</p>
//             <p className="text-1xl font-semibold">Awards Won</p>
//          </div>

//          <div className="text-white space-y-4">
//             <p className="text-4xl font-bold">466</p>
//             <p className="text-1xl font-semibold">Drinked Pepsi</p>
//          </div>
//     </div>
// </div>
//     </section>
//     )
// }
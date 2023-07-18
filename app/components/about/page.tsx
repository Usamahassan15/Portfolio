import Image from "next/image";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { ImMail } from "react-icons/im";
import { BsFillCalendarDayFill } from "react-icons/Bs"; 
import { IoGameController } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { ImMobile } from "react-icons/im";  
import TypingAnimation from "../typeanimation/page";

export default function About() {
  return (
    <section id="about">
      <div className="bg-slate-50">
        <div className="pt-24 pb-24 space-y-4 pl-6 lg:pl-48">
          <h1 className="text-xl text-red-500 font-semibold">BIOGRAPHY</h1>
          <h2 className="font-extrabold text-3xl">About Me</h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="p-6 lg:pl-48">
            <Image className="" src="/u1.jpg" alt="usama" width={310} height={410}></Image>
          </div>

          <div className="flex flex-col justify-center p-6 lg:pr-48">
            <h3 className="flex justify-center items-center text-black font-semibold lg:text-2xl text-xl">I'm Usama Malik and</h3>
            <div
              className="flex justify-center items-center text-red-500 lg:text-2xl text-xl font-semibold overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <TypingAnimation />
            </div>

            <div className="flex justify-center items-center p-8">
              <h3 className="max-w-lg leading-loose md:text-lg">
                Hi! My name is Usama Malik. I am a Web Developer, and I'm very passionate and dedicated to my work. With 1 years experience as a
                professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.
              </h3>
            </div>

            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0">
              <ul className="flex flex-col space-y-3 lg:space-x-8">
                <li className="flex items-center lg:ml-8">
                  <FaBirthdayCake className="w-5 h-6 fill-red-500" />
                  <p className="font -normal text-lg ml-2">Birthday: 24</p>
                </li>
                <li className="flex items-center">
                  <IoLocationSharp className="w-5 h-6 fill-red-500" />
                  <p className="font -normal text-lg ml-2">Location: Rawalpindi-Pakistan</p>
                </li>
                <li className="flex items-center">
                  <MdCastForEducation className="w-5 h-6 fill-red-500" />
                  <p className="font -normal text-lg ml-2">Study: Air University</p>
                </li>
                <li className="flex items-center">
                  <ImMail className="w-5 h-6 fill-red-500" />
                  <p className="font -normal text-lg ml-2">Mail: Hassanusama@gmail.com</p>
                </li>
              </ul>

              <ul className="flex flex-col space-y-3 lg:space-x-8">
                <li className="flex items-center lg:ml-8">
                  <BsFillCalendarDayFill className="w-5 h-6 fill-red-500" />
                  <p className="font -normal text-lg ml-2">Age: 24</p>
                </li>
                <li className="flex items-center">
                  <IoGameController className="w-5 h-6 fill-red-500" />
                  <p className="font -normal text-lg ml-2">Interests: Playstation</p>
                </li>
                <li className="flex items-center">
                  <FaUserGraduate className="w-5 h-6 fill-red-500" />
                  <p className="font -normal text-lg ml-2">Degree: IT</p>
                </li>
                <li className="flex items-center">
                  <ImMobile className="w-5 h-6 fill-red-500" />
                  <p className="font -normal text-lg ml-2">Phone: 03175817400</p>
                </li>
              </ul>
            </div>

            <div className="lg:ml-8 ml-2 pt-4 pb-40">
              <button className="w-44 h-12 text-white font-semibold bg-red-500">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









// import Image from "next/image"
// import { FaBirthdayCake } from "react-icons/Fa";
// import { IoLocationSharp } from "react-icons/io5";
// import { MdCastForEducation } from "react-icons/Md";
// import { ImMail } from "react-icons/Im";
// import { BsCalendarDayFill } from "react-icons/Bs";
// import { IoGameController  } from "react-icons/io5";
// import { FaUserGraduate } from "react-icons/Fa";
// import { BsFillTelephoneForwardFill } from "react-icons/Bs";
// import TypingAnimation from "../typeanimation/page";

// export default function About(){
//     return(
        
//         <section id ='about'>

//         <div className="bg-slate-50">       
//         <div className="pt-24 pb-24 space-y-4 pl-6 lg:pl-48">
//             <h1 className="text-xl text-red-500 font-semibold">BIOGRAPHY</h1>
//             <h2 className="font-extrabold text-3xl">About Me</h2>
//         </div>
             
//             <div className="p-6 lg:pl-48">
//                 <Image className="" src="/u1.jpg" alt="usama" width={310} height={410}></Image>  
//             </div>

          
//                 <div className="flex-col justify-items-center ">
//                     <h3 className="flex justify-center items-center text-black font-semibold lg:text-2xl text-xl">I'm Usama Malik and</h3>
//                     <div className="flex justify-center items-center text-red-500 lg:text-2xl text-xl font-semibold overflow-hidden"
//                         style={{transformStyle: "preserve-3d"}}>
//                         <TypingAnimation />
//                     </div>

//             <div className="flex justify-center items-center tracking-wide p-8">
//                 <h3 className="max-w-lg leading-loose md:text-2xl ">
//                     Hi! My name is Usama Malik. I am a Web Developer, and I'm very passionate and dedicated to my work.
//                     With 1 years experience as a professional Web developer, I have acquired the skills and knowledge 
//                     necessary to make your project a success.
//                 </h3>
//             </div>
//             </div>

//             <div className="flex-col space-x-8 >
//                 <ul>
//                     <li>
//                         <span className="flex ml-10 text-2xl"> <p className="font -normal text-lg ">Birthday: </p> 
//                         <p className="font-normal text-lg ml-2 ">24</p></span>
//                         <FaBirthdayCake className="w-5 h-6 -mt-[30px]  fill-red-500"/>            
//                     </li>
//                     <li>
//                         <span className="flex ml-10 text-2xl"> <p className="font -normal text-lg ">Age: </p> 
//                         <p className="font-normal text-lg ml-2 ">24</p></span>
//                         <BsCalendarDayFill className="w-5 h-6 -mt-[30px]  fill-red-500"/>            
//                     </li>
//                     <li>
//                     <span className="flex ml-10 text-2xl"> <p className="font -normal text-lg ">Location:</p> 
//                     <p className="font-normal text-lg ml-2 ">Rawalpindi-Pakistan</p></span>
//                     <IoLocationSharp className="w-5 h-6 -mt-[30px]  fill-red-500"/>            
//                 </li>
//                  <li>
//                  <span className="flex ml-10 text-2xl"> <p className="font -normal text-lg ">Interests:</p> 
//                  <p className="font-normal text-lg ml-2 ">Playstation,</p></span>
//                  <IIoGameController className="w-5 h-6 -mt-[30px]  fill-red-500"/>            
//              </li>
//                  <li>
//                  <span className="flex ml-10 text-2xl"> <p className="font -normal text-lg ">Study:</p> 
//                  <p className="font-normal text-lg ml-2 ">Air University</p></span>
//                  <MdCastForEducation  className="w-5 h-6 -mt-[30px]  fill-red-500"/>            
//              </li>
//                  <li>
//                  <span className="flex ml-10 text-2xl"> <p className="font -normal text-lg ">Degree:</p> 
//                  <p className="font-normal text-lg ml-2 ">IT</p></span>
//                  <FaUserGraduate className="w-5 h-6 -mt-[30px]  fill-red-500"/>            
//              </li>
//                 <li>
//                 <span className="flex ml-10 text-2xl"> <p className="font -normal text-lg ">Mail:</p> 
//                 <p className="font-normal text-lg ml-2 ">Hassanusama@gmail.com</p></span>
//                 <ImMail className="w-5 h-6 -mt-[30px]  fill-red-500"/>            
//             </li>
//               <li>
//               <span className="flex ml-10 text-2xl"> <p className="font -normal text-lg ">Phone:</p> 
//               <p className="font-normal text-lg ml-2 ">03175817400</p></span>
//               <BsFillTelephoneForwardFill className="w-5 h-6 -mt-[30px]  fill-red-500"/>            
//           </li>
//                     </ul>
//                     </div>
            

//                 <div className="m-2 pt-4 pb-40">
//                         <button className="w-44 h-12 text-white font-semibold bg-red-500">Download CV</button>
//                 </div>
           
//                 </div>
//         </section>
        
//     )
// }



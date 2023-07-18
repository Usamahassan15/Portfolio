import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa"; 
import { BsYoutube } from "react-icons/Bs";
import { IoLogoTiktok } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black py-10 px-6 md:py-20 md:px-48">
      <h1 className="text-white mb-4 md:mb-0">© 2020-2023. All rights reserved.</h1>
      <div className="flex space-x-6">
        <Link href="https://www.facebook.com/usamamalik001?mibextid=ZbWKwL">
          <GrFacebookOption className="w-7 h-6 fill-white" />
        </Link>
        <Link href="https://twitter.com/UsamaMalik115?t=2iFcl9kUFzNnhkhLeEAj0g&s=091">
          <FaTwitter className="w-7 h-6 fill-white" />
        </Link>
        <Link href="https://www.youtube.com/@usamamalik15">
          <BsYoutube className="w-7 h-6 fill-white" />
        </Link>
        <Link href="https://www.tiktok.com/@usamamalik152?_t=8aeLAa5kQLf&_r=1">
          <IoLogoTiktok className="w-7 h-6 fill-white" />
        </Link>
        <Link href="https://instagram.com/usamamalik911?igshid=YmMyMTA2M2Y=">
          <RiInstagramFill className="w-7 h-6 fill-white" />
        </Link>
      </div>
    </div>
  );
}









// import { GrFacebookOption } from "react-icons/gr";
// import { BsTwitter } from "react-icons/Bs";
// import { SiYoutube } from "react-icons/Si";
// import { IoLogoTiktok } from "react-icons/io5";
// import { RiInstagramFill } from "react-icons/ri";
// import Link from "next/link";

// export default function Footer() {
//     return (
//         <div className="flex items-center justify-between bg-black py-20 px-40">
//             <h1 className="text-white">© Copyright 2020-2023. All rights are reserved.</h1>
//             <div className="flex space-x-6">
//                 <Link href="https://www.facebook.com/usamamalik001?mibextid=ZbWKwL">
//                     <GrFacebookOption className="w-7 h-6 fill-white" />
//                 </Link>

//                 <Link href="https://twitter.com/UsamaMalik115?t=2iFcl9kUFzNnhkhLeEAj0g&s=091">
//                     <BsTwitter className="w-7 h-6 fill-white" />
//                 </Link>

//                 <Link href="https://www.youtube.com/@usamamalik15">
//                     <SiYoutube className="w-7 h-6 fill-white" />
//                 </Link>

//                 <Link href="https://www.tiktok.com/@usamamalik152?_t=8aeLAa5kQLf&_r=1">
//                     <IoLogoTiktok className="w-7 h-6 fill-white" />
//                 </Link>


//                 <Link href="https://instagram.com/usamamalik911?igshid=YmMyMTA2M2Y=">
//                     <RiInstagramFill className="w-7 h-6 fill-white" />
//                 </Link>
//             </div>

//         </div>
//     )
// }
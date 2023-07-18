import Image from "next/image"
import Home from "./components/home/page"
import About from "./components/about/page"
import Services from "./components/services/page"
import Portfolio from "./components/portfolio/page"
import Contact from "./components/contact/page"



export default function HomePage(){
  return(
    <div>
      <Home/>
      <About />
      <div className="bg-slate-50"><Services /></div>
      <Portfolio />
      <Contact />
    </div>
    
  )
}
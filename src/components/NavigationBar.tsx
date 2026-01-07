import { Link, useLocation, useNavigate } from "react-router";
import { navigations } from "../data/navigations";
import React, { type MouseEventHandler } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const NavigationBar = () => {
  
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [navClose, setNavClose] = React.useState(false);
     

    const handleCloseNav = () => {
       setNavClose(prev => !prev);
    }

    const handleNavClick: MouseEventHandler<HTMLButtonElement> = (e) =>  {
       navigate(e.currentTarget.id);
    }

    useGSAP(() => {
       const tl = gsap.timeline();
       tl.fromTo('.nav-label', { translateX: '40px'}, { translateX: '30px' })
       .fromTo('.nav-icon', { scale: 0 }, { scale: 1 }, '-=.5')   
      
    }, { dependencies: [pathname] }) 

    return (
      <>
        <div className="mb-5 px-2 container mx-auto xl:mb-0">
         <div className="flex justify-between border-b-2 border-b-gray-light py-3 md:items-center md:py-5 2xl:py-8">
           <div className="flex items-center gap-2 xl:gap-4 xl:text-lg 2xl:text-xl">
             <img className="w-5 xl:w-6 2xl:w-8" src="assets/bean-dark.png" alt="" />
             <p className="font-bold">Coffee On Top</p>
           </div>

           <div className="hidden md:flex gap-7 items-center text-sm 2xl:text-base 2xl:gap-10">
              {/* <Link className="text-orange font-bold" to="/">Home</Link>
              <Link className="bg-white py-1 hover:px-4 rounded-full transition-all duration-200 hover:shadow-solid" to="/">About</Link>
              <Link to="/">Menu</Link>
              <Link to="/">Contact</Link> */}

              {
                navigations.map(({ name, path }, index) => {
                  return <Link key={index} className={`${pathname === path ? "text-orange font-bold" : "hover:shadow-solid hover:px-4 hover:text-[.92em]"} bg-white py-1 rounded-full transition-all duration-200 `} to={path}>{name}</Link>
                })
              }
           </div>

           <button className={"bg-brown-dark cursor-pointer rounded-full md:flex md:items-center md:px-4 md:py-2 gap-2 transition-all md:rounded-lg md:hover:scale-[.9] md:hover:shadow-solid lg:px-6 xl:px-8"}>
            <img className="p-3 w-10 md:p-0 md:w-5 xl:w-4 2xl:w-5" src="assets/pin-light.png" alt="" />
            <p className="hidden md:inline-block md:text-white md:text-sm md:font-semibold 2xl:text-base">Visit Us</p>
           </button>
         </div>

        </div>
        <div className={`fixed left-1/2 ${navClose ? "bottom-0 translate-y-full" : "bottom-4"} -translate-x-1/2 shadow-solid w-11/12 transition duration-500 bg-white rounded-full py-4 flex justify-center items-center z-20 pt-6 max-w-[20em] xs:max-w-100 md:hidden`}>
          <button onClick={handleCloseNav} className={`absolute top-0 bg-white -translate-y-[60%] px-2 shadow-soft rounded-md`}><img src="assets/chevron-dark.png" className={`${navClose ? "-rotate-90" : "rotate-90"}  p-2 w-8 transition-all duration-500`} alt="" /></button>
          
          {
            navigations.map(({ name, inactiveImage, activeImage, path  }, index) => {
              return (
                  <button id={path} onClick={handleNavClick} key={index} className={`flex ${ pathname === path ? "bg-orange-light pr-20 pl-4 xs:pr-24" : "px-4" } relative py-2 rounded-full items-center transition-all duration-500 xs:px-5`}> 
                   <img className={`w-5 ${ pathname === path && "nav-icon" } xs:w-5`} src={`assets/${pathname === path ? activeImage : inactiveImage}`} alt="" />
                   {
                    pathname === path && (<p className="text-orange absolute nav-label text-sm font-bold xs:text-base">{ name }</p>)
                   }
                  </button>
              )
            })
          }
          
        </div>
      </>
    )
}

export default NavigationBar; 
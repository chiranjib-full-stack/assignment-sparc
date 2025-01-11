import React, { useState } from "react";
import { MainLogo } from "../../assets/utils/header.assets";
import DropdownMenu from "../utils/DropdownMenu";
import { IoIosArrowDropdown, IoIosArrowDroprightCircle } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import MenuLists from "../utils/MenuLists";

const Header = () => {
// ****mobile view logic
  const [mobileMenuActive, setMobileMenuActive] = useState(false)
  const mobileMenuClickHandeler = () => {
        setMobileMenuActive(false)
  }

// ****desktop view logic
  const [activeDropdown, setActiveDropdown] = useState(null);
  const serviceMenuItems = [
    { label: "menu1", href: "/services/service1", paragraph: " this is demo paragraph", icon: "" },
    { label: "menu2", href: "/services/service2", paragraph: " this is demo paragraph", icon: "" },
    { label: "menu3", href: "/services/service3", paragraph: " this is demo paragraph", icon: "" },
    { label: "menu4", href: "/services/service4", paragraph: " this is demo paragraph", icon: "" },
  ];

// Helper functions to manage active dropdown
  const handleMouseEnter = (menu) => {
    if (activeDropdown !== menu) setActiveDropdown(menu);
  };

  const handleMouseLeave = () => setActiveDropdown(null);

  return (
   <header className="sticky top-0 z-50">
     <nav>
      <div className="h-16 md:h-20 w-full px-4 md:px-20 bg-custom-navbar-gradient relative  ">
        <div className="w-full h-full grid grid-cols-[3fr_1fr] md:grid-cols-[1fr_3fr]">
          {/* Main Logo */}
          <div className="w-full h-full md:px-10 md:py-6 flex justify-center items-center">
            <img src={MainLogo} alt="main_logo" className="md:w-[200px] h-auto" />
          </div>
          <div>




            {/* mobile view */}
            <div className="md:hidden w-full  h-full flex justify-center items-center  ">
              <button onClick={() => setMobileMenuActive(prev => !prev)} > <HiMenu className={`text-2xl text-white font-bold transition-transform duration-300 ${mobileMenuActive ? '-rotate-180' : ''}`} /></button>
              <div className={`${mobileMenuActive ? ' translate-x-0 opacity-100' : ' -translate-x-full opacity-0'} transition-transform duration-2500   w-full h-screen bg-custom-navbar-gradient  absolute z-50 left-0 top-full `}>
               {/* menu list*/}
                  <div className="flex flex-col mt-6 px-6">
                  <div onClick={()=>setMobileMenuActive(false)} className="flex justify-end  text-xl font-bold text-gray-700">X</div>
                  <MenuLists isMobile={true}/>
                  </div>
              </div>
            </div>







            {/* desktop view */}
            <div className=" md:flex hidden  w-full h-full  justify-end items-center px-4">
              {/* menu list*/}
               <MenuLists isMobile={false} />
            </div>
          </div>

        </div>
      </div>
    </nav>
   </header>
  );
};

export default Header;

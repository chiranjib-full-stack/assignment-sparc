import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import DropdownMenu from "./DropdownMenu";

const MenuLists = ({ isMobile = true }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const serviceMenuItems = [
    { label: "menu1", href: "/services/service1", paragraph: "This is demo paragraph", icon: "" },
    { label: "menu2", href: "/services/service2", paragraph: "This is demo paragraph", icon: "" },
    { label: "menu3", href: "/services/service3", paragraph: "This is demo paragraph", icon: "" },
    { label: "menu4", href: "/services/service4", paragraph: "This is demo paragraph", icon: "" },
  ];

  // Handle menu open/close logic
  const handleMouseEnter = (menu) => {
    if (isMobile) {
      // Toggle menu for mobile on click
      setActiveDropdown(activeDropdown === menu ? null : menu);
      console.log(activeDropdown)
    } else {
      // Open menu for desktop on hover
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      // Close menu on hover out for desktop
      setActiveDropdown(null);
    }
  };

  return (
    <div className="h-full flex">
      <ul className="flex flex-col md:flex-row gap-8 md:gap-8 px-2 md:px-4 text-white w-full md:h-full h-auto  items-center justify-center">
        {/* Services */}
        <li
          className={`md:h-full md:w-full flex items-center gap-2 cursor-pointer ${isMobile ? "relative text-xl" : ""}`}
          {...(isMobile
            ? { onClick: () => handleMouseEnter("services") }
            : {
                onMouseEnter: () => handleMouseEnter("services"),
                onMouseLeave: handleMouseLeave,
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") handleMouseEnter("services");
                },
                tabIndex: 0,
              })}
        >
          <span className={`${activeDropdown === "services" ? "text-[#29ABE2] " : ""}`}>Services</span>
          <IoIosArrowDropdown
            className={`w-4 h-4 transition-transform duration-300 ${
              activeDropdown === "services" ? "rotate-180 text-[#29ABE2]" : "rotate-0"
            }`}
          />
        {/* Dropdown Menu */}
        {activeDropdown === "services" &&  isMobile ? 
           
           <DropdownMenu
             menuItems={serviceMenuItems}
             isOpen={activeDropdown === "services"}
             position="-right-28 top-full"
             customWidth="w-[calc(320%)]"
           />
         
          :  <DropdownMenu

          menuItems={serviceMenuItems}
          isOpen={activeDropdown === "services"}
          position="left-50 top-[72px]"
          customWidth="w-[25dvw]"
        />
       }
        </li>
        {activeDropdown === "services" &&  isMobile ? 
           
           <li className="h-[200px]"> </li>
         
          : null }

        {/* Domains */}
        <li
          className={`md:h-full md:w-full flex items-center gap-2 cursor-pointer ${isMobile ? "relative text-xl " : ""}`}
          {...(isMobile
            ? { onClick: () => handleMouseEnter("domains") }
            : {
                onMouseEnter: () => handleMouseEnter("domains"),
                onMouseLeave: handleMouseLeave,
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") handleMouseEnter("domains");
                },
                tabIndex: 0,
              })}
        >
          <span className={`${activeDropdown === "domains" ? "text-[#29ABE2]" : ""}`}>Domains</span>
          <IoIosArrowDropdown
            className={`w-4 h-4 transition-transform duration-300 ${
              activeDropdown === "domains" ? "rotate-180 text-[#29ABE2]" : "rotate-0"
            }`}
          />
          
        {/* Dropdown Menu */}
        {activeDropdown === "domains" &&  isMobile ? 
           
           <DropdownMenu
             menuItems={serviceMenuItems}
             isOpen={activeDropdown === "domains"}
            position="-right-28 top-full"
             customWidth="w-[calc(320%)]"
           />
         
          : <DropdownMenu
          menuItems={serviceMenuItems}
          isOpen={activeDropdown === "domains"}
          position="right-20  top-[72px]"
          customWidth="w-[25dvw]"
        />
       }
        </li>
        {activeDropdown === "domains" &&  isMobile ? 
           
           <li className="h-[200px]"> </li>
         
          : null }

        {/* About */}
        <li
          className={`md:h-full md:w-full flex items-center gap-2 cursor-pointer ${isMobile ? "relative text-xl" : ""}`}
          {...(isMobile
            ? { onClick: () => handleMouseEnter("about") }
            : {
                onMouseEnter: () => handleMouseEnter("about"),
                onMouseLeave: handleMouseLeave,
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") handleMouseEnter("about");
                },
                tabIndex: 0,
              })}
        >
          <span className={`${activeDropdown === "about" ? "text-[#29ABE2]" : ""}`}>About</span>
          <IoIosArrowDropdown
            className={`w-4 h-4 transition-transform duration-300 ${
              activeDropdown === "about" ? "rotate-180 text-[#29ABE2]" : "rotate-0"
            }`}
          />
          {/* Dropdown Menu */}
          {activeDropdown === "about" &&  isMobile ? 
           
           <DropdownMenu
             menuItems={serviceMenuItems}
             isOpen={activeDropdown === "about"}
             position="-right-32 top-full"
             customWidth="w-[calc(425%)]"
           />
         
          : <DropdownMenu
          menuItems={serviceMenuItems}
          isOpen={activeDropdown === "about"}
          position="right-10 top-[72px]"
          customWidth="w-[25dvw]"
        />
       }
        </li>
        {activeDropdown === "about" &&  isMobile ? 
           
           <li className="h-[200px]"> </li>
         
          : null }

        {/* Contact */}
        <li className="cursor-pointer">
          <span className={`hover:text-[#29ABE2] ${isMobile ? " text-xl" : ""}`}>Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuLists;

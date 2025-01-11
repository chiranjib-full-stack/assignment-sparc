<ul className="flex gap-8 px-4 text-white h-full  relative">
                {/* Services */}
                <li
                  className=" h-full flex items-center gap-2 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleMouseEnter("services");
                  }}
                  tabIndex={0}
                >
                  <span className={`${activeDropdown === "services" ? "text-[#29ABE2]" : ""}`}>Services</span>
                  <IoIosArrowDropdown
                    className={`w-4 h-4 transition-transform duration-300 text-center ${activeDropdown === "services" ? "rotate-180 text-[#29ABE2]" : "rotate-0"
                      }`}
                  />
                  <DropdownMenu

                    menuItems={serviceMenuItems}
                    isOpen={activeDropdown === "services"}
                    position="left-50 top-full"
                    customWidth="w-[30dvw]"
                  />
                </li>

                {/* Domains */}
                <li
                  className=" flex items-center gap-2 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("domains")}
                  onMouseLeave={handleMouseLeave}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleMouseEnter("domains");
                  }}
                  tabIndex={0}
                >
                  <span className={`${activeDropdown === "domains" ? "text-[#29ABE2]" : ""}`}>Domains</span>
                  <IoIosArrowDropdown
                    className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "domains" ? "rotate-180 text-[#29ABE2]" : "rotate-0"
                      }`}
                  />
                  <DropdownMenu
                    menuItems={serviceMenuItems} // Replace with domain-specific menu items if needed
                    isOpen={activeDropdown === "domains"}
                    position="right-0  top-full"
                    customWidth="w-[30dvw]"
                  />
                </li>

                {/* About */}
                <li
                  className="relative flex items-center gap-2 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleMouseEnter("about");
                  }}
                  tabIndex={0}
                >
                  <span className={`${activeDropdown === "about" ? "text-[#29ABE2]" : ""}`}>About</span>
                  <IoIosArrowDropdown
                    className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180 text-[#29ABE2] " : "rotate-0"
                      }`}
                  />
                  <DropdownMenu
                    menuItems={serviceMenuItems}
                    isOpen={activeDropdown === "about"}
                    position="right-0 top-full"
                    customWidth="w-[30dvw]"
                  />
                </li>

                {/* Contact */}
                <li className="relative flex items-center gap-2 cursor-pointer">
                  <span className="hover:text-[#29ABE2]">Contact</span>
                </li>
              </ul> 
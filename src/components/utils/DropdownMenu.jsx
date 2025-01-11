
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobeAmericas } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DropdownMenu = ({ menuItems ,isOpen= false,position="left-0 top-full" , customWidth="w-[calc(200%)]" }) => {



  // Animation Variants for Dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
   <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute ${position} h-[200px] md:h-[30dvh]  mt-2  ${customWidth} bg-white shadow-md rounded-md z-50 text-gray-700 overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent hover:scrollbar-thumb-[#29ABE2] scrollbar-thumb-rounded `}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
          >
            <ul className="w-full ">
              {menuItems.map((item, index) => (
                <li key={index}
                className="even:bg-[#f7fdff]"
                >
                  <NavLink
                    to={item.href}
                    className="w-full block px-4 py-2 hover:scale-[1.05] transition-transform duration-200 group"
                  >
                    <div className=" flex gap-4 justify-center items-center">
                    {item.icon? <div className="w-[40px] h-[40px] bg-gray-100 group-hover:bg-[#29ABE2] flex justify-center items-center rounded-[50%] flex-shrink-0 group-hover:text-white">{item.icon}</div>: <div className="w-[40px] h-[40px] bg-gray-100 group-hover:bg-[#29ABE2] flex justify-center items-center rounded-[50%] flex-shrink-0"><FaGlobeAmericas className="text-[#29ABE2] text-xl group-hover:text-white" />
                      </div> }
                    <div>
                    <h3 className="text-gray-700 group-hover:text-[#29ABE2]">{item.label}</h3>
                    <p className="text-sm mt-2">{item.paragraph}</p>
                    </div>
                    </div>
                    

                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DropdownMenu;

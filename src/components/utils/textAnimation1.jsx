import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedItems = () => {
  const items = [
    { h3: "Unlocking the Potential", p: "Where geospatial meets new age software technologies ." },
    { h3: "Empowering Insights", p: "Through power of geospatial & new age software technologies." },
    { h3: "Expandings Horizons", p: "With the power of geospatial & next-generation software technologies." },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  // Automatically cycle through items every 10 seconds (5s animation + 5s gap)
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 10000); // 10 seconds per cycle
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 relative h-64">
      {/* Render the current visible item */}
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center absolute ${
            index === visibleIndex ? "block" : "hidden"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === visibleIndex ? 1 : 0 }}
          transition={{
            duration: 5, // Animation duration (5 seconds)
          }}
        >
          <h3 className="text-3xl md:text-6xl text-[#29ABE2] font-semibold text-center">{item.h3}</h3>
          <p className="text-md md:2xl text-white font-semibold mt-2 md:mt-4 text-center">{item.p}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedItems;

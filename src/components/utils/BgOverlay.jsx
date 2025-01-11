import React, { useState, useEffect } from "react";

const BgOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Set a timeout to show the overlay after 2 seconds
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 2000); // 2 seconds delay for the fade-in effect

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute top-[0%] right-[0%] w-full h-full bg-black-300 transition-opacity duration-1000 ease-in-out ${
        showOverlay ? "opacity-20" : "opacity-0"
      }`}
    ></div>
  );
};

export default BgOverlay;

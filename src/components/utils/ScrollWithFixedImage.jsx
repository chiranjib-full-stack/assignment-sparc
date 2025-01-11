import React from "react";

const ScrollWithFixedImage = ({ img }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Fixed Image */}
      <div className="fixed inset-0 w-full h-[100dvh]">
        <img
          src={img} // Image passed as a prop
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-2xl md:text-4xl font-bold">Welcome to My Section</h1>
        <p className="text-sm md:text-lg text-center mt-2 max-w-[80%] md:max-w-[60%]">
          This content scrolls over the fixed background image with an overlay, making it visually engaging.
        </p>
      </div>
    </div>
  );
};

export default ScrollWithFixedImage;

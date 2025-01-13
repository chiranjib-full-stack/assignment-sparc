/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", //add ts & tsx for typescript
  ],
  theme: {
    extend: {

      backgroundImage: {
        'custom-navbar-gradient': 'linear-gradient(266.37deg, #23647F -20.37%, #1E1E1E 13.11%, #1E1E1E 81.78%, #21414E 115.55%)',
        'custom-hero-section-gradient': 'linear-gradient(266.37deg, #23647F -20.37%,rgb(15, 15, 15) 13.11%,rgb(14, 13, 13) 81.78%, #21414E 115.55%)',
         'custom-overlay-gradient': 'linear-gradient(0deg, rgba(17, 17, 17, 0.8) 0%, rgba(44, 40, 40, 0.8) 100%)',
         'custom-footer-gradient': 'linear-gradient(0deg, rgba(19, 18, 18, 0.96) 0%, rgba(143, 142, 142, 0.4) 100%)'
        
      },
      boxShadow: {
        '3d': '10px 10px 30px rgba(0, 0, 0, 0.15), -10px -10px 30px rgba(255, 255, 255, 0.1)', // Custom 3D shadow
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Defines the 'font-inter' utility
      },

    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    
      
    
  ],
}


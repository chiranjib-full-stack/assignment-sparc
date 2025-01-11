import React from 'react'

const ImageCard = ({img,text}) => {
  return (
    <div className=' border  w-[30dvw] h-[30dvw] md:w-[25dvw] md:h-[30dvh] lg:w-[20dvw] lg:h-[38dvh] shadow-lg border-gray-300  rounded-lg flex flex-col justify-center items-center group relative overflow-hidden transition-transform duration-1000 ease-in-out hover:scale-[0.9] '>
     {/* w-[200px] md:w-[250px] h-[180px] md:h-[220px] */}
     <div className=' w-full h-full  flex flex-col px-2 pt-2 items-center z-20'>
        <div className='w-[95%] overflow-hidden  rounded'>
         <img src={img} className='w-full h-full object-cover' alt={`${img}`} />
        </div>
     </div>
     <div className=' w-full h-full z-20 px-2 pt-2 pb-2'>
     <h3 className='text-center text-gray-600 tansition-transform duration-1000 ease-in-out group-hover:text-white'>{text}</h3>
     </div>
     {/* animation div */}
     
     <div className='w-full h-full bg-[#29ABE2]  absolute z-10 transition-all duration-1000 ease-in-out transform translate-y-full group-hover:translate-y-0  '>

     </div>
      
    </div>
    
  )
}

export default ImageCard
import React from 'react'
import { MdOutlineSatelliteAlt } from 'react-icons/md'
import { TiFlashOutline } from 'react-icons/ti'

const InfoCard = ({ icon,isIconSvg =false , title , subTitle , points}) => {
  return (
    <div className=' w-[100%] h-full flex flex-col border border-gray-100 p-4 rounded shadow-lg hover:shadow-3d hover:scale-[1.1] transition-transform duration-300 hover:cursor-pointer group'>
                <div className='w-[80px] h-[80px] p-2 rounded-[50%] bg-gray-200 text-[#29ABE2] group-hover:bg-[#29ABE2] group-hover:text-gray-200 hover:cursor-pointer flex justify-center items-center'>
                {
                  isIconSvg? <div
                  className="icon w-7 h-7"
                  dangerouslySetInnerHTML={{ __html: icon }}
                /> : <>{icon}</>
                }
                </div>
                
    
                <div className='mt-4'>
                  <h3 className='text-gray-700 font-bold group-hover:text-[#29ABE2]'>{title}</h3>
                  <p className='text-gray-600 text-sm mt-1'>{subTitle}</p>
                </div>
    
                <div className='mt-2'>
                  {points?.map((item,index)=>(
                    <p key={index} className='text-gray-600 mt-2 '>
                    <span><TiFlashOutline className='inline-block text-[#29ABE2]' /></span> {item}
                  </p>
                  ))}
                  
                </div>
              </div>
  )
}

export default InfoCard
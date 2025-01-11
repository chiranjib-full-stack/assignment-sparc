import React from 'react'

import { Logo, BgImg } from "../../assets/utils/footer.assets"
import { FaRegCopyright } from 'react-icons/fa6'
import { FaLinkedin, FaLongArrowAltRight } from 'react-icons/fa'


const Footer = () => {
  return (
    <>
     <div className='w-full h-full relative mt-20' >
      {/* over half */}
      <div className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 w-[80%] h-[10dvh] md:h-[15dvh] bg-white rounded-lg z-30 border border-gray-300 shadow-lg'>
      <div className='w-full h-full flex justify-between items-center px-2 md:px-6 group hover:bg-[#29ABE2] hover:text-white '>
        <div><h3 className=' md:text-2xl text-[#29ABE2] group-hover:text-white'>Make your idea come to life !</h3></div>
        <div> <button className='  md:text-2xl bg-[#29ABE2] text-white group-hover:border group-hover:border-white group-hover:text-white hover:scale-[1.1] px-2 py-1 rounded active:scale-[0.9] transition-transform duration-300' >Contact Us <span><FaLongArrowAltRight className='inline ml-1' /></span> </button></div>
      </div>
      </div>
      <div className='relative z-10'>
        {/*Footer Background */}
        <div className='footer w-full h-[80dvh] md:h-[60dvh] relative bg-custom-footer-gradient z-10'></div>
        <div className='absolute inset-0 z-0'>
          <img src={BgImg} alt="footerBgImage" className='w-full h-full object-cover ' />
        </div>
        {/*Footer Content*/}
        <div className='footer-content w-full mt-20  absolute inset-0 z-20 text-white flex flex-col justify-between'>
          <div className='flex flex-col md:flex-row px-4 gap-6 md:gap-10  md:px-10 mt-20'>
            <div className=''>
              <img src={Logo} alt="" />
              <h4 className='max-w-[280px] md:mt-2'>Strengthen your business strategies with MAPSCOPE's end-to-end digital transformation solutions.</h4>
            </div>
            <div>
              <h3 className='mb-2'>Contacts:</h3>
              <p>Phone:+91(674) 6629 301</p>
              <p>Email:info@mapscope.in</p>
              <p>Address:Infocity, Bhubaneswar, Odisha IN</p>
            </div>
            <div>
              <h3 className='mb-2'>Social:</h3>
              <FaLinkedin className='text-2xl' />
            </div>

          </div>
          <div className='flex justify-between px-10 py-1 border-t border-t-white'>
            <div><h6><FaRegCopyright className="inline" />
            Copyright 2024 MAPSCOPE Pvt. Ltd. All rights reserved.</h6></div>

            <div><h6>Terms & Conditions - Privecy Policy - F.A.Q</h6></div>
          </div>
        </div>
      </div>

     </div>

    </>
  )
}

export default Footer
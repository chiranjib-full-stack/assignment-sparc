import React from 'react'
import Header from '../components/header/Header.component'
import Footer from '../components/footer/Footer.component'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
  <>
    
   {/* <div className=" sticky top-0  md:top-0 z-50">
   <Header/>
   </div>
   <Outlet/>
   {/* <div className="w-full h-full absolute top-[64px] md:top-[72px] right-[0%] z-10">
   <Outlet/>
   </div> */}
   
   <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
   
    </> 
  )
}

export default Layout
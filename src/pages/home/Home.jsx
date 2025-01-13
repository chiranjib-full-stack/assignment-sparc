import React from 'react'
import MyScene from '../../components/utils/MyScene'
import AnimatedItems from '../../components/utils/textAnimation1'
import InfoCard from '../../components/utils/InfoCard'
import {GeoAiImg1,
  GeoAiImg2,
  GeoAiImg3, 
  BannerImg,
  EnvirImg,
  LandImg,
  ForestImg,
  MiningImg,
  AgrImg,
  UtilityImg,
  GovernanceImg,
  UrbanImg, 
  AboutImg} from "../../assets/utils/home.assets"
import { ReactTyped } from 'react-typed'
import { FaLongArrowAltRight } from 'react-icons/fa'
import ImageCard from '../../components/utils/ImageCard'

const Home = () => {
  const cardsIcon={
    card1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46a2.5 2.5 0 0 0-1.98 3a2.5 2.5 0 0 0-1.32 4.24a3 3 0 0 0 .34 5.58a2.5 2.5 0 0 0 2.96 3.08a2.5 2.5 0 0 0 4.91.05L12 20zM16 8V5c0-1.1.9-2 2-2m-6 10h4"></path>
                  <path d="M12 18h6a2 2 0 0 1 2 2v1M12 8h8m.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-4 5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></path>
                  <path d="M20.5 21a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-2-18a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></path>
                </g>
              </svg>`,
    card2:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-7 h-7 "><path fill="currentColor" d="M0 32c477.6 0 366.6 317.3 367.1 366.3L448 480h-26l-70.4-71.2c-39 4.2-124.4 34.5-214.4-37C47 300.3 52 214.7 0 32m79.7 46c-49.7-23.5-5.2 9.2-5.2 9.2c45.2 31.2 66 73.7 90.2 119.9c31.5 60.2 79 139.7 144.2 167.7c65 28 34.2 12.5 6-8.5c-28.2-21.2-68.2-87-91-130.2c-31.7-60-61-118.6-144.2-158.1"></path></svg>`,
    card3: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8 "><path fill="currentColor" d="M19 8a2 2 0 0 1 2 2v6.76c.61.55 1 1.35 1 2.24c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.89.39-1.69 1-2.24V10c0-1.1.9-2 2-2m0 1c-.55 0-1 .45-1 1v1h2v-1c0-.55-.45-1-1-1m-7-3.31l-5 4.5V18h7.1l-.1 1l.1 1H5v-8H2l10-9l4.4 3.96c-.51.44-.9 1.01-1.15 1.65z"></path></svg>`,
    card4: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46a2.5 2.5 0 0 0-1.98 3a2.5 2.5 0 0 0-1.32 4.24a3 3 0 0 0 .34 5.58a2.5 2.5 0 0 0 2.96 3.08a2.5 2.5 0 0 0 4.91.05L12 20zM16 8V5c0-1.1.9-2 2-2m-6 10h4"></path>
                  <path d="M12 18h6a2 2 0 0 1 2 2v1M12 8h8m.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-4 5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></path>
                  <path d="M20.5 21a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-2-18a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></path>
                </g>
              </svg>`,
  }
  return (
    <div className='w-full h-full z-50'>
      {/* herosection for three animation */}
      <section>
      <div className='w-full h-[90dvh]  bg-custom-hero-section-gradient z-10 relative'>
      <MyScene/>
      
      <div className='w-full h-full absolute z-30 top-[15%] left-[-2%]  md:left-[-10%] '>
        < AnimatedItems />
      </div>
      </div>
      </section >
      {/* why chose */}
      <section className='w-full h-full  px-2 md:px-20 py-2 flex flex-col mt-4 md:mt-20'>
        <div className='w-full  '>

          <h2 className='text-gray-700 text-2xl font-bold'> <span className='block text-lg font-medium text-[#29ABE2]'>Why Choose</span>MAPSCOPE ?</h2>
          <p className='text-gray-600'>Strengthen your business strategies with MAPSCOPE's end-to-end digital transformation solutions. Build a strong organisational data architecture with the integration of spatial and non-spatial data that guarantees safe organization, efficient workflows, and data-driven decision-making. With MAPSCOPE, embrace Next-Gen innovation at the intersection of process automation, AI/ML services, MIS and GIS integration, GNSS Solutions and sensor data on IoT platforms to advance your company.</p>
        </div>
        <div className='w-full h-full  grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 px-4 py-2 mt-8'>
          {/* card1 */}
         <InfoCard
         icon={cardsIcon.card1}
         isIconSvg={true}
         title={"Digital Transformation"}
         subTitle={"Enable digital transformation of environmental management through :"}
         points={["GIS Integration","Spatial Analytics","Cloud Migration","IoT Implementation"]}
         />
          {/* card2 */}
          <InfoCard
         icon={cardsIcon.card2}
         isIconSvg={true}
         title={"Digital Transformation"}
         subTitle={"Enable digital transformation of environmental management through :"}
         points={["GIS Integration","Spatial Analytics","Cloud Migration","IoT Implementation"]}
         />
         {/* card3 */}
          <InfoCard
         icon={cardsIcon.card3}
         isIconSvg={true}
         title={"Digital Transformation"}
         subTitle={"Enable digital transformation of environmental management through :"}
         points={["GIS Integration","Spatial Analytics","Cloud Migration","IoT Implementation"]}
         />
         {/* card4 */}
          <InfoCard
         icon={cardsIcon.card1}
         isIconSvg={true}
         title={"Digital Transformation"}
         subTitle={"Enable digital transformation of environmental management through :"}
         points={["GIS Integration","Spatial Analytics","Cloud Migration","IoT Implementation"]}
         />
      </div>
      </section >


      {/* incorp sec */}
      <section className='w-full h-full px-4 py-2  flex flex-col gap-4 md:grid md:grid-cols-[2fr_3fr] mt-4 mb-4 md:mb-0 md:mt-20 '>
      <div className='w-full h-full flex flex-col justify-center items-center md:px-10  '>
      <div className='w-full h-auto'>
           <div className='w-[80px] h-[80px] p-2 rounded-[50%] bg-gray-200 text-[#29ABE2] group-hover:bg-[#29ABE2] group-hover:text-gray-200 hover:cursor-pointer flex justify-center items-center'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 "><path fill="currentColor" d="M8.75 7a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM7 11.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M9.75 15a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"></path><path fill="currentColor" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25Zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></path></svg> 
           </div>
           </div>
           <div className='w-full'>
           <h2 className=' text-2xl md:text-4xl font-semibold text-gray-700 mt-2'>Incorporation of GeoAI
           </h2>
           </div>
           <p className='text-gray-600 text-xl mt-2'>Geo AI is the future! Where geospatial technologies and artificial intelligence converge, opening doors to boundless possibilities. Join the current global wave: Explore map data, unlock location-based insights, and make intelligent decisions!

</p>
           <div className='w-full text-start mt-4 text-[#29ABE2] text-lg'>
           <button className='px-2 py-1 hover:bg-[#29ABE2] hover:text-white  rounded active:scale-[0.9] transition-transform duration-300' >Learn  More <span><FaLongArrowAltRight className='inline ml-1' /></span> </button>
        </div>      
      </div>
      <div className='w-full h-full  flex flex-col gap-4'>
        <div className='w-full flex justify-center text-gray-700 text-2xl md:text-4xl font-semibold '  >
        <ReactTyped
        strings={[
          "GeoAI in <span style='color:#29ABE2;font-size: inherit'>Disaster Management </span> ",
          "GeoAI in <span style='color:#29ABE2;font-size: inherit'>Agriculture </span> ",
          "GeoAI in <span style='color:#29ABE2;font-size: inherit'>Urban Planing </span> ",
          "GeoAI in <span style='color:#29ABE2;font-size: inherit'>Global Collaboration </span> ",
          
        ]}
      typeSpeed={60}
      backSpeed={50}
      
      loop
    />
        </div>
        <div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 h-full mt-6 ">
      {/* First img */}
     <div className='flex flex-col gap-8'>
     <div
        className="w-80 h-64 bg-cover bg-center transition-transform duration-300 skew-y-1 hover:cursor-pointer hover:skew-y-0 hover:scale-[1.1] hover:-rotate-1  rotate-1 shadow-lg"
        style={{
          backgroundImage: `url('${GeoAiImg1}')`,
        }}
      ></div>

      {/* Second img */}
      <div
        className="w-26 h-64 bg-cover bg-center transition-transform duration-300 skew-x-1 -rotate-1 hover:cursor-pointer hover:skew-x-0 hover:scale-[1.1] hover:rotate-1 shadow-lg"
        style={{
          backgroundImage: `url('${GeoAiImg2}')`, 
        }}
      ></div>
     </div>

      {/* Third img */}
      <div
        className="w-64 h-44  bg-cover bg-center transition-transform duration-300 skew-y-1 hover:cursor-pointer hover:skew-y-0 hover:scale-[1.1] hover:-rotate-2 shadow-lg"
        style={{
          backgroundImage: `url('${GeoAiImg3}')`, 
        }}
      ></div>
    </div>
        </div>
      </div>
      </section>

     
      {/* welcome section  */}
      <section className='w-full md:h-[300px]  md:mt-20  relative  '  style={{ backgroundImage: `url(${BannerImg})`, backgroundSize:'cover', backgroundPosition: 'center',backgroundRepeat:'no-repeat'}}>
       <div className='w-full h-full bg-custom-overlay-gradient  grid grid-cols-1 md:grid-cols-2'>
        <div className='w-full h-full px-4 py-4 mt-4 md:px-20 flex flex-col '>
           <div className='w-full h-auto'>
           <div className='w-[80px] h-[80px] p-2 rounded-[50%] bg-gray-200 text-[#29ABE2] group-hover:bg-[#29ABE2] group-hover:text-gray-200 hover:cursor-pointer flex justify-center items-center'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 h-10 "><path fill="currentColor" d="M8.75 7a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM7 11.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M9.75 15a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"></path><path fill="currentColor" d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25Zm1.75-.25a.25.25 0 0 0-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></path></svg> 
           </div>
           </div>
           <h2 className='text-2xl md:text-4xl font-semibold text-white mt-2'>Welcome to MAPSCOPE <span className='block'>Research and Training Program!</span>
           </h2>
           <div className='w-full text-start mt-4 text-[#29ABE2] text-lg'>
           <button className='hover:border hover:border-white hover:text-white hover:px-2 hover:py-1 rounded active:scale-[0.9] transition-transform duration-300' >Learn  More <span><FaLongArrowAltRight className='inline ml-1' /></span> </button>
           </div>
        </div>
        <div className='w-full h-full flex justify-center items-center '>
         <p className='text-white md:text-lg pl-4 md:pl-0 pr-4 md:pr-20 mb-6 md:mb-0'>Upscale your career with tailored courses—specialized workshops and bootcamps for seasoned GIS experts, certification programs for beginners and young professionals, and real-life project based research programs. Join us in shaping the future of geospatial technology and collaborate with industry experts.</p>
        </div>
       </div>
       
      </section>



     {/* domain section */}
      <section className='w-full h-full  px-2 md:px-20 py-2 md:py-10 flex flex-col  justify-center items-center gap-4  mt-4 md:mt-20'>
         <div className='w-full h-full flex flex-col justify-center items-center'>
         <h2 className="text-gray-700 text-2xl md:text-4xl font-bold">Domains</h2>
         <p className='text-center text-gray-600 text-xl md:px-36 mt-2 '>Elevate Your Vision: Geospatial Solutions for Sustainable Land, Forestry, Mining, Agriculture, Urban Development, Governance, and Utilities Excellence.</p>
         </div>
         {/* images with hover animation */}
         <div className='w-full h-full place-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 '>
         <ImageCard img={EnvirImg} text="Environment"/>
         <ImageCard img={MiningImg} text="Mining"/>
         <ImageCard img={LandImg} text="Land Management"/>
         <ImageCard img={ForestImg} text="Forestry"/>
         <ImageCard img={AgrImg} text="Agriculture"/>
         <ImageCard img={UtilityImg} text="Utility"/>
         <ImageCard img={GovernanceImg} text="Governance"/>
         <ImageCard img={UrbanImg} text="Urban Development"/>
         </div>
      </section>




    {/* about section */}
      <section className='w-full h-full  px-4 md:px-20  py-2 md:py-10 flex flex-col gap-4 md:grid md:grid-cols-2 mt-4 md:mt-20 mb-4 '>
         <div className='w-full h-full flex flex-col  justify-center'>
          <h2 className='text-[#29ABE2] text-lg items-start font-bold '>Mapscope <span className='block text-gray-700 text-2xl md:text-4xl '>About Us</span></h2>
          <p className='text-xl text-gray-600 mt-4'>MAPSCOPE, a next generation technology company, committed to empowering organizations and enthusiasts in pursuing research, development and solutions. Leveraging over 25 years of Geo-ICT expertise from our parent company SPARC Pvt. Ltd., we specialize in addressing global issues using cutting-edge technologies like AI/ML, Blockchain, IoT, Geo AI, all aimed at ensuring a better, sustainable future.</p>
         </div>
         <div className='w-full h-full rounded-lg overflow-hidden mt-6 md:mt-0 '>
          <img src={AboutImg} className='w-full h-full object-cover' alt="AboutUs" />
         </div>
      </section>
    
    </div>
  )
}

export default Home
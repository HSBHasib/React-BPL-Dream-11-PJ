import React from 'react'
import bannerImg from '../../assets/Images/banner-main.png'
import bgImg from '../../assets/Images/bg-shadow.png'

const Banner = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 py-6 max-w-7xl mx-auto w-full'>
        <div 
          className='bg-black rounded-2xl overflow-hidden min-h-[350px] sm:min-h-[400px] md:min-h-[450px] flex flex-col justify-center items-center gap-4 p-6 sm:p-8 md:p-12 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${bgImg})` }}
        >
            {/* Banner Image */}
            <img 
              src={bannerImg} 
              className='h-24 sm:h-28 md:h-36 lg:h-44 w-auto object-contain mb-2' 
              alt="bannerImg" 
            />
            
            {/* Heading Text */}
            <h1 className='text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl opacity-90 text-center max-w-2xl leading-tight'>
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            
            {/* Paragraph Text */}
            <p className='text-xs sm:text-sm md:text-base text-white opacity-70 text-center tracking-wide'>
                Beyond Boundaries Beyond Limits
            </p>
            
            {/* Button Container */}
            <div className='border-[1.5px] border-[#E7FE29] rounded-xl inline-block active:scale-95 transition-transform mt-2'>
                <button className='bg-[#E7FE29] text-xs sm:text-sm md:text-base px-5 py-2 rounded-xl border-[#1a1a1a] border-4 text-black font-bold cursor-pointer hover:bg-opacity-90 transition-all'>
                    Claim Free Credit
                </button>
            </div>
        </div>
    </div>
  )
}

export default Banner


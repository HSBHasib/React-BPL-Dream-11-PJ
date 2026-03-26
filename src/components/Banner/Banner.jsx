import React from 'react'
import bannerImg from '../../assets/Images/banner-main.png'
import bgImg from '../../assets/Images/bg-shadow.png'

const Banner = () => {
  return (
    <div className='px-8 py-6'>
        <div className='bg-black rounded-2xl overflow-hidden h-[70vh] flex flex-col justify-center items-center gap-3'
         style={{ backgroundImage: `url(${bgImg})` }}>
            
            <img src={bannerImg} className='h-36 w-auto' alt="bannerImg" />
            <h1 className='text-white font-bold text-4xl opacity-90'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-white opacity-70'>Beyond Boundaries Beyond Limits</p>
            <div className='border-[1.5px] text-[#E7FE29] rounded-xl inline-block active:scale-95'>
                <button className='bg-[#E7FE29]  px-5 py-1.5 rounded-xl border-[#222] border-4 text-black font-bold cursor-pointer'>
                    Claim Free Credit
                </button>
            </div>
        </div>
    </div>
  )
}

export default Banner

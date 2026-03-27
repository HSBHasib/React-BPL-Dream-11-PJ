import React from 'react'
import { Flag, UserPen } from 'lucide-react';

const AvailablePlayers = ({player}) => {
  return (
    <div className='px-8 grid grid-cols-3 gap-6'>
        <div className="card bg-base-100 shadow-sm rounded-2xl">
            <figure className='p-4 pb-0'>
                <img
                className='w-full h-60 object-cover  rounded-xl'
                src={player[0].playerImg}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-self-start items-center gap-2.5'>
                    <UserPen />
                    <h1 className='font-semibold text-[17px]'> PlayerName</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-self-start items-center gap-2.5'>
                        <Flag size={17} className='text-[#898989]'/>
                        <h1 className='text-[17px] text-[#898989]'>Bangladesh</h1>
                    </div>
                    <button className='btn border-none rounded-lg font-medium px-5'>All-Rounder</button>
                </div>
                
                {/* <div className="divider"></div> */}
                
                <div className='flex justify-self-start items-center gap-1.5 font-bold'>
                    <h2 className="text-[16px]">Rating</h2>
                    <span>0</span>
                </div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[16px] font-semibold'>Left-Hand-Bat</h1>
                    <h2 className='text-[#898989]'>Left-Hand-Bat</h2>
                </div>
                
                <div className='flex justify-between items-center'>
                    <div className='flex justify-self-start items-center gap-2.5'>
                        <h1 className='text-[17px] text-[#898989] text-[16px]'>Price:</h1>
                        <span className='text-[15px]'>$1212</span>
                    </div>
                    <button className='border-1 px-4 py-1.5 border-gray-200 rounded-lg active:scale-95 cursor-pointer '>Choose Player</button>
                </div>


                 
            </div>
        </div>

        <div className="card bg-base-100 shadow-sm rounded-2xl">
            <figure className='p-4'>
                <img
                className='w-full h-60 object-cover  rounded-xl'
                src={player[0].playerImg}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

        <div className="card bg-base-100 shadow-sm rounded-2xl">
            <figure className='p-4'>
                <img
                className='w-full h-60 object-cover  rounded-xl'
                src={player[0].playerImg}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div>
                    <h2><UserPen /></h2>
                </div>
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AvailablePlayers

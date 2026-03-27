import React from 'react'
import { Flag, UserPen } from 'lucide-react';
const DisplayPlayerCards = ({playerData}) => {
    console.log(playerData);
    
  return (
    <div>
      <div className="card bg-base-100 shadow-sm rounded-2xl">
            <figure className='p-4 pb-0'>
                <img
                className='w-full h-60 object-cover  rounded-xl'
                src={playerData.playerImg}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex justify-self-start items-center gap-2.5'>
                    <UserPen />
                    <h1 className='font-semibold text-[17px]'>{playerData.playerName}</h1>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-self-start items-center gap-2.5'>
                        <Flag size={17} className='text-[#898989]'/>
                        <h1 className='text-[17px] text-[#898989]'>{playerData.playerCountry}</h1>
                    </div>
                    <button className='btn border-none rounded-lg font-medium px-5'>{playerData.playerType}</button>
                </div>
                
                
                <hr className='text-gray-300 my-1' />
                
                <div className='flex justify-self-start items-center gap-1.5 font-bold'>
                    <h2 className="text-[16px]">Rating {playerData.rating}</h2>
                </div>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[16px] font-semibold'>{playerData.battingStyle}</h1>
                    <h2 className='text-[#898989]'>{playerData.battingStyle}</h2>
                </div>
                
                <div className='flex justify-between items-center'>
                    <div className='flex justify-self-start items-center gap-2.5'>
                        <h1 className='text-[17px] text-[#898989] text-[16px]'>Price: ${playerData.price}</h1>
                    </div>
                    <button className='border-1 px-4 py-1.5 border-gray-200 rounded-lg active:scale-95 cursor-pointer '>Choose Player</button>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default DisplayPlayerCards

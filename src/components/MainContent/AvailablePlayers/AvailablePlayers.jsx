import { useState } from 'react';
import DisplayPlayerCards from '../DisplayPlayerCards/DisplayPlayerCards';

const AvailablePlayers = ({player}) => {
  const [selectedType, setSelectedType] = useState('available');

  return (
    <div className='px-8'>
        <div className='pb-6 pt-1 flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Available Players</h1>
            <div className='flex border rounded-xl border-gray-300'>
                <button onClick={() => setSelectedType('available')} className={`px-4 py-1.5  
                    ${selectedType === 'available' ? 'bg-[#E7FE29]' : 'bg-white text-[#717171] font-normal'} 
                    rounded-xl rounded-r-none font-semibold cursor-pointer`}>Available</button>

                <button onClick={() => setSelectedType('selected')} className={`px-4 py-1.5  rounded-xl rounded-l-none 
                    ${selectedType === 'selected' ? 'bg-[#E7FE29] font-semibold text-black' : 'bg-white text-[#717171]'}
                text-[#717171] cursor-pointer`}>Selected (0)</button>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                player.map((playerData, idx) =>  <DisplayPlayerCards key={idx} playerData={playerData}/>)
            }
        </div>

    </div>
  )
}

export default AvailablePlayers

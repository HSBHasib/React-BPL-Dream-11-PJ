import React, { use } from 'react'
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import { useState } from 'react';

const Players = ({playerData, coin, setCoin}) => {
  const player = use(playerData);
  const [selectedType, setSelectedType] = useState('available');
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  return (
    <div className='px-8 mb-20'>
      
      {/* Available Changing Option */}
        <div className='pb-6 pt-1 flex justify-between items-center'>
            <h1 className='text-2xl font-bold'> {selectedType ===  `available` ? `Available Players(${player.length})` : `Selected(${selectedPlayer.length}/${player.length})`}</h1>
            <div className='flex border rounded-xl border-gray-300'>
                <button onClick={() => setSelectedType('available')} className={`px-4 py-1.5  
                    ${selectedType === 'available' ? 'bg-[#E7FE29]' : 'bg-white text-[#717171] font-normal'} 
                    rounded-xl rounded-r-none font-semibold cursor-pointer`}>Available</button>

                <button onClick={() => setSelectedType('selected')} className={`px-4 py-1.5  rounded-xl rounded-l-none 
                    ${selectedType === 'selected' ? 'bg-[#E7FE29] font-semibold text-black' : 'bg-white text-[#717171]'}
                text-[#717171] cursor-pointer`}>Selected ({selectedPlayer.length})</button>
            </div>
        </div>

      <div>
        {
          selectedType === 'available' ? <AvailablePlayers player={player} coin={coin} setCoin={setCoin} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} /> 
          : <SelectedPlayers player={player} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} coin={coin} setCoin={setCoin} />
        }
      </div>
    </div>
  )
}

export default Players



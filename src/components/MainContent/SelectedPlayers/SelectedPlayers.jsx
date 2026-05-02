import React from 'react'
import DisplaySelectedPlayerCards from '../../DisplaySelectedPlayerCards/DisplaySelectedPlayerCards';
import { toast } from 'react-toastify';

const SelectedPlayers = ({selectedPlayer, setSelectedPlayer, coin, setCoin}) => {
    const handleDeleteSeletedPlayer = (playerData) => {
      const filteredPlayer = selectedPlayer.filter(player => player.playerName !== playerData.playerName);
      setSelectedPlayer(filteredPlayer);
      toast(`${playerData.playerName} detele successfully!`);
      setCoin(coin + playerData.price);
    }
  return (
    <div>
        {
          selectedPlayer.length === 0 ? 
          <div className='flex flex-col justify-center items-center py-30 space-y-1'>
            <h1 className='font-bold text-3xl '>No player selected yet</h1>
            <p className='text-gray-500 text-[15px]'>Go to available tab to select players</p> 
          </div>
          : selectedPlayer.map((selectedPlayerData, idx) => <DisplaySelectedPlayerCards  key={idx}
          handleDeleteSeletedPlayer={handleDeleteSeletedPlayer} selectedPlayerData={selectedPlayerData} />)
        }
    </div>
  )
}

export default SelectedPlayers

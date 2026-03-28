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
          // selectedPlayer.map((selectedPlayerData, idx) => <DisplaySelectedPlayerCards  key={idx}
          // handleDeleteSeletedPlayer={handleDeleteSeletedPlayer} selectedPlayerData={selectedPlayerData} />)
          selectedPlayer.map((selectedPlayerData, idx) => <DisplaySelectedPlayerCards  key={idx}
          handleDeleteSeletedPlayer={handleDeleteSeletedPlayer} selectedPlayerData={selectedPlayerData} />)
        }
    </div>
  )
}

export default SelectedPlayers

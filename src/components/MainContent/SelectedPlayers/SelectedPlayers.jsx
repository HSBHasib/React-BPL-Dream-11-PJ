import React from 'react'
import DisplaySelectedPlayerCards from '../../DisplaySelectedPlayerCards/DisplaySelectedPlayerCards';

const SelectedPlayers = ({selectedPlayer, setSelectedPlayer, coin, setCoin}) => {
    const handleDeleteSeletedPlayer = (playerData) => {
      console.log(playerData);
      const filteredPlayer = selectedPlayer.filter(player => player.playerName !== playerData.playerName);
      setSelectedPlayer(filteredPlayer);
      setCoin(coin + playerData.price);
    }
  return (
    <div>
        {
            selectedPlayer.map((selectedPlayerData, idx) => <DisplaySelectedPlayerCards  key={idx}
            handleDeleteSeletedPlayer={handleDeleteSeletedPlayer} selectedPlayerData={selectedPlayerData} setSelectedPlayer={setSelectedPlayer} />)
        }
    </div>
  )
}

export default SelectedPlayers

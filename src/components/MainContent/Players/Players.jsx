import React, { use } from 'react'
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playerData}) => {
  const player = use(playerData);
  return (
    <div>
      <AvailablePlayers player={player} />
    </div>
  )
}

export default Players



import DisplayPlayerCards from '../DisplayPlayerCards/DisplayPlayerCards';

const AvailablePlayers = ({player}) => {
  return (
    <div>
        {/* Cards Rendaring */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                player.map((playerData, idx) =>  <DisplayPlayerCards key={idx} playerData={playerData}/>)
            }
        </div>

    </div>
  )
}

export default AvailablePlayers

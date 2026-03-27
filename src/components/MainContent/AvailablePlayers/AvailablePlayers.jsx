import DisplayPlayerCards from '../DisplayPlayerCards/DisplayPlayerCards';

const AvailablePlayers = ({player}) => {
  return (
    <div className='px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            player.map((playerData, idx) =>  <DisplayPlayerCards key={idx} playerData={playerData}/>)
        }
    </div>
  )
}

export default AvailablePlayers

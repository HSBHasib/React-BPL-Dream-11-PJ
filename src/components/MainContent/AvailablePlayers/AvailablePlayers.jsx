import DisplayPlayerCards from '../DisplayPlayerCards/DisplayPlayerCards';

const AvailablePlayers = ({player}) => {
  return (
    <div className='px-8'>
        <div className='pb-6 pt-1 flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Available Players</h1>
            <div className='flex border rounded-xl border-gray-300'>
                <button className='px-4 py-1.5 bg-[#E7FE29] rounded-xl rounded-r-none font-semibold cursor-pointer'>Available</button>
                <button className='px-4 py-1.5  rounded-xl rounded-l-none text-[#717171] cursor-pointer'>Selected (0)</button>
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

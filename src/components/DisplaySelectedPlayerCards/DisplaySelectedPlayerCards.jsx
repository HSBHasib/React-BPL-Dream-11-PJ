import { IoIosPerson } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const DisplaySelectedPlayerCards = ({selectedPlayerData, setSelectedPlayer, handleDeleteSeletedPlayer}) => {
  return (
    <div>
      <div className='border border-gray-300 rounded-lg flex justify-between items-center p-3 mb-3'>
            <div className="flex items-center gap-3">
                <div className='w-16 h-16'>
                    <img className='h-full w-full object-cover rounded-lg' src={selectedPlayerData.playerImg} alt="" />
                </div>
                <div className="-space-y-0.5">
                    <div className="flex items-center gap-1">
                        <IoIosPerson className="text-lg" />
                        <h2 className="font-bold">{selectedPlayerData.playerName}</h2>
                    </div>
                    <p className="text-sm text-gray-600">{selectedPlayerData.playerType}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleDeleteSeletedPlayer(selectedPlayerData)} className="btn border border-gray-200 bg-gray-50 rounded-sm px-3"><MdDelete className="text-red-500 text-lg"/></button>
            </div>
      </div>
    </div>
  )
}

export default DisplaySelectedPlayerCards

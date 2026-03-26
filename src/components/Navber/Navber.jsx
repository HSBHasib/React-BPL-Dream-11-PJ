import navLogo from '../../assets/Images/logo.png';
import coinLogo from '../../assets/Images/Coin.png';
const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-8">
        <div className="flex-1 ">
            <img className='object-cover' src={navLogo} alt="nav-logo" />
        </div>

        <div className='flex justify-center items-center gap-10'>
            <ul className='flex gap-8 text-gray-700'>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
            </ul>
        

            <div className="flex-no">
                <button className="btn border-1 rounded-xl border-gray-200 font-bold">
                    0 Coin <img className='object-cover' src={coinLogo} alt="" />
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navber

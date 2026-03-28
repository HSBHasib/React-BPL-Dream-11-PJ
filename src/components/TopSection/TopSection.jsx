import Banner from '../Banner/Banner'
import Navber from '../Navber/Navber'

const TopSection = ({coin}) => {
  
  return (
    <div>
      <Navber coin={coin} />
      <Banner />
    </div>
  )
}

export default TopSection

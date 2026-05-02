import { Suspense, useState } from 'react';
import TopSection from './components/TopSection/TopSection'
import Players from './components/MainContent/Players/Players';
import { UserPlus } from 'lucide-react';
import { ToastContainer } from 'react-toastify';

const fetchPlayerData = fetch('/data.json').then(res => res.json());

const App = () => {
  const [coin, setCoin] = useState(20000);
  return (
    <div>
      <TopSection coin={coin} setCoin={setCoin}  />
      <Suspense fallback={<p>Loading...</p>}>
        <Players playerData={fetchPlayerData} coin={coin} setCoin={setCoin}/>
      </Suspense>

      {/* React Toastify */}
      <ToastContainer />
    </div>
  )
}

export default App

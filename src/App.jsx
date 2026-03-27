import { Suspense } from 'react';
import TopSection from './components/TopSection/TopSection'
import Players from './components/MainContent/Players/Players';


const fetchPlayerData = fetch('/data.json').then(res => res.json());

const App = () => {
  return (
    <div>
      <TopSection />
      <Suspense fallback={<p>Loading...</p>}>
        <Players playerData={fetchPlayerData}/>
      </Suspense>
    </div>
  )
}

export default App

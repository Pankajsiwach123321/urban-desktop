import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import UrbnNav from './components/UrbnNav';
import { Route, Routes } from 'react-router-dom';
import Maindoc from './components/Maindoc';
import TrendingNft from './components/TrendingNft';
import History from './components/History';
import TopCollection from './components/TopCollection';
import NewNft from './components/NewNft';

function App() {
  return (
    <>
      <div className="App">
        <div className='flex'>
          <Sidebar />
          <div className=' bg-[#EDF1F2] w-full xl:pl-[19rem] lg:pl-[11rem] pl-[3rem] pb-[44px] min-h-screen'>
            <div className='sm:px-6 px-3 '>
              <UrbnNav />
              <Routes>
                <Route path='/' element={<Maindoc />} />
              </Routes>
              <Routes>
                <Route path='home' element={<TrendingNft />} />
              </Routes>
              <Routes>
                <Route path='Topcollection' element={<TopCollection />} />
              </Routes>
              <Routes>
                <Route path='Newnft' element={<NewNft />} />
              </Routes>
              <Routes>
                <Route path='history' element={<History />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation, } from 'react-router-dom'
import Home from './pages/Home'
import TypingTest from './pages/TypingTest'
import Dashboard from './pages/Dashboard'
import Leaderboard from './pages/Leaderboard'
import Profile from './pages/Profile'
import WithTimer from './pages/WithTimer'
import WithOutTimer from './pages/WithOutTimer'
import SideNavBar from './components/SideNavBar'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

 


  return (
    <div className="min-h-screen bg-[#071416]">
      {location.pathname !== "/programmer" &&
        location.pathname !== "/beginner" && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typing-test" element={<TypingTest />} />
        <Route path="/programmer" element={<WithTimer />} />
        <Route path="/beginner" element={<WithOutTimer />} />
        <Route />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<TypingTest />}>
          <Route path='/programmer' element={<WithTimer/>}/>
            <Route path='/beginner' element={<WithOutTimer/>}/>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App

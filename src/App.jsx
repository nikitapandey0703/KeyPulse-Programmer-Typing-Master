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
    <>
     
      {location.pathname !== "/with-timer" && <NavBar/>}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typing-test" element={<TypingTest />} />
        <Route path="/with-timer" element={<WithTimer />} />
        <Route path="/without-timer" element={<WithOutTimer />} />
        <Route />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}

export default App

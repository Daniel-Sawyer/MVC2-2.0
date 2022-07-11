import React from 'react'
import {Link, Routes, Route} from 'react-router-dom';
import Roster from './Roster';
// import Profile from './Profile';
import Login from './Login';
import useToken from './useToken';
import './Index.css'

function Home() {
  const {token, setToken} = useToken()
  
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div>
      <header>
        <Link to='/Roster'>Team Builder</Link>
        {/* <Link to='/Profile'>Profile</Link> */}
       <Routes>
        <Route  path='/Roster' element={<Roster/>} />
        {/* <Route path='/Profile' element={<Profile/>} /> */}
       </Routes>

       </header>
       <div id='home'>
       <h1>MVC2 Button Guide</h1>
                <div id="home-text">These are the standered controls and helps show how the inputs will be shown</div>
                <p>if in japanesse I'm sorry</p>
                <img id="manuel" alt='japmanuel' src="https://images.launchbox-app.com/71ccf82b-5b35-497e-89ef-4ed3a1362913.jpg"/>
        
       </div>
    </div>
  )
}

export default Home
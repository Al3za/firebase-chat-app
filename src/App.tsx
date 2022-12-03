import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { config } from './config/config'
import HomePage from './pages/Home'
import AuthRoute from './components/AuthRoute'
import LoginPage from './pages/LoginPage'
import Testet from './Test'

initializeApp(config.firebaseConfig)
 

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthRoute><Testet /></AuthRoute>} />
      <Route path='/login' element={<LoginPage />} />
      < Route path='/test' element={< Testet />} />
    </Routes>
  )
}


export default App
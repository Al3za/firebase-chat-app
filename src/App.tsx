import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import { config } from './config/config'
import AuthRoute from './components/AuthRoute'
import LoginPage from './pages/LoginPage'
import Testet from './Test'
import SignUpPage from './pages/SignUpPage'

initializeApp(config.firebaseConfig)
 

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthRoute><Testet /></AuthRoute>} />
      <Route path='/login' element={<LoginPage />} />
      < Route path='/SignUp' element={< SignUpPage />} />
    </Routes>
  )
}


export default App
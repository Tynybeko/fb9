import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import LoginPage from './pages/Auth/Login'
import RegisterPage from './pages/Auth/Register'
import Auth from './pages/Auth'
import PrivateLayout from './layouts/PrivateLayout'
function App() {

  return (
    <Routes>
      <Route path='/auth' element={<Auth />}>
        <Route index element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>
      <Route path='/' element={<PrivateLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App

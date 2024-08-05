import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Home from './pages/Home'
import PrivateLayout from './layouts/PrivateLayout'

function App() {


  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/' element={<PrivateLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>


  )
}

export default App

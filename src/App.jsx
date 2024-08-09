import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Home from './pages/Home'
import PrivateLayout from './layouts/PrivateLayout'
import Registration from './pages/Registration'
import SingleDepartment from './pages/SingleDepartment'
import SingleUser from './pages/SingleUser'

function App() {


  return (
    <Routes>
      {/* <Route path='/auth' element={<Auth />} /> */}
      {/* <Route path='/register' element={<Registration />} /> */}
      <Route path='/' element={<PrivateLayout />}>
        <Route index element={<Home />} />
        <Route path=':id' element={<SingleDepartment />} />
        <Route path='user/:userID' element={<SingleUser />} />
      </Route>
    </Routes>


  )
}

export default App

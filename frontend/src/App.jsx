import {BrowserRouter, Routes, Route} from 'react-router-dom'

import React from 'react' 
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Navigate to="/admin-dashboard"  />}></Route>  */}
      <Route path='/login' element={<Login /> }></Route> 
      <Route path='/Register' element={<Register /> }></Route> 
      <Route path='/admin-dashboard' element={<AdminDashboard /> }></Route> 
      <Route path='/employee-dashboard' element={<EmployeeDashboard /> }></Route> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
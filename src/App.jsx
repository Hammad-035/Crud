import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path='/' element={<Users />} />
      <Route path='/create' element={<CreateUser />} />
      <Route path='/update/:id' element ={<UpdateUser />} />
      </Routes>
      
    </>
  )
}

export default App

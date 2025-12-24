import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import AdminHeader from './components/admin/AdminHeader'


function App() {
  const [count, setCount] = useState(0)

  return (
  <Home/>,
  <AdminHeader/>
  )
}

export default App

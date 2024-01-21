import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate=useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    if(Cookies.get('access_token')){
      setIsLoggedIn(true)
    }
    else{
      navigate('/login')
    }
  },[isLoggedIn, navigate])

  return (
    <>
    {
      isLoggedIn?
      <>
        <Navbar/>
        <Dashboard/>
      </>
      :
      <>
        Redirecting to login...
      </>
    }
    
    </>
  )
}

export default App

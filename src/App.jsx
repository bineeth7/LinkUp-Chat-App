import './App.css'
import{Route, Routes, useNavigate} from 'react-router-dom'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth/cordova'
import { auth } from './config/firebase'

function App() {

  const navigate = useNavigate();

  useEffect(()=>{ 
    onAuthStateChanged(auth, async(user)=>{
      if (user){ //user available,load user data
        navigate('/chat')
      }else{ // user not available,we will navigate users on the login page
        navigate('/')
      }
    }) //whenever the authentiction state is changing then we can execute one statement
  },[]) // [] -> dependancy array

  return (
    <>
    <ToastContainer/>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/profile' element={<ProfileUpdate/>}/>
      </Routes>
    </>
  )
}

export default App

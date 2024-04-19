import React from 'react'
import MainLayout from './layout/MainLayout'
import Login from './pages/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signing from './pages/Signing'
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  if (!localStorage.getItem('access_token'))
    return (
      <>
        <Routes>
          <Route index element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signing' element={<Signing />} />
        </Routes>
        <ToastContainer transition={Zoom} position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </>
    )


  return (
    <div className='w-screen overflow-hidden'>
      <MainLayout />

    </div>
  )
}

export default App

import React, { useEffect, useRef, useState } from 'react'
import SideBar from '../components/SideBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Settings from '../pages/Settings'
import Navbar from '../components/Navbar'
import FAQs from '../pages/FAQs'
import Notifictaion from '../components/Notifictaion'
import GetHelp from '../pages/GetHelp'
import ChatScreen from '../pages/ChatScreen'
import Home from '../pages/Home'
import Apps from '../pages/Apps'

function MainLayout() {
  const [notifications, setNotifications] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setDrawer(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, [ref, drawer]);

  return (
    <div className='bg-lemon flex justify-start items-stretch h-screen overflow-hidden'>
        <div ref={ref} className={`w-[22%] h-full py-4 pl-4 sm:absolute sm:bg-white sm:z-50 sm:w-[80%] sm:shadow-2xl sm:px-0 ${!drawer? 'sm:-left-[400px]': 'sm:left-0'} transition-all ease-in duration-200`}>
                <SideBar setNotifications={setNotifications} notifications={notifications} setDrawer={setDrawer}/>
        </div>
        <div className='w-[78%] h-full relative sm:w-full overflow-x-hidden'>
              <div className='h-full overflow-y-scroll flex flex-col gap-8 pr-4 pt-4 pl-5 sm:pr-2 sm:pl-3'>
                <Navbar setDrawer={setDrawer}/>
                <Routes>
                  <Route index element={<Home />}/>
                  <Route path='/apps/:id/:name' element={<Apps />} />
                  <Route path='/settings/*' element={<Settings />}/>
                  <Route path='/get-help' element={<GetHelp />}/>
                  <Route path='/faqs' element={<FAQs />}/>
                  <Route path='/chat/*' element={<ChatScreen />}/>
                  <Route path='*' element={<Navigate to='/'/>} />
                </Routes>
              </div>

              {notifications && <Notifictaion setNotifications={setNotifications}/>}
        </div>
    </div>
  )
}

export default MainLayout

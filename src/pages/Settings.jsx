import React from 'react'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Profile from '../components/Profile'
import NotificationSetting from '../components/NotificationSetting'

function Settings() {
  return (
    <div className='flex flex-col gap-8'>
      <span className='flex gap-3 sm:gap-1'>
        <NavLink to='/settings/profile' className='rounded-full px-4 py-1.5 font-Satoshi font-normal sm:px-3 sm:text-sm'>Profile</NavLink>
        <NavLink to='/settings/notifications' className='rounded-full px-4 py-1.5 font-Satoshi font-normal sm:px-3 sm:text-sm'>Notifications</NavLink>
      </span>
      <Routes>
            <Route index element={<Navigate to='/settings/profile' />} />
            <Route path='profile' element={<Profile />}/>
            <Route path='notifications' element={<NotificationSetting />}/>
        </Routes>
    </div>
  )
}

export default Settings

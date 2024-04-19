import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Input from './Input'
import { BACKEND_HOST } from '../constants'
import { toast } from "react-toastify";

function Profile() {
    const [state, setState] = useState({})
    const getProfile = async() => {
        const response = await fetch(`${BACKEND_HOST}/profile`,{
          method: 'GET',
          headers: {
              'Content-Type': 'Application/json',
              'Authorization': `${localStorage.getItem('access_token')}`
          }
      })
        const res = await response.json()
        if(response.status === 200){
        console.log(res);
        }
        else{
            toast.error(res.detail)
        }
      }

      getProfile()
  return (
    <div className='bg-lemon w-full rounded-xl py-2 pb-20 flex flex-col gap-7 sm:py-0 sm:px-2 sm:pb-10'>
        <div className='flex justify-start items-start gap-3 px-8 sm:px-0 sm:flex-col'>
            <img src={localStorage.getItem('userImage') || ''} alt='user' className='w-[60px] h-[60px] rounded-full object-cover'/>
            <span>
            <h1 className='capitalize text-black-200 font-Satoshi font-extrabold text-xl'>Change Profile Avatar</h1>
            <h1 className='text-black-50 font-Satoshi leading-5 font-normal text-base w-[70%] sm:w-full'>Personalize your presence with a new profile avatar. Upload an image that represents you best and makes your account stand out.</h1>
            </span>
        </div>
        <div className='flex justify-start items-stretch gap-8 px-8 sm:px-0 sm:gap-2 '>
            <button className='rounded-md px-5 py-1 font-Satoshi font-medium text-sm pb-2 bg-green-200 text-white cursor-pointer transition-all ease-in duration-150 hover:bg-green-200/75'>
                Upload
            </button>
            <button className='rounded-md px-5 py-1 font-Satoshi font-medium text-sm pb-2 bg-white text-red cursor-pointer transition-all ease-in duration-150 border-[1px] border-grey'>
                Delete Avatar
            </button>
        </div>

        <hr className='w-full h-[1px] bg-grey/10 opacity-15'/>

        <form className='px-7 flex flex-col gap-5 sm:px-0'>
            <h1 className='capitalize text-black-200 font-Satoshi font-extrabold text-xl'>Profile Information</h1>

            <div className='flex justify-between items-start gap-8 sm:flex-col sm:gap-3'>
                    <Input label='Full Name' required={true} value={localStorage.getItem('userName') || ''} type='text' readOnly={true}/>
                    <Input label='Email Address' required={true} value={localStorage.getItem('userEmail') || ''} type='email' readOnly={true}/>
            </div>
            <div className='flex justify-between items-start gap-8  sm:flex-col sm:gap-3'>
                    <Input label='Phone Number' required={true} value="" type='text' readOnly={true}/>
                    <Input label='Home Address' required={true} value="" type='text' readOnly={true}/>
            </div>
        </form>

        <hr className='w-full h-[1px] bg-grey/10 opacity-15'/>

        <div className='flex flex-col gap-7 px-7 sm:px-0'>
            <h1 className='capitalize text-black-200 font-Satoshi font-extrabold text-xl'>Profile Information</h1>
            <div className='flex justify-between items-start  sm:flex-col sm:gap-3'>
                    <span className='w-[50%] sm:w-full'>
                        <Input label='Password' required={true} value="Muhammad" type='password' readOnly={true}/>
                    </span>
                    <button className='rounded-md px-5 py-1 font-Satoshi font-medium text-sm pb-2 bg-transparent text-black-50 cursor-pointer transition-all ease-in duration-150 border-[1px] border-grey'>
                        Change Password
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Profile

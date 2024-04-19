import React from 'react'
import Input from '../components/Input'
import { MdArrowForward } from "react-icons/md";
import { BACKEND_HOST } from '../constants';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    const host = 'https://changeblock.vercel.app'
    // const host = 'http://localhost:3000'

    const continueWithGoogle =async() => {
        try {
            const response = await fetch(`${BACKEND_HOST}/auth/google`,{
                method: 'GET',
                headers: {
                        'Content-Type': 'Application/json',
                    }
                })
                const res = await response.json()
                if(response.status === 200){
                    window.location = (`https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=965064677460-e0vvqhknim0neqab624kanscsbivqd93.apps.googleusercontent.com&redirect_uri=${host}/signing&scope=openid%20profile%20email`)
        //         window.open(res.url)
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='bg-lemon w-full max-h-max relative flex justify-center items-center py-[100px] sm:py-[50px]'>
        <div className='bg-white border-[1px] border-grey/20 rounded-xl shadow-md px-10 py-7  w-1/3 sm:w-[80%] sm:px-4 sm:py-5'>
            <h2 className='font-Satoshi font-bold text-black-500 text-[30px] text-center sm:text-2xl'>Create an Account</h2>
            <p className='text-center font-sm text-black-40/60 leading-5 font-Satoshi font-normal sm:text-sm'>
                Please enter your details to continue
            </p>

            <form className='flex flex-col gap-4 mt-5'>
                <Input label='Name' placeholder='Enter Full Name' required={true} type='text' readOnly={false}/>
                <Input label='Email Address' placeholder='Enter Email Address' required={true} type='email' readOnly={false}/>
                <Input label='Password' placeholder='Enter Password' required={true} type='password' readOnly={false}/>
                <div className='flex justify-start items-center gap-3 sm:items-start'>
                <input type='checkbox' className='sm:mt-1'/>
                <p className='font-sm text-black-40/60 leading-5 font-Satoshi font-normal sm:text-sm'>
                    I accept the <spna className='text-[#5C73DB]'>terms and conditions of use</spna>.
                </p>
                </div>

                <button className='mt-3 flex justify-center  sm:text-sm  sm:py-2 items-center gap-2 leading-3 bg-green-200 rounded-md outline-none text-white font-Satoshi font-bold font-sm py-3 w-full'>
                     Sign Up
                    <MdArrowForward className='text-lg'/>
                </button>
            </form>

            <div className='flex justify-between items-center gap-1 mt-7 sm:mt-5'>
                <hr className='w-[48%] h-[1px] bg-grey/10 opacity-15'/>
                <p className='text-center font-sm text-black-40/60 leading-4 font-Satoshi font-normal w-[300px] sm:text-sm sm:leading-3'>
                    OR<br/>CONTINUE WITH
                </p>
                <hr className='w-[48%] h-[1px] bg-grey/10 opacity-15'/>
            </div>

            <button onClick={continueWithGoogle} className='mt-7 flex sm:text-sm  sm:py-2 justify-center items-center gap-2 leading-3 bg-white rounded-md outline-none text-black-40 border-[1px] border-grey/50 font-Satoshi font-bold font-sm py-3 w-full'>
                    <img src={require('../assets/Google__G__logo.svg.png')} className='w-[20px] object-contain'/>
                     Google
            </button>
        </div>
    </div>
  )
}

export default Login 

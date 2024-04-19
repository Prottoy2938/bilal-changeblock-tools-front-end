import React from 'react'
import { CiSearch } from "react-icons/ci";
import { HiBars3BottomLeft } from 'react-icons/hi2';

function Navbar({ setDrawer }) {
    return (
        <div className='flex justify-between items-stretch gap-2 sm:gap-1.5'>
            <span onClick={()=>setDrawer(true)} className='hidden sm:flex justify-center items-center px-3 sm:p-2 bg-white rounded-full cursor-pointer sm:rounded-lg'>
                <HiBars3BottomLeft className='text-black-500 text-xl'/>
            </span>
            <div className='bg-white rounded-full w-[96%] flex justify-center items-center gap-3 sm:w-[80%] sm:gap-1 sm:px-2 sm:rounded-lg'>
                    <CiSearch className='text-xl text-black-200'/>
                    <input type='search' className='border-none outline-none text-base py-2 w-[350px] sm:w-full sm:text-sm font-Satoshi font-normal text-black-50' placeholder='Search by keyword, phrases, trending topics'/>
            </div>
            <span className='flex justify-center items-center px-3 bg-white rounded-full cursor-pointer sm:rounded-lg sm:p-2'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_161_3560)">
                        <path d="M4.16667 8.33334C4.60869 8.33334 5.03262 8.50894 5.34518 8.8215C5.65774 9.13406 5.83333 9.55798 5.83333 10C5.83333 10.442 5.65774 10.866 5.34518 11.1785C5.03262 11.4911 4.60869 11.6667 4.16667 11.6667C3.72464 11.6667 3.30072 11.4911 2.98816 11.1785C2.67559 10.866 2.5 10.442 2.5 10C2.5 9.55798 2.67559 9.13406 2.98816 8.8215C3.30072 8.50894 3.72464 8.33334 4.16667 8.33334ZM10 8.33334C10.442 8.33334 10.866 8.50894 11.1785 8.8215C11.4911 9.13406 11.6667 9.55798 11.6667 10C11.6667 10.442 11.4911 10.866 11.1785 11.1785C10.866 11.4911 10.442 11.6667 10 11.6667C9.55797 11.6667 9.13405 11.4911 8.82149 11.1785C8.50893 10.866 8.33333 10.442 8.33333 10C8.33333 9.55798 8.50893 9.13406 8.82149 8.8215C9.13405 8.50894 9.55797 8.33334 10 8.33334ZM15.8333 8.33334C16.2754 8.33334 16.6993 8.50894 17.0118 8.8215C17.3244 9.13406 17.5 9.55798 17.5 10C17.5 10.442 17.3244 10.866 17.0118 11.1785C16.6993 11.4911 16.2754 11.6667 15.8333 11.6667C15.3913 11.6667 14.9674 11.4911 14.6548 11.1785C14.3423 10.866 14.1667 10.442 14.1667 10C14.1667 9.55798 14.3423 9.13406 14.6548 8.8215C14.9674 8.50894 15.3913 8.33334 15.8333 8.33334Z" fill="#3F423C" />
                    </g>
                    <defs>
                        <clipPath id="clip0_161_3560">
                            <rect width="20" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </span>
        </div>
    )
}

export default Navbar

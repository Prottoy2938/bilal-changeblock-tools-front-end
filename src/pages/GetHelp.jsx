import React, { useState } from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

function GetHelp() {
    const [state, setState] = useState(0)
  return (
    <div className='flex flex-col gap-8 sm:gap-3 sm:pb-10'>
    <span className='flex gap-3 sm:gap-0 sm:overflow-x-scroll'>
      <button onClick={()=> setState(0)} className={`${state === 0 && 'bg-green-100'} rounded-full px-4 py-1.5 font-Satoshi font-normal sm:px-3 sm:text-sm whitespace-nowrap sm:py-1`}>All Tickets</button>
      <button onClick={()=> setState(1)} className={`${state === 1 && 'bg-green-100'} rounded-full px-4 py-1.5 font-Satoshi font-normal sm:px-3 sm:text-sm whitespace-nowrap sm:py-1`}>Active Tickets</button>
      <button onClick={()=> setState(2)} className={`${state === 2 && 'bg-green-100'} rounded-full px-4 py-1.5 font-Satoshi font-normal sm:px-3 sm:text-sm whitespace-nowrap sm:py-1`}>Resolved Tickets</button>
      <button onClick={()=> setState(3)} className={`${state === 3 && 'bg-green-100'} rounded-full px-4 py-1.5 font-Satoshi font-normal sm:px-3 sm:text-sm whitespace-nowrap sm:py-1`}>Closed Tickets</button>
    </span>

    <div className='bg-white flex flex-col rounded-xl min-h-screen pt-2  '>
            <Item />
            <Item />
            <Item />
    </div>
    
  </div>
  )
}

export default GetHelp


const Item = () => {
    return (
        <>
            <div className='px-7 py-6 sm:px-3 sm:py-4'>
                <div className='flex justify-start items-center gap-6 sm:items-start sm:gap-3'>
                    <input type='checkbox' className='sm:mt-1'/>
                    <div className='flex flex-col gap-4 sm:gap-1'>
                        <div className='flex justify-between items-center sm:flex-col sm:items-start sm:w-full'>
                                <div className='flex justify-start items-center gap-4 sm:items-start'>
                                    <p className='text-base text-black-40/70 leading-5 font-Satoshi font-bold'>Support Ticket #001</p>
                                    <span className='rounded-full px-3 py-1 bg-[#FEEDCD]'>
                                        <p className='text-[12px] text-black-500/80 leading-5 font-Satoshi font-medium sm:text-[10px] sm:leading-3'>Active</p>
                                    </span>
                                </div>
                                <div className='flex justify-end items-center gap-1'>
                                    <p className='font-Satoshi font-normal text-black-500/80 text-sm leading-5 sm:text-[12px]'>03/24/24</p>
                                    <span className='bg-black-500/70 p-1 rounded-full'></span>
                                    <p className='font-Satoshi font-normal text-black-500/80 text-sm leading-5 sm:text-[12px]'>15:35</p>
                                    <BiDotsHorizontalRounded className="text-black-500 text-2xl ml-2 cursor-pointer sm:hidden"/>
                                </div>
                        </div>
                        <div className='flex flex-col gap-2 sm:gap-0'>
                            <h2 className='font-Satoshi font-bold text-black-500/80 text-xl leading-5 sm:text-base sm:leading-5'>Unable to Access EMPA Wizard Dashboard</h2>
                            <p className='font-Satoshi font-normal text-black-500/60 text-lg leading-6 sm:text-sm'>
                                Hello Support Team<br/>
                                I'm experiencing difficulty accessing the EMPA Wizard dashboard. Every time I try to log in, I'm redirected to an error page. I've tried clearing my browser cache and cookies, but the issue persists. Could you please investigate and resolve this issue as soon as possible? I have urgent tasks to complete within the EMPA Wizard.
                                <br/>Thank you,
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-full h-[1px] bg-grey/10 opacity-15'/>
        </>
    )
}

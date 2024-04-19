import React from 'react'
import { Link } from 'react-router-dom'

function ChatScreen() {
  return (
    <div className='flex h-screen justify-start items-stretch gap-4'>
        <Inbox />
    </div>
  )
}

export default ChatScreen

const Inbox = () => {
    return (
        <div className='flex bg-white rounded-2xl h-full w-[33%] overflow-scroll flex-col sm:w-full'>
           {[1,1,1,1,1,1].map((p, i)=>{
                return <>
                    <Link to={`/chat/${0}/${"Sarah"}`} className='flex px-5 py-4 justify-start items-start gap-3'>
                        <img src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt='user' className='w-[50px] h-[50px] rounded-full object-cover'/>
                        <div className='w-full'>
                            <div className='flex justify-between items-end'>
                                <h2 className='font-Satoshi font-bold text-lg text-black-300'>Sarah Thompson</h2>
                                <p className='font-Satoshi font-medium text-[12px] text-black-50'> 11/16/19</p>
                            </div>
                            <p className='font-Satoshi font-medium text-sm text-black-50/80'> Hey team, just wanted to remind...</p>
                        </div>
                    </Link>
                    <hr className='w-full h-[1px] bg-grey/10 opacity-15'/>
                </>
           })}
        </div>
    )
}
import React from 'react'

function AppHeader({ chats, app, startChatwithCard }) {
  return (
    <>
      {chats.length === 0 && <div className='flex flex-col justify-between h-full items-center'>
            <div className='flex justify-center items-center flex-col gap-1 px-7 sm:px-0'>
                    <h2 className='font-Satoshi font-bold text-black-500 text-[38px] text-center sm:text-xl'>What Can I do For You Today?</h2>
                    <p className='w-[50%] text-center text-base text-black-40/80 leading-5 font-Satoshi font-normal sm:text-sm sm:w-[95%]'>
                        {app?.text}
                    </p>
            </div>
            
            <div className='flex flex-wrap gap-4 justify-start items-stretch sm:gap-2'>
                    {app?.cards?.map((c, index) =>  (
                        <div key={index} onClick={()=>startChatwithCard(`${c.heading} ${c.text}`)} className=' border-[1px] w-[49%] sm:w-full animate opacity-0 border-grey/50 rounded-xl px-8 py-4 sm:px-3 sm:py-2 cursor-pointer'>
                                <h2 className='font-Satoshi font-bold text-black-500 text-lg sm:text-sm'>{c.heading}</h2>
                            <p className='text-sm text-black-40 leading-5 font-Satoshi font-normal sm:text-[12px] sm:leading-4'>{c.text}</p>
                        </div>
                    ))}
            </div>
        </div> }
    </>
  )
}

export default AppHeader

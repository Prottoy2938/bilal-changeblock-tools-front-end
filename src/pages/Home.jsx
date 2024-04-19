import React from 'react'
import { APPS } from '../constants'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='flex justify-center items-center flex-col gap-2 sm:gap-1'>
            <h2 className='font-Satoshi font-bold text-black-500 text-[38px] text-center sm:text-xl'>What Can I do For You Today?</h2>
            <p className='w-[50%] text-center text-base text-black-40/80 leading-5 font-Satoshi font-normal sm:text-sm sm:w-[95%]'>
                Hello! How can I assist you today? Whether it's data collection, analysis, or report generation for your EMPA, I'm here to help. Just let me know what you need.
            </p>
        </div>
        <div className='flex justify-start items-stretch gap-4 flex-wrap mt-10 mb-5 sm:gap-2 sm:justify-center'>
            {APPS?.map((a, index) => (
                <Link to={`/apps/${index}/${a.name}`} key={index} className='animate opacity-0 bg-white border-[1px] sm:w-[48.8%] w-[32%] border-grey/20 shadow-sm rounded-xl p-4 sm:px-3 sm:py-3 flex flex-col justify-start items-start gap-2'>
                    <span className={`
                        w-[50px] h-[50px] rounded-md sm:h-[40px] sm:w-[40px]
                        ${index === 0 && 'bg-[#D1E7FA] p-[1px]'}
                        ${index === 1 && 'bg-[#FCEFCF] p-[1px]'}
                        ${index === 2 && 'bg-[#F7D4E2] p-[1px]'}
                        ${index === 3 && 'bg-[#CCE7FF] p-[1px]'}
                        ${index === 4 && 'bg-[#DDD2F9] p-[1px]'}
                        ${index === 5 && 'bg-[#E4CCFF] p-[1px]'}
                        ${index === 6 && 'bg-[#DCDFEF] p-[1px]'}
                        ${index === 7 && 'bg-[#CEE3FD] p-1'}
                        ${index === 8 && 'bg-[#E3D3F8] p-[1px]'}
                        ${index == 9 && 'bg-[#DCDFEF] p-[1px]'}
                        ${index == 10 && 'bg-[#CEE3FD] p-1'}
                        ${index == 11 && 'bg-[#E3D3F8] p-[1px]'}
                    `}>
                        <img src={a.img} className='w-full h-full object-cover' alt={a.name}/>
                    </span>
                    <h2 className='font-Satoshi font-bold text-black-500 text-xl sm:text-base'>{a.name}</h2>
                    <p className='text-base text-black-40 leading-5 font-Satoshi font-normal sm:text-[12px]'>{a.desc}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Home

import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { APPS } from '../constants'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AppsWithSameUI from './AppsWithSameUI';
import SocialTool from '../components/SocialTool';
import EMPAScannerTool from '../components/EMPAScannerTool';
import TranslateTool from '../components/TranslateTool';
import NewsLetter from '../components/NewsLetter';
import AppsWithSameUI2 from './AppsWithSameUI2';

function Apps() {
    const navigate = useNavigate()
    const { id, name } = useParams()
    const [app, setApp] = useState(APPS[id])
   



    useEffect(()=>{
        if(!app)
            navigate('/')
    }, [app])


  return (
    <div className='flex-col h-full flex gap-5'>
       <span className='flex gap-3 justify-start items-center sm:gap-2'>
            <div onClick={()=> navigate('/')} className='cursor-pointer rounded-full px-4 sm:px-3 sm:text-sm py-1.5 font-Satoshi font-normal bg-green-100 flex justify-start items-center gap-2'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:w-[15px] sm:h=[15px]'>
                    <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="#5B5D58" />
                </svg>
                Apps
            </div>
            <MdOutlineKeyboardArrowRight className='text-black-500 text-xl sm:text-lg'/>
            <p className='rounded-full py-1.5 font-Satoshi font-medium text-black-500 sm:text-sm'>{app?.name}</p>
      </span>

      <div className='pt-0 pb-5 rounded-2xl relative h-full flex flex-col justify-between gap-5 px-7 sm:px-1 sm:pb-1'>
        {/* {id == 1 &&  <NewsLetter app={app} id={id}/>}ssss */}
        {id == 2 &&  <SocialTool app={app}/>}
        {id == 3 &&   <TranslateTool app={app}/>}
        {id == 4 &&   <EMPAScannerTool app={app}/>}

        {(id ==1 || id == 6 || id == 7 || id == 8) && <AppsWithSameUI app={app} id={id}/>}

        {(id == 9 || id == 10) && <AppsWithSameUI2 app={app} id={id}/> }
        
      </div>
    </div>
  )
}

export default Apps


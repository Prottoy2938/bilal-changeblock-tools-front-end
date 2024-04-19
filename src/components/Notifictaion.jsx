import React, { useRef, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { BiDotsHorizontalRounded } from "react-icons/bi"

function Notification({ setNotifications }) {
    const reff = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (reff.current && !reff.current.contains(event.target)) {
                setNotifications(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity:1}} className='fixed top-0 left-0 right-0 h-screen w-full bg-black-500/10'>
            <motion.div initial={{ bottom: -400}} whileInView={{bottom: 0}} transition={{duration: 0.5, type: 'spring'}} ref={reff} className='bg-white fixed bottom-0 w-[50%] sm:w-full sm:left-0 sm:h-[500px] h-[600px] right-[26.5%] rounded-t-xl py-7 sm:pt-4'>
                <div className='flex justify-between items-center px-6 mb-4'>
                    <h2 className='font-Satoshi font-bold text-black-500/80 text-xl'>Notifications</h2>
                    <span onClick={()=>setNotifications(false)} className='flex justify-center items-center p-2 bg-lemon rounded-full cursor-pointer'>
                        <RxCross2 className='text-black-200 text-xl'/>
                    </span>
                </div>

                <div className='flex flex-col overflow-scroll h-[520px] sm:h-[450px]'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Notification;


const Item = () => {
    return (
        <>
            <div className='flex justify-between items-center gap-8 px-6 py-5 cursor-pointer sm:px-4 sm:py-3'>
                <div className='flex justify-start items-start gap-5 sm:gap-2'>
                    <span className={`bg-grey/50 p-2 rounded-full mt-1`}></span>
                    <div>
                        <h2 className='font-Satoshi font-bold text-black-500/80 text-lg leading-0 sm:text-base'>Product Launch Meeting Reminder</h2>
                        <p className='font-Satoshi font-normal text-black-500/60 text-base leading-5 sm:text-sm sm:leading-4'>Hi team, just a friendly reminder that our highly anticipated product launch meeting is scheduled for tomorrow at 10 AM.</p>
                    </div>
                    <p className='font-Satoshi font-normal text-black-500/60 text-sm leading-5 sm:text-[12px]'>03/24/24</p>
                </div>
                <BiDotsHorizontalRounded className="text-black-500 text-3xl sm:hidden"/>
            </div>
            <hr className='w-full h-[1px] bg-grey/10 opacity-15'/>
        </>
    )
}

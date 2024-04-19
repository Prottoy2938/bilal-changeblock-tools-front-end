import React from 'react'

function NotificationSetting() {
    return (
        <div className='flex flex-col gap-3 px-7 sm:px-0'>
            <div className='flex flex-col gap-1'>
                <h1 className='capitalize text-black-200 font-Satoshi font-extrabold text-xl sm:text-base'>Push Notification</h1>
                <p className='text-black-50 font-Satoshi leading-5 font-normal text-base sm:w-full'>Easily manage your notification preferences to ensure you stay informed about the events that matter most to you. Enable this feature to receive instant updates, event reminders, and important announcements. You'll never miss a memorable moment or exciting update.</p>
            </div>

            <div className='flex justify-between items-center gap-0.5 mt-3'>
                <div className='flex flex-col gap-1 w-1/2 sm:w-[75%]'>
                    <h1 className='capitalize text-black-200 font-Satoshi font-extrabold text-base sm:text-sm'>Reminders</h1>
                    <p className='text-black-50 font-Satoshi leading-5 font-normal text-base sm:w-full sm:text-[13px] sm:leading-4'>These are notifications to remind you of updates that you might have missed.</p>
                </div>
                <label class="switch">
                    <input type="checkbox" defaultChecked />
                    <span class="slider round"></span>
                </label>
            </div>
            <div className='flex justify-between items-center gap-0.5 mt-3'>
                <div className='flex flex-col gap-1 w-1/2 sm:w-[75%]'>
                    <h1 className='capitalize text-black-200 font-Satoshi font-extrabold text-base sm:text-sm'>More Activity</h1>
                    <p className='text-black-50 font-Satoshi leading-5 font-normal text-base sm:w-full sm:text-[13px] sm:leading-4'>These are notifications to remind you of updates that you might have missed.</p>
                </div>
                <label class="switch">
                    <input type="checkbox" defaultChecked />
                    <span class="slider round"></span>
                </label>
            </div>
            <div className='flex justify-between items-center gap-0.5 mt-3'>
                <div className='flex flex-col gap-1 w-1/2 sm:w-[75%]'>
                    <h1 className='capitalize text-black-200 font-Satoshi font-extrabold text-base sm:text-sm'>Enable Desktop Notification</h1>
                    <p className='text-black-50 font-Satoshi leading-5 font-normal text-base sm:w-full  sm:text-[13px] sm:leading-4'>These are notifications to remind you of updates that you might have missed.</p>
                </div>
                <label class="switch">
                    <input type="checkbox" defaultChecked />
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    )
}

export default NotificationSetting

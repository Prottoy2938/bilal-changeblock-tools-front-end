import React, { useEffect, useState } from 'react'
import ScrollableFeed from 'react-scrollable-feed'
import { Rings } from "react-loader-spinner";
import TypingEffect from './TypingEffect';
import { MdDownload } from 'react-icons/md';

function Chat({ chats, app, id, loading }) {

    const print = ()=>{
        const printContent = document.createElement('div');
        const chatComponent = document.getElementById('chatComponent');
        const clonedChat = chatComponent.cloneNode(true);
        printContent.appendChild(clonedChat);

        const images = printContent.querySelectorAll('img');
        images.forEach(img => img.remove());
    
    
        const printWindow = window.open('', '_blank');
        const printDocument = printWindow.document;
        printDocument.close();
        
        printDocument.write(`
            <html>
            <head>
            <title>Print</title>
            <style>
            @media print {
                /* Add any additional print styles here */
            }
            </style>
            </head>
            <body>
            ${printContent.innerHTML} <!-- Insert the print content -->
            </body>
            </html>
        `);
    
        printWindow.print();
        }
        
        return (
            <div  className='min-h-[60vh] h-[62vh] px-7 sm:px-0'>
        <button onClick={print} className='absolute -top-12 right-0 bg-green-100 px-4 py-1.5 cursor-pointer rounded-lg'><MdDownload className='text-black-500 text-xl'/></button>
    <ScrollableFeed>
        <div id='chatComponent' className='flex flex-col justify-start items-start gap-5 sm:gap-3'>
        {chats.map((c, index) => ( 
            <div key={index} className='flex justify-start items-start gap-4 sm:gap-2 w-full'>
                    {index % 2 !== 0 ?
                    <>
                       <ToolImage app={app} id={id}/>
                       <TypingEffect text={c}/>
                    </>
                    :
                    <>
                        {c?.length > 0 && <>
                        <img src={localStorage.getItem('userImage') || ''} alt='user' className='w-[35px] h-[35px] rounded-full object-cover sm:h-[30px] sm:w-[30px]'/>
                        <p className={`text-left text-base text-black-500 leading-5 font-Satoshi font-normal my-1 w-[95%] sm:text-sm`}>
                            {c}
                        </p>
                        </>}
                    </>
                    }
            </div>))}
            {loading && 
            <div className='flex justify-start items-center gap-2'>
                <ToolImage app={app} id={id}/>
                <Rings
                    visible={true}
                    height="40"
                    width="40"
                    color="#8AC825"
                    ariaLabel="rings-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
                </div>
            }
        </div>
    </ScrollableFeed>
</div>
  )
}

export default Chat


const ToolImage = ({ id, app }) => {
    return    <span className={`
        w-[35px] h-[35px] rounded-md sm:h-[30px] sm:w-[30px]
        ${id == 0 && 'bg-[#D1E7FA] p-[1px]'}
        ${id == 1 && 'bg-[#FCEFCF] p-[1px]'}
        ${id == 2 && 'bg-[#F7D4E2] p-[1px]'}
        ${id == 3 && 'bg-[#CCE7FF] p-[1px]'}
        ${id == 4 && 'bg-[#DDD2F9] p-[1px]'}
        ${id == 5 && 'bg-[#E4CCFF] p-[1px]'}
        ${id == 6 && 'bg-[#DCDFEF] p-[1px]'}
        ${id == 7 && 'bg-[#CEE3FD] p-1'}
        ${id == 8 && 'bg-[#E3D3F8] p-[1px]'}
        ${id == 9 && 'bg-[#DCDFEF] p-[1px]'}
        ${id == 10 && 'bg-[#CEE3FD] p-1'}
        ${id == 11 && 'bg-[#E3D3F8] p-[1px]'}
    `}>
        <img src={app.img} className='w-full h-full object-cover' alt={app.name}/>
    </span>
}

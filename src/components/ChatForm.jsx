import React, { useEffect, useRef, useState } from 'react'
import { GrAttachment } from 'react-icons/gr'
import { MdInsertDriveFile } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx';

function ChatForm({ onSubmit, input, setInput, setFiles,  files, fileAccepted, loading}) {
    
    const ref = useRef()
    const [containerPaddingBottom, setContainerPaddingBottom] = useState(0);

    const autoResize = () => {
        const textarea = document.getElementById('textarea')
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';  
    }

    const handleFiles = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            setFiles([...files, e.target.files[i]])
        }
    }

    const checkPadding = (value) => {
        if(value.length > 127)
            setContainerPaddingBottom('pb-3'); 
        else
            setContainerPaddingBottom('pb-0');
    }

    const onChange = (e) => {
        setInput(e.target.value)
        checkPadding(e.target.value)    
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) { 
            event.preventDefault(); 
            onSubmit(); 
        }
    }

    useEffect(()=>{
        autoResize()
        checkPadding('')
    }, [input])

  return (
    <div className='relative w-full border-[1px] border-grey/70 rounded-xl overflow-hidden'>
       
            <form onSubmit={onSubmit} className={`flex justify-start items-start gap-4  pl-5 pr-2 pt-3 sm:px-3 sm:py-1 min-h-0 ${containerPaddingBottom}`} >
                {fileAccepted && <span onClick={()=>ref?.current.click()} className='flex justify-center items-center p-2 bg-green-100 rounded-full cursor-pointer'>
                    <GrAttachment className="text-black-200 text-lg" />
                </span>}
                <textarea id='textarea' placeholder='Enter task here...' onKeyDown={handleKeyDown} onChange={onChange} onInput={autoResize} className={`z-10 font-Satoshi font-medium text-base sm:text-sm leading-5 w-full text-black-300 pt-2 sm:-mb-2 resize-none min-h-0 max-h-32 bg-transparent outline-none `}/>
                <input ref={ref} type='file' accept='*' multiple className='absolute left-44 opacity-0 -z-50' onClick={(e) => e.stopPropagation()} onChange={handleFiles}/>
                {input.length> 0 && 
                <button disabled={loading} className='disabled:cursor-wait flex justify-center items-center p-2 bg-green-100 mb-1 rounded-lg cursor-pointer self-end'>
                    <RiSendPlaneFill className="text-black-200 text-lg sm:text-sm"/>
                </button>}
                
            </form>

            {files?.length > 0 &&
                <div className='px-4 pt-3'>
                {files.map((f, index) => (
                        <>
                        <div className='flex justify-between items-start gap-4 w-[40%] '>
                            <div className='flex justify-start items-center gap-2'>
                                <MdInsertDriveFile className='text-black-50 text-xl'/>
                                <p className='text-black-30 font-Satoshi leading-5 font-medium text-sm'>{f.name.substr(0,50)}</p>
                            </div>
                            <RxCross2 className='text-black-50 text-lg cursor-pointer' onClick={()=> setFiles(files.filter((_, x) => x !== index))}/>
                        </div>
                        <hr className='w-[40%] h-[2px] bg-black-50 opacity-30 mt-1'/>
                            {index === files?.length - 1 && <br/>}
                        </>
                    ))}

                </div>}
    </div>
  )
}

export default ChatForm

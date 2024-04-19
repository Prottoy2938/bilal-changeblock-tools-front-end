import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { MdInsertDriveFile } from "react-icons/md";
import { RxCross2 } from 'react-icons/rx'
import { TRANSLATE } from '../APis';

function TranslateTool() {
    
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)

    const onDrop = useCallback(acceptedFiles => {
        for (let i = 0; i < acceptedFiles.length; i++) {
            console.log(acceptedFiles[i]);
          setFiles(s => [...s, acceptedFiles[i]])
          
        }
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        maxFiles: 5,
        accept: {
          "application/pdf": [".pdf"],
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            [".docx"],
          "application/msword": [".doc"],
          "text/plain": [".txt"],
        },
    });

    const onSubmit = async(e) => {
        e.preventDefault()

        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('input_file', files[0])

            const x = await TRANSLATE(formData)
        } catch (error) {
            
        }
        setLoading(false)
    }

  return (
    <div  className='flex flex-col justify-start items-start w-full gap-4 relative'>
       <span className='flex flex-col gap-2 w-full animate opacity-0'>
          <label className='font-Satoshi font-normal text-base text-black-50'>Upload File</label>
          <div className='px-5 border-[1px] border-grey rounded-lg py-2'>
              {files.map((f, index) => (
                <>
                  <div className='flex justify-between items-start gap-4 w-[40%] sm:w-full'>
                    <div className='flex justify-start items-center gap-2'>
                        <MdInsertDriveFile className='text-black-50 text-xl'/>
                        <p className='text-black-30 font-Satoshi leading-5 font-medium text-sm'>{f.name}</p>
                    </div>
                    <RxCross2 className='text-black-50 text-lg cursor-pointer' onClick={()=> setFiles(files.filter((_, x) => x !== index))}/>
                  </div>
                  <hr className='w-[40%] h-[2px] bg-black-50 opacity-30 mt-1 mb-2 sm:w-full'/>
                    {index === files?.length - 1 && <br/>}
                </>
              ))}
              <div className='flex justify-between items-center sm:flex-col sm:gap-4'>
                <div className='flex justify-start items-center gap-3 ' {...getRootProps()}>
                  <input {...getInputProps()} required/>
                  <svg width="52" height="52" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className='sm:h-[40px] sm:w-[40px]'>
                    <path d="M15.708 43.5007V43.2832C15.708 41.1927 15.708 39.2739 15.9183 37.7152C16.1478 35.9969 16.6916 34.1796 18.1851 32.6885C19.6786 31.1926 21.4959 30.6488 23.2118 30.4168C24.7729 30.209 26.6918 30.209 28.7846 30.209H29.2148C31.3076 30.209 33.2264 30.209 34.7852 30.4192C36.5034 30.6488 38.3208 31.1926 39.8118 32.6861C41.3078 34.1796 41.8515 35.9969 42.0835 37.7127C42.2889 39.2522 42.2913 41.1347 42.2913 43.1913C48.5094 41.8622 53.1663 36.3957 53.1663 29.8513C53.1663 23.8822 49.2828 18.8023 43.8743 16.9536C43.1058 10.1362 37.2526 4.83398 30.15 4.83398C22.523 4.83398 16.3412 10.9433 16.3412 18.4809C16.3412 20.1484 16.6433 21.7434 17.1967 23.2224C16.5358 23.094 15.8641 23.0292 15.1908 23.0291C9.47059 23.0315 4.83301 27.6135 4.83301 33.2661C4.83301 38.9187 9.47059 43.5007 15.1908 43.5007H15.708Z" fill="#797A76"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9997 33.834C24.4418 33.834 22.1653 33.834 20.7492 35.2502C19.333 36.6663 19.333 38.9428 19.333 43.5007C19.333 48.0585 19.333 50.335 20.7492 51.7512C22.1653 53.1673 24.4418 53.1673 28.9997 53.1673C33.5575 53.1673 35.834 53.1673 37.2502 51.7512C38.6663 50.335 38.6663 48.0585 38.6663 43.5007C38.6663 38.9428 38.6663 36.6663 37.2502 35.2502C35.834 33.834 33.5575 33.834 28.9997 33.834ZM33.3618 41.287L30.1379 38.0656C29.8358 37.7642 29.4264 37.595 28.9997 37.595C28.5729 37.595 28.1636 37.7642 27.8614 38.0656L24.6376 41.287C24.4819 41.4353 24.3575 41.6132 24.2716 41.8103C24.1857 42.0073 24.1401 42.2196 24.1375 42.4346C24.1348 42.6496 24.1752 42.8629 24.2563 43.062C24.3374 43.2611 24.4574 43.442 24.6095 43.594C24.7615 43.7461 24.9424 43.8661 25.1415 43.9472C25.3406 44.0282 25.5539 44.0687 25.7689 44.066C25.9839 44.0634 26.1962 44.0178 26.3932 43.9319C26.5903 43.846 26.7682 43.7216 26.9165 43.5659L27.3878 43.0947V47.7975C27.3878 48.225 27.5576 48.635 27.8599 48.9373C28.1622 49.2396 28.5722 49.4094 28.9997 49.4094C29.4272 49.4094 29.8372 49.2396 30.1395 48.9373C30.4418 48.635 30.6116 48.225 30.6116 47.7975V43.0947L31.0828 43.5659C31.3875 43.856 31.7935 44.0156 32.2142 44.0104C32.6348 44.0053 33.0368 43.8359 33.3343 43.5384C33.6318 43.241 33.8012 42.839 33.8063 42.4183C33.8114 41.9976 33.6519 41.5916 33.3618 41.287Z" fill="#797A76"/>
                  </svg>

                  <div>
                    <h1 className='capitalize text-black-50 font-Satoshi font-extrabold text-base sm:text-sm'>Drag and drop file here</h1>
                    <p className='text-black-30 font-Satoshi leading-5 font-medium text-sm sm:text-[12px] sm:leading-4'>Limit 200MB per file • PDF, DOCX</p>
                  </div>
                </div>
                <button className='rounded-md px-5 py-1 font-Satoshi font-medium text-sm pb-2 bg-transparent text-black-50 cursor-pointer transition-all ease-in duration-150 border-[1px] border-grey'>
                  Browse Files
                </button>
              </div>
          </div>

        </span>

        <button onClick={onSubmit} disabled={loading} className='disabled:opacity-70 disabled:cursor-wait my-3 rounded-md opacity-0 animate px-5 py-1.5 font-Satoshi hover:opacity-80 font-medium text-sm pb-2 bg-green-200 text-white cursor-pointer transition-all ease-in duration-150 border-[1px] border-grey'>
          Process Translation
        </button>
    </div>
  )
}

export default TranslateTool

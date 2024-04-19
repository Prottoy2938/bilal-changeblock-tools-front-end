import React from 'react'

function Input(props) {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <label className='font-Satoshi font-normal text-base text-black-50 sm:text-sm'>{props.label}</label>
        <input 
            className='am:text-sm sm:px-4 sm:py-3 border-grey border-[1px] px-6 py-3 w-full outline-none rounded-lg text-sm text-black-50 placeholder:text-black-50 font-medium bg-transparent'
            placeholder={props.placeholder || ''}
            defaultValue={props.value || ''}
            required={props.required}
            onChange={props.onChange}
            type={props.type}
            readOnly={props.readOnly}
        />
    </div>
  )
}

export default Input

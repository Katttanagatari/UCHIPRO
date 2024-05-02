import React from 'react'

export const Input = ({ label, placeholder, type }) => {
  return (
        <label className='text-grey-1'>{label}
            <input className='bg-grey-6 block w-full h-[36px] rounded-[6px] px-3 mb-[25px] mt-[5px]' placeholder={placeholder} type={type}></input>
        </label>
  )
}

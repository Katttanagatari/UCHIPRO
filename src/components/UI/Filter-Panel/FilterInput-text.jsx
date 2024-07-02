import React from 'react'

export const FilterInputText = ({ children, placeholder, }) => {
  return (
    <div className='flex relative'>
        <input className='rounded-[4px] h-[30px] border-grey-7 border-[1px] w-full px-[10px] py-[8px] text-grey-7' placeholder={placeholder}></input>
        <span className='absolute right-[10px] top-1/2 transform -translate-y-1/2 pointer-events-none text-grey-7'>₽</span>
    </div>
  )
}

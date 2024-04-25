import React from 'react'

export const MainButton = ({ children, bgcolor, textcolor }) => {
  return (
    <button className={`${bgcolor} ${textcolor} w-full h-[42px] px-[16px] py-[10px] rounded-[10px]`}>
        {children}
    </button>
  )
}

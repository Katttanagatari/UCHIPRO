import React from 'react'
import './FilterInputText.css'; // Импортируйте CSS файл

export const FilterInputText = ({ placeholder, name, value, onChange }) => {

  return (
    <div className='flex relative'>
        <input 
          className='rounded-[4px] h-[30px] border-grey-7 border-[1px] w-full px-[10px] py-[8px] text-grey-7' 
          placeholder={placeholder} 
          type='number'
          name={name}
          value={value}
          onChange={onChange}
        >
        </input>
        <span className='absolute right-[10px] top-1/2 transform -translate-y-1/2 pointer-events-none text-grey-7'>₽</span>
    </div>
  )
}

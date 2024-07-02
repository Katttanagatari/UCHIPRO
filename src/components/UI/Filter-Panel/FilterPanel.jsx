import React from 'react'
import { FilterInputText } from './FilterInput-text'

export const FilterPanel = () => {
  return (
    <div className='bg-white h-full w-[274px] ml-auto p-[26px] rounded-[14px]'>
        <div className='font-medium text-grey-1 mb-[18px]'>Цена</div>
        <div className="flex gap-[10px]">        
        <FilterInputText 
          placeholder="от 89"
        />
        <FilterInputText 
          placeholder="до 89999"
        />
        </div>
        <input type="range" min="0" max="89000" step="1" className='w-full'/>
        <div className="">
          <label for="browser">Месяц</label>
          <input list="browsers" name="browser" id="browser" className='bg-grey-6 w-full'/>
        </div>
        <label for="browser">Месяц</label>
        <input list="browsers" name="browser" id="browser" className='bg-grey-6 w-full'/>
        <div className="">Тематика</div>
        <input type="radio" id="html" name="fav_language" value="HTML" />
         <label for="html">Javascript</label>
    </div>
  )
}

import React, { useState, useEffect, useRef } from 'react';
import { FilterInputText } from './FilterInput-text'


export const FilterPanel = () => {
  let maxRangeValue = 5290; 
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(maxRangeValue);
  const priceGap = 800;
  const range = useRef(null);

  const handlePriceInput = (e) => {
    let minVal = parseInt(minPrice, 10);
    let maxVal = parseInt(maxPrice, 10);

    if (e.target.name === 'min') {
      minVal = Math.min(e.target.value, maxVal - priceGap);
      setMinPrice(minVal);
    } else {
      maxVal = Math.max(e.target.value, minVal + priceGap);
      setMaxPrice(maxVal);
    }

    range.current.style.left = (minVal / maxRangeValue) * 100 + '%';
    range.current.style.right = 100 - (maxVal / maxRangeValue) * 100 + '%';
  };

  const handleRangeInput = (e) => {
    let minVal = parseInt(e.target.value, 10);
    let maxVal = parseInt(e.target.value, 10);

    if (e.target.name === 'min') {
      minVal = Math.min(e.target.value, maxPrice - priceGap);
      setMinPrice(minVal);
    } else {
      maxVal = Math.max(e.target.value, minPrice + priceGap);
      setMaxPrice(maxVal);
    }

    range.current.style.left = (minVal / maxRangeValue) * 100 + '%';
    range.current.style.right = 100 - (maxVal / maxRangeValue) * 100 + '%';
  };

  useEffect(() => {
    range.current.style.left = (minPrice / maxRangeValue) * 100 + '%';
    range.current.style.right = 100 - (maxPrice / maxRangeValue) * 100 + '%';
  }, [minPrice, maxPrice, maxRangeValue]);

  return (
    <div className='bg-white h-full w-[274px] ml-auto p-[26px] rounded-[14px]'>
      <div className='font-medium text-grey-1 mb-[18px]'>Цена</div>
      <div className="flex gap-[10px]">
        <FilterInputText
          placeholder="от 89"
          name="min"
          value={minPrice}
          onChange={handlePriceInput}
        />
        <FilterInputText
          placeholder="до 89999"
          name="max"
          value={maxPrice}
          onChange={handlePriceInput}
        />
      </div>
      <div className="bg-grey-1 h-[3px] mt-[20px] mb-[26px] rounded-[5px] relative">
        <div className="h-[3px] bg-primary-blue absolute" ref={range}></div>
      </div>
      <div className="relative">
        <input
          type='range'
          name="min"
          min={0}
          max={maxRangeValue}
          value={minPrice}
          onChange={handleRangeInput}
          className='absolute top-[-29px] h-[3px] w-full appearance-none bg-transparent pointer-events-none'
          style={{ WebkitAppearance: 'none' }}
          
        />
        <input
          type='range'
          name="max"
          min={0}
          max={maxRangeValue}
          value={maxPrice}
          onChange={handleRangeInput}
          className='absolute top-[-29px] h-[3px] w-full appearance-none bg-transparent pointer-events-none'
          style={{ WebkitAppearance: 'none' }}
        />
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            height: 12px;
            width: 12px;
            border-radius: 50%;
            appearance: none;
            pointer-events: auto;
            background: #007AFF;
          }
        `}</style>
      </div>
      {/* Остальные элементы фильтрации */}
    </div>
  );
};
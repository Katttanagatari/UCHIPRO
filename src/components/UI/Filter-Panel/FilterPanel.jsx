import React, { useState, useEffect, useRef } from 'react';
import { FilterInputText } from './FilterInput-text'
import './FilterInputText.css';
import { CoursesCardsData } from '../Courses-Cards/CoursesCardsData';


export const FilterPanel = () => {
  let maxRangeValue = 5290; 
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(maxRangeValue);
  const priceGap = 500;
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
 
  const [checkboxes, setCheckboxes] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const uniqueTags = [...new Set(CoursesCardsData.flatMap(course => course.tags))];
    const initialCheckboxes = uniqueTags.map(tag => ({
      id: tag.toLowerCase().replace(/\s+/g, '-'),
      tags: tag,
      checked: false,
    }));
    setCheckboxes(initialCheckboxes);
  }, []);

  const visibleCheckboxes = checkboxes.slice(0, 4);
  const hiddenCheckboxes = checkboxes.slice(4);


  return (
    <div className='bg-white h-full w-[274px] ml-auto p-[26px] rounded-[14px]'>
      <div className='font-medium text-grey-1 mb-[18px]'>Цена</div>
      <div className="flex gap-[10px]">
        <FilterInputText
          placeholder="от"
          name="min"
          value={minPrice}
          onChange={handlePriceInput}
        />
        <FilterInputText
          placeholder="до"
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
      <form className='flex flex-col'>
        <div className="flex items-center mb-[10px]">
          <label for="dropdown" className='text-grey-1 mx-1'>Месяц</label>
          <div className='w-1.5 h-1.5 bg-primary-blue rounded-full ml-1'></div>
        </div>
          <select id="dropdown" name="dropdown" className='bg-grey-6 px-3 h-9 rounded-[6px] text-grey-1 custom-select'>
              <option value="monthOption1">Январь</option>
              <option value="monthOption2">Февраль</option>
              <option value="monthOption3">Март</option>
              <option value="monthOption4">Апрель</option>
              <option value="monthOption5">Май</option>
              <option value="monthOption6">Июнь</option>
              <option value="monthOption7" selected>Июль</option>
              <option value="monthOption8">Август</option>
              <option value="monthOption9">Сентябрь</option>
              <option value="monthOption10">Октябрь</option>
              <option value="monthOption11">Ноябрь</option>
              <option value="monthOption12">Декабрь</option>
          </select>
      </form>
      <div className="mt-[26px] input__check">
      <div className="font-medium text-[18px]">Тематика</div>
    <div className="flex flex-col">
      {visibleCheckboxes.map((checkbox, index) => (
        <div key={checkbox.id} className="py-2">
          <input 
            type="checkbox" 
            id={checkbox.id} 
            checked={checkbox.checked} 
            onChange={() => {
              const updatedCheckboxes = checkboxes.map(cb => 
                cb.id === checkbox.id ? { ...cb, checked: !cb.checked } : cb
              );
              setCheckboxes(updatedCheckboxes);
            }} 
          />
          <label htmlFor={checkbox.id} className="text-grey-1">{checkbox.tags}</label>
        </div>
      ))}
      {hiddenCheckboxes.length > 0 && !showAll && (
        <div className="py-2 text-grey-1 font-medium" onClick={() => setShowAll(true)}><u>Еще</u> {hiddenCheckboxes.length}</div>
      )}
      {showAll && hiddenCheckboxes.map((checkbox, index) => (
        <div key={checkbox.id} className="py-2">
          <input 
            type="checkbox" 
            id={checkbox.id} 
            checked={checkbox.checked} 
            onChange={() => {
              const updatedCheckboxes = checkboxes.map(el => 
                el.id === checkbox.id ? { ...el, checked: !el.checked } : el
              );
              setCheckboxes(updatedCheckboxes);
            }} 
          />
          <label htmlFor={checkbox.id} className="text-grey-1">{checkbox.tags}</label>
        </div>
      ))}
      {showAll && (
        <div className="py-2 text-grey-1 font-medium" onClick={() => setShowAll(false)}><u>Скрыть  </u></div>
      )}
    </div>
    </div>
    </div>
  );
};
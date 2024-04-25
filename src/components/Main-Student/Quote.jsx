import React from 'react';
import { ReactComponent as QuoteImg } from '../../assets/img/Quote-img.svg';
import { QuoteData } from './QuoteData';

function QuoteText(item) {
  return (
    <div className='w-[800px]'>
      <div className="font-semibold text-[24px] mb-[10px]">{item.title}</div>
      <div className="text-[20px] text-grey-1 leading-[24px]">{item.descr}</div>
    </div>
  )
}

export const Quote = () => {
  return (
    <div className='ml-[22px] my-[22px] rounded-[14px] w-auto bg-white h-[185px] p-[24px] flex'>
        <QuoteImg className='mr-[18px]'/>
        <div>
          <QuoteText title={QuoteData[0].title} descr={QuoteData[0].descr}/>
        </div>
    </div>
  );
};
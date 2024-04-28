import React from 'react';
import { QuoteData } from './QuoteData';

function QuoteItem(item) {
  return (
    <div className="flex">
      <div className="mr-3">
        {item.img}
      </div>
      <div className='max-w-[800px]'>
        <div className="font-semibold text-[24px] mb-[10px]">{item.title}</div>
        <div className="text-[20px] text-grey-1 leading-[24px]">{item.descr}</div>
      </div>
    </div>
  )
}

export const Quote = ({ purpose }) => {
  return (
    <div className='ml-[22px] my-[22px] rounded-[14px] w-auto bg-white h-[185px] p-[24px] flex'>
      <QuoteItem img={QuoteData[purpose].img} />
      <QuoteItem title={QuoteData[purpose].title} descr={QuoteData[purpose].descr}/>
    </div>
  );
};
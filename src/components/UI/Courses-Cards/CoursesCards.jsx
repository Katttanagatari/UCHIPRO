import React from 'react'
import CoursesCalendar from '../../../assets/img/Courses-Calendar.svg'
import { ReactComponent as CoursesLike } from '../../../assets/img/Courses-like.svg';
import { ReactComponent as CoursesBasket } from '../../../assets/img/Courses-Basket.svg';
import { ReactComponent as CoursesBackGroundButton } from '../../../assets/img/Courses-BackgroundButton.svg';
import { MainButton } from '../MainButton';
import { CoursesCardsData } from '../Courses-Cards/CoursesCardsData';

export const CoursesCards = () => {
const blogCourses = CoursesCardsData.map((item) => {
return (
  <div key={item.id} className='bg-white rounded-[14px] p-[26px] w-[437px]'>
    <div className="flex gap-4">
        {item.tags.map((tags, index) => (
          <div key={index} className="text-[14px] text-primary-blue px-3 py-1 bg-grey-6 w-auto rounded-[9px]">{tags}</div>
      ))}
    </div>
    <div className="mx-3 my-4">
        <div className="font-medium text-[20px] w-[230px]">{item.title}</div>
        <div className="font-semibold text-[24px] w-[135px]">2023-2024</div>
        <div className="flex">
          <img src={CoursesCalendar} alt=''/>
          <div className="text-[14px] text-grey-3 ml-[6px] mt-[2px]">{item.date}</div>
        </div>
    </div>
    <div className='bg-primary-blue w-full flex p-3 rounded-[14px] items-center'>
      <div className="flex absolute z-0">
        <CoursesBackGroundButton/>
      </div>
      <div className="mr-[87px] z-10">
        <div className="text-[15px] text-grey-6 text-left">В месяц</div>
        <div className="text-[15px] text-grey-6 text-left font-semibold">от {item.price}₽</div>
      </div>
      <div className="flex gap-3 z-10">
        <MainButton 
        bgcolor={'bg-grey-6'}
        >
          <CoursesLike />
        </MainButton>
        <MainButton 
        bgcolor={'bg-grey-6'}
        >
          <div className="flex gap-[10px]">
            <CoursesBasket /><span className='text-primary-blue'>В&nbsp;&nbsp;корзину</span>
          </div>
        </MainButton>
      </div>
    </div>
  </div>
);
});

return (
  <div className='flex flex-wrap gap-[24px]'>
    {blogCourses}
  </div>
)
}

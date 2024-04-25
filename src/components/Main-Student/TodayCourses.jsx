import React, { useState, useEffect } from 'react';

export const TodayCourses = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 5000); 

    return () => {
      clearInterval(timer); 
    };
  }, []);

  const options = {
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = currentDate.toLocaleDateString('ru-RU', options);

  return (
    <div className="flex">
        <div className="text-[24px] mr-[5px]">План на день</div>
        <span className="pb-10 text-grey-2">{formattedDate}</span>
    </div>
  );
};

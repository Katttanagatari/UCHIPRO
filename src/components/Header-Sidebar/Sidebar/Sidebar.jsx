import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';

export const Sidebar = () => {
  return (
    <div>
      {SidebarData.map((item, index) => {
        const textColorClass = index === 2 ? 'text-black ' : 'text-grey-1 ';
        return (
          <div key={item.path}>
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => {
                return 'flex my-3 w-[210px] py-[10px] px-[18px] rounded-xl mx-[12px] ' + (isActive ? 'bg-grey-6 ' : 'bg-white ');
              }}
            >
              <div className="mr-[12px]">
                {item.icon}
              </div>
              <div className={`${textColorClass} font-medium`}>
                {item.title}
              </div>
            </NavLink>
            {index === 1 && (
              <div className="border-t-[2px] mx-3 opacity-60"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};
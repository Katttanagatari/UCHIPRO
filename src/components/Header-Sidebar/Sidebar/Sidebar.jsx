import { NavLink } from 'react-router-dom' 
import React from 'react';
import { SidebarData } from './SidebarData';

export const Sidebar = () => {
  return (
      <div>
        {SidebarData.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) => {
              return 'flex my-3 w-[210px] py-[10px] px-[18px] rounded-xl mx-[12px] ' + (isActive ? 'bg-grey-6' : 'bg-white')
            }}
          >
            <div className="mr-[12px]">
                  {item.icon}
              </div>
              <div className="text-grey-1 font-medium">
                  {item.title}
              </div>
          </NavLink>
        ))}
      </div>
  );
};
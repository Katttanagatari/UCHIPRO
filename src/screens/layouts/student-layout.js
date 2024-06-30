import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/img/logo.svg';
import { ReactComponent as ShoppingCart } from '../../assets/img/shopping-cart.svg';
import { ReactComponent as Support } from '../../assets/img/support.svg';
import { ReactComponent as Notification } from '../../assets/img/Letter.svg';
import Avatar from '../../assets/img/avatar.png';
import { NavLink } from 'react-router-dom';
import { SidebarData } from '../../components/Header-Sidebar/Sidebar/SidebarData';

function StudentLayout({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <header className="mx-[24px] flex justify-between mt-[13px]">
        <div className="flex items-center">
          <LogoIcon className='mr-4'/>
          <div className="text-[32px] font-rubic font-medium text-primary-blue">УчиПро</div>
        </div>
        <div className='flex items-center'>
          <div className='flex mr-[35px]'>
            <Notification className='mr-[25px]' />
            <Support className='mr-[25px]' />
            <ShoppingCart />
          </div>
          <img src={Avatar} alt="" className="" />
        </div>
      </header>
      <div className="mt-[13px] border-t-[1px] border-gray-6"></div>
      <div className="flex flex-1">
        <div>
          {SidebarData.map((item, index) => {
            const textColorClass = index === 2 ? 'text-black ' : 'text-grey-1 ';
            return (
              <div key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => {
                    return 'flex my-3 w-[210px] py-[10px] px-[18px] rounded-xl mx-[12px] ' + (isActive ? 'bg-grey-6 ' : 'bg-white ');
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <div className="mr-[12px]">
                        {isActive ? item.activeIcon : item.icon}
                      </div>
                      <div className={`${textColorClass} font-medium ${isActive ? 'text-primary-blue' : ''}`}>
                        {item.title}
                      </div>
                    </>
                  )}
                </NavLink>
                {index === 1 && (
                  <div className="border-t-[2px] mx-3 opacity-60"></div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex-1 bg-bg">
          {children}
        </div>
      </div>
    </div>
  );
}

export default StudentLayout;
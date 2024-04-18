import React from 'react'
import Avatar from '../assets/img/avatar.png'
import { ReactComponent as ShoppingCart } from '../assets/img/shopping-cart.svg'
import { ReactComponent as Support } from '../assets/img/support.svg'
import { ReactComponent as Notification } from '../assets/img/notification.svg'

export const UserDashboard = () => {
  return (
    <div className='flex items-center'>
        <div className='flex mr-[35px]'>
            <Notification className='mr-[25px]' />
            <Support className='mr-[25px]' />
            <ShoppingCart />
        </div>
        <img src={Avatar} alt="" className="" />
    </div>
  )
}

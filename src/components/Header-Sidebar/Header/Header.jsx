import React from 'react'
import { Logo } from './logo'
import { UserDashboard } from './user-dashboard'

export const Header = () => {
  return (
    <header className="mx-[24px] flex justify-between mt-[13px]">
      <Logo/>
      <UserDashboard />
    </header>
  )
}

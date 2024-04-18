import React from 'react'
import { ReactComponent as LogoIcon } from '../assets/img/logo.svg'

export const Logo = () => {
  return (
    <div className="flex items-center">
        <LogoIcon className='mr-4'/>
        <div className="text-primary-blue text-[32px]">УчиПро</div>
    </div>
  )
}

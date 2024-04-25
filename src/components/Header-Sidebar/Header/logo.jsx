import React from 'react'
import { ReactComponent as LogoIcon } from '../../../assets/img/logo.svg'

export const Logo = () => {
  return (
    <div className="flex items-center">
        <LogoIcon className='mr-4'/>
        <div className="text-[32px] font-rubic font-medium text-primary-blue">УчиПро</div>
    </div>
  )
}

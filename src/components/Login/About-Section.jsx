import React from 'react'
import { Logo } from '../../components/Header-Sidebar/Header/logo'
import { ReactComponent as Phone } from '../../assets/img/Phone.svg'
import { ReactComponent as Letter } from '../../assets/img/Letter.svg'
import { ReactComponent as Telegram } from '../../assets/img/Telegram.svg'

export const AboutSection = () => {
  return (
    <div className='w-[373px] pt-16'>
    <Logo />
    <div className="text-grey-4 font-medium text-[32px] mt-[32px] leading-9">Интернет-школа курсов: Обучение, которое свободно в вашем графике.</div>
    <div className="mt-[64px]">
      <div className="flex text-primary-blue mb-[12px] items-center">
        <Phone />
        <span className="ml-[14px]">
          89345627385
        </span>
      </div>
      <div className="flex text-primary-blue mb-[12px]">
        <Letter />
        <span className="ml-[14px]">
          supports@ychipro.ru
        </span>
      </div>
      <div className="flex text-grey-4 ml-1">
        <Telegram />
        <span className="ml-[14px]">
          Чат поддержки
        </span>
      </div>
    </div>
  </div>
  )
}

import React from 'react'
import { Input } from './Input'
import { MainButton } from '../UI/MainButton'

export const Register = () => {
  return (
        <div className="w-[360px] mt-16 bg-white rounded-[14px] p-8">
            <div className="w-[190px] mb-3 text-[24px] font-medium text-grey-4">Регистрация на платформе</div>
            <Input 
                label='Почта' 
                placeholder='E-mail'
                type='email'
            />
            <Input 
                label='Пароль' 
                placeholder='Пароль' 
                type='password'
            />
            <div className="mt-[12px]">
                <MainButton 
                    bgcolor={'bg-primary-blue'}
                    textcolor={'text-white'}
                >
                Регистрация
                </MainButton>
                <div className="flex justify-between items-center my-[24px]">
                    <div className="w-[110px] border-t-[2px] bg-grey-1"></div>
                    <div className="text-grey-1">или</div>
                    <div className="w-[110px] border-t-[2px] bg-grey-1"></div>
                </div>
                <MainButton 
                    bgcolor={'bg-grey-6'}
                    textcolor={'text-primary-blue'}
                >
                Авторизация
                </MainButton>
            </div>
        </div>
  )
}

import React from 'react'
import { Input } from './Input'
import { MainButton } from '../UI/MainButton'

export const Login = () => {
  return (
    <div className="w-[360px] ml-[24px] mt-16 h-full bg-white rounded-[14px] p-8">
        <div className="w-[103px] text-[24px] font-medium text-grey-4">Вход на платформу</div>
        <Input 
            label='Логин' 
            placeholder='Логин' 
            type='text'
        />
        <Input 
            label='Пароль' 
            placeholder='Пароль' 
            type='password'
        />
        <div className="text-primary-blue text-[14px]">Забыли пароль?</div>
        <div className="mt-[12px]">
            <MainButton 
                bgcolor={'bg-primary-blue'}
                textcolor={'text-white'}
            >
            Войти
            </MainButton>
            <div className="flex justify-between items-center my-[24px]">
                <div className="w-[84.5px] border-t-[2px] bg-grey-1"></div>
                <div className="text-grey-1">нет аккаунта?</div>
                <div className="w-[84.5px] border-t-[2px] bg-grey-1"></div>
            </div>
            <MainButton 
                bgcolor={'bg-grey-6'}
                textcolor={'text-primary-blue'}
            >
            Регистрация
            </MainButton>
        </div>

    </div>
  )
}

import React from 'react'
import { WrapperRegister } from '../components/WrapperRegister'
import { AboutSection } from '../components/Login/About-Section'
import { Login } from '../components/Login/Login'

export const LoginPage = () => {

  return (
    <div className="bg-bg min-h-screen">
    <WrapperRegister>
      <AboutSection />
      <Login />
    </WrapperRegister>
  </div>
  )
}

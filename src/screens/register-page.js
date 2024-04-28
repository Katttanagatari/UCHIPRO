import React from 'react'
import { WrapperRegister } from '../components/Wrappers/WrapperRegister'
import { AboutSection } from '../components/Login/About-Section'
import { Register } from '../components/Login/Register'

export const RegisterPage = () => {

  return (
    <div className="bg-bg min-h-screen">
    <WrapperRegister>
      <AboutSection />
        <Register />
    </WrapperRegister>
  </div>
  )
}

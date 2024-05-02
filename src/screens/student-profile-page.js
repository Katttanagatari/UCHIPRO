import React from 'react'
import { Wrapper } from '../components/Wrappers/Wrapper';
import { WrapperContent } from '../components/Wrappers/WrapperContent';
import { Quote } from '../components/UI/Quote/Quote';
import StudentLayout from './student-layout';
import { AvatarEmail } from '../components/UI/AvatarEmail';

const StudentProfilePage = () => {
  return (
    <StudentLayout>
        <Wrapper>
            <Quote purpose={'profile-quote'}/>
            <WrapperContent>
                <div className="font-medium text-2xl mb-6">Аккаунт</div>
                <AvatarEmail />
            </WrapperContent>
        </Wrapper>
    </StudentLayout>
  )
}

export default StudentProfilePage
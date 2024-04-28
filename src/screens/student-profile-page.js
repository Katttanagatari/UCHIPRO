import React from 'react'
import { Wrapper } from '../components/Wrappers/Wrapper';
import { WrapperContent } from '../components/Wrappers/WrapperContent';
import { Quote } from '../components/UI/Quote/Quote';
import StudentLayout from './student-layout';

const StudentProfilePage = () => {
  return (
    <StudentLayout>
        <Wrapper>
            <Quote purpose={1}/>
            <WrapperContent>
                123
            </WrapperContent>
        </Wrapper>
    </StudentLayout>
  )
}

export default StudentProfilePage
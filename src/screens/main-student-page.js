import { Quote } from '../components/UI/Quote/Quote';
import { TodayCourses } from '../components/Main-Student/TodayCourses';
import { Wrapper } from '../components/Wrappers/Wrapper';
import { WrapperContent } from '../components/Wrappers/WrapperContent';
import StudentLayout from './layouts/student-layout';

function MainStudentPage() {
  return (
      <StudentLayout>
        <Wrapper>
          <Quote purpose={'student-quote'}/>
            <WrapperContent>
              <TodayCourses />
            </WrapperContent>
        </Wrapper>
      </StudentLayout>
  );
}

export default MainStudentPage;

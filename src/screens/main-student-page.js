import { Quote } from '../components/Main-Student/Quote';
import { TodayCourses } from '../components/Main-Student/TodayCourses';
import { Wrapper } from '../components/Wrapper';
import { WrapperContent } from '../components/WrapperContent';
import StudentLayout from './student-layout';

function MainStudentPage() {
  return (
      <StudentLayout>
        <Wrapper>
          <Quote />
            <WrapperContent>
              <TodayCourses />
            </WrapperContent>
        </Wrapper>
      </StudentLayout>
  );
}

export default MainStudentPage;

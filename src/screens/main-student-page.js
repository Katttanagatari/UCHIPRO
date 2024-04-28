import { Quote } from '../components/UI/Quote/Quote';
import { TodayCourses } from '../components/Main-Student/TodayCourses';
import { Wrapper } from '../components/Wrappers/Wrapper';
import { WrapperContent } from '../components/Wrappers/WrapperContent';
import StudentLayout from './student-layout';

function MainStudentPage() {
  return (
      <StudentLayout>
        <Wrapper>
          <Quote purpose={0}/>
            <WrapperContent>
              <TodayCourses />
            </WrapperContent>
        </Wrapper>
      </StudentLayout>
  );
}

export default MainStudentPage;

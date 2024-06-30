import StudentLayout from './layouts/student-layout';
import { WrapperContent } from '../components/Wrappers/WrapperContent';
import { CoursesCards } from '../components/UI/Courses-Cards/CoursesCards';


function CoursesPage() {
return (
  <StudentLayout>
    <WrapperContent>
      <div className="px-3 text-[24px] font-medium">Курсы</div>
      <div className="flex gap-[24px] mt-[24px]">
        <CoursesCards />
      </div>
    </WrapperContent>
  </StudentLayout>

);
}

export default CoursesPage;

import StudentLayout from './layouts/student-layout';
import { WrapperContent } from '../components/Wrappers/WrapperContent';
import { CoursesCards } from '../components/UI/Courses-Cards/CoursesCards';
import { FilterPanel } from '../components/UI/Filter-Panel/FilterPanel';

function CoursesPage() {
  return (
    <StudentLayout>
      <WrapperContent>
        <div className="px-3 text-[24px] font-medium">Курсы</div>
        <div className="flex mt-[24px]">
          <CoursesCards />
          <FilterPanel />
        </div>
      </WrapperContent>
    </StudentLayout>
  );
}

export default CoursesPage;
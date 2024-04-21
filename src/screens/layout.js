import { Header } from '../components/Header-Sidebar/Header/Header';
import { Sidebar } from '../components/Header-Sidebar/Sidebar/Sidebar';

function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="mt-[13px] border-b-[1px] border-gray-6"></div>
        <div className="flex-grow">
          <Sidebar />
          {/* Остальная часть макета */}
        </div>
    </div>
  );
}

export default Layout;

import { Header } from '../components/Header-Sidebar/Header/Header';
import { Sidebar } from '../components/Header-Sidebar/Sidebar/Sidebar';

function Layout({ children }) {
  return (
      <div className="flex flex-col">
        <Header />
        <div className="mt-[13px] border-t-[1px] border-gray-6">
          <div className="flex h-[836px]">
              <Sidebar />
              { children }
            </div>
        </div>
      </div>
  );
}

export default Layout;

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <aside className="flex-[2]">
        <Sidebar />
      </aside>
      <main className="flex-[10]">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

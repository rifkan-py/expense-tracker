import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#111] min-h-[100vh] sticky top-0 text-gray-500 px-4">
      {/* profile image */}

      <div className="py-9 text-center flex flex-col">
        <img
          className="w-32 h-32 rounded-full self-center"
          src="https://media.licdn.com/dms/image/D5603AQGWFt8gLYEwOg/profile-displayphoto-shrink_800_800/0/1679033448659?e=2147483647&v=beta&t=RecrIcs6MdAhutLde45FQMGPg4sKIAV_cbzXfRlioDY"
          alt=""
        />

        <div className="mt-4">
          <h1 className="text-xl">Mohamed Rifkan</h1>
          <span>Software Engineer</span>
        </div>
      </div>

      {/* sidebar links */}
      <div className="flex flex-col divide-y divide-[#212121] gap-4">
        <div className="flex flex-col">
          <Link to="/" className="px-2 py-1">
            Dashboard
          </Link>
          <Link to="/incomes" className="px-2 py-1">
            Incomes
          </Link>
          <Link to="/expenses" className="px-2 py-1">
            Expenses
          </Link>
          <Link to="/calender" className="px-2 py-1">
            Calender
          </Link>
        </div>
        <div className="flex flex-col">
          <Link to="/settings" className="px-2 py-1">
            Settings
          </Link>
          <Link to="/logout" className="px-2 py-1">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

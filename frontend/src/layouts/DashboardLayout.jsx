import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

const DashboardLayout = ({ children }) => {

  return (

    <div className="flex min-h-screen bg-[#f6f8fc]">

      <Sidebar />

      <main className="flex-1 px-8 py-6 overflow-y-auto">

        <Topbar />

        {children}

      </main>

    </div>

  );

};

export default DashboardLayout;
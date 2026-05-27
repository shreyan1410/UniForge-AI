import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {

  return (

    <div className="flex flex-col md:flex-row min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <main className="flex-1 p-6 md:p-8">

        {children}

      </main>

    </div>

  );
};

export default DashboardLayout;
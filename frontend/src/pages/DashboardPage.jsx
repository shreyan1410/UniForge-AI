import DashboardLayout from "../layouts/DashboardLayout";

const DashboardPage = () => {

  return (

    <DashboardLayout>

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-5xl font-bold text-blue-400">
            Dashboard
          </h1>

          <p className="mt-3 text-gray-400 text-lg">
            Welcome back to UniForge AI
          </p>

        </div>

        <button className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600">

          Upgrade Pro

        </button>

      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

          <h2 className="text-xl font-semibold text-gray-300">
            Study Hours
          </h2>

          <p className="text-5xl mt-4 text-blue-400 font-bold">
            24h
          </p>

          <p className="mt-2 text-green-400">
            +12% this week
          </p>

        </div>


        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

          <h2 className="text-xl font-semibold text-gray-300">
            Coding Streak
          </h2>

          <p className="text-5xl mt-4 text-green-400 font-bold">
            12
          </p>

          <p className="mt-2 text-gray-400">
            Days Active
          </p>

        </div>


        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

          <h2 className="text-xl font-semibold text-gray-300">
            Resume Score
          </h2>

          <p className="text-5xl mt-4 text-yellow-400 font-bold">
            82%
          </p>

          <p className="mt-2 text-gray-400">
            ATS Optimized
          </p>

        </div>

      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

          <h2 className="text-2xl font-bold mb-5">
            AI Tools
          </h2>

          <div className="flex flex-col gap-4">

            <button className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 text-left">

              AI Resume Analyzer

            </button>

            <button className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 text-left">

              Mock Interview Generator

            </button>

            <button className="bg-slate-800 p-4 rounded-xl hover:bg-slate-700 text-left">

              Study Notes Generator

            </button>

          </div>

        </div>


        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

          <h2 className="text-2xl font-bold mb-5">
            Daily Goals
          </h2>

          <div className="flex flex-col gap-4">

            <div className="bg-slate-800 p-4 rounded-xl">

              Complete DSA Practice

            </div>

            <div className="bg-slate-800 p-4 rounded-xl">

              Upload Resume

            </div>

            <div className="bg-slate-800 p-4 rounded-xl">

              Revise DBMS Notes

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );
};

export default DashboardPage;
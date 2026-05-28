import { Bell, Search } from "lucide-react";

import { useModule } from "../context/ModuleContext";

const Topbar = () => {

  const { module } = useModule();

  return (

    <div className="flex items-center justify-between mb-8">

      {/* LEFT */}

      <div>

        <p className={`text-sm font-medium ${
          module === "placement"
            ? "text-blue-500"
            : "text-purple-500"
        }`}>

          {
            module === "placement"
              ? "Placement Ecosystem"
              : "Learning Ecosystem"
          }

        </p>

        <h1 className="text-2xl font-semibold text-slate-800 mt-1">

          {
            module === "placement"
              ? "Career Dashboard"
              : "Learning Dashboard"
          }

        </h1>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-4">

        {/* SEARCH */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none w-64"
          />

        </div>

        {/* NOTIFICATION */}

        <button className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center">

          <Bell size={18} className="text-slate-500" />

        </button>

        {/* PROFILE */}

        <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-3 py-2">

          <div className={`w-9 h-9 rounded-full ${
            module === "placement"
              ? "bg-gradient-to-r from-blue-500 to-indigo-500"
              : "bg-gradient-to-r from-purple-500 to-pink-500"
          }`}></div>

          <div>

            <h3 className="text-sm font-medium text-slate-700">

              Shreyan

            </h3>

            <p className="text-xs text-slate-400">

              Student

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Topbar;
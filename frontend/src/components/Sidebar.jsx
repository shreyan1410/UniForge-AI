import {
  LayoutDashboard,
  FileText,
  Brain,
  BookOpen,
  Target,
  User,
  LogOut
} from "lucide-react";

const Sidebar = () => {

  return (

    <div className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

      <h1 className="text-4xl font-bold text-blue-400 mb-12">
        UniForge AI
      </h1>

      <div className="flex flex-col gap-6 text-lg">

        <button className="flex items-center gap-4 hover:text-blue-400 transition">

          <LayoutDashboard size={24} />

          Dashboard

        </button>

        <button className="flex items-center gap-4 hover:text-blue-400 transition">

          <FileText size={24} />

          Resume Analyzer

        </button>

        <button className="flex items-center gap-4 hover:text-blue-400 transition">

          <Brain size={24} />

          AI Assistant

        </button>

        <button className="flex items-center gap-4 hover:text-blue-400 transition">

          <BookOpen size={24} />

          Study Notes

        </button>

        <button className="flex items-center gap-4 hover:text-blue-400 transition">

          <Target size={24} />

          Coding Tracker

        </button>

        <button className="flex items-center gap-4 hover:text-blue-400 transition">

          <User size={24} />

          Profile

        </button>

      </div>

      <button className="flex items-center gap-4 text-red-400 mt-20">

        <LogOut size={24} />

        Logout

      </button>

    </div>

  );
};

export default Sidebar;
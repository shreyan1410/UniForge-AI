import {
  Link,
  useLocation
} from "react-router-dom";

import {
  LayoutDashboard,
  Brain,
  FileText,
  Code2,
  BookOpen,
  Sparkles,
  CalendarDays,
  Rocket,
  Briefcase
} from "lucide-react";

import {
  useModule
} from "../context/ModuleContext";

const Sidebar = () => {

  const {
    module,
    setModule
  } = useModule();

  const location = useLocation();

  return (

    <div className="w-72 min-h-screen bg-white border-r border-slate-200 px-6 py-6 flex flex-col">

      {/* LOGO */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">

          UniForge

          <span className="text-violet-600">

            AI

          </span>

        </h1>

        <p className="text-sm text-slate-500 mt-1">

          AI Student Ecosystem

        </p>

      </div>

      {/* MODULE SWITCH */}

      <div className="mt-8 bg-slate-100 rounded-2xl p-1 flex">

        <button
          onClick={() => setModule("placement")}
          className={`flex-1 py-3 rounded-xl text-sm font-medium transition ${
            module === "placement"
              ? "bg-blue-600 text-white"
              : "text-slate-600"
          }`}
        >

          Placements

        </button>

        <button
          onClick={() => setModule("learning")}
          className={`flex-1 py-3 rounded-xl text-sm font-medium transition ${
            module === "learning"
              ? "bg-violet-600 text-white"
              : "text-slate-600"
          }`}
        >

          Learning

        </button>

      </div>

      {/* MENU */}

      <div className="mt-10 flex flex-col gap-2">

        {/* DASHBOARD */}

        <Link
          to="/dashboard"
          className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
            location.pathname === "/dashboard"
              ? module === "placement"
                ? "bg-blue-50 text-blue-700"
                : "bg-violet-50 text-violet-700"
              : "hover:bg-slate-100 text-slate-700"
          }`}
        >

          <LayoutDashboard size={20} />

          Dashboard

        </Link>

        {/* ====================== */}
        {/* PLACEMENT MODULE */}
        {/* ====================== */}

        {

          module === "placement" && (

            <>

              {/* RESUME */}

              <Link
                to="/ai-resume"
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                  location.pathname === "/ai-resume"
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >

                <FileText size={20} />

                Resume Analyzer
<Link
  to="/resume-builder"
  className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
    location.pathname === "/resume-builder"
      ? "bg-blue-50 text-blue-700"
      : "hover:bg-slate-100 text-slate-700"
  }`}
>

  <FileText size={20} />

  Resume Builder

</Link>
              </Link>

              {/* MOCK INTERVIEW */}

              <Link
                to="/mock-interview"
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                  location.pathname === "/mock-interview"
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >

                <Brain size={20} />

                Mock Interview

              </Link>

              {/* CAREER ROADMAP */}

              <Link
                to="/career-roadmap"
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                  location.pathname === "/career-roadmap"
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >

                <Rocket size={20} />

                Career Roadmap

              </Link>

              {/* LINKEDIN */}

              <Link
                to="/linkedin-optimizer"
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                  location.pathname === "/linkedin-optimizer"
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >

                <Briefcase size={20} />

                LinkedIn Optimizer

              </Link>

              {/* CODING */}

              <Link
                to="/coding"
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                  location.pathname === "/coding"
                    ? "bg-blue-50 text-blue-700"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >

                <Code2 size={20} />

                Coding Tracker

              </Link>

            </>

          )

        }

        {/* ====================== */}
        {/* LEARNING MODULE */}
        {/* ====================== */}

        {

          module === "learning" && (

            <>

              {/* LEARNING HUB */}

              <Link
                to="/learning"
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                  location.pathname === "/learning"
                    ? "bg-violet-50 text-violet-700"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >

                <BookOpen size={20} />

                Learning Hub

              </Link>

              {/* NOTES */}

              <Link
                to="/notes-summarizer"
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                  location.pathname === "/notes-summarizer"
                    ? "bg-violet-50 text-violet-700"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >

                <FileText size={20} />

                Notes Summarizer

              </Link>

              {/* QUIZ */}

              <Link
                to="/quiz-generator"
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                  location.pathname === "/quiz-generator"
                    ? "bg-violet-50 text-violet-700"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >

                <Sparkles size={20} />

                Quiz Generator

              </Link>

              {/* STUDY PLANNER */}

              <Link
                to="/study-planner"
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition ${
                  location.pathname === "/study-planner"
                    ? "bg-violet-50 text-violet-700"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >

                <CalendarDays size={20} />

                Study Planner

              </Link>

            </>

          )

        }

      </div>

    </div>

  );

};

export default Sidebar;
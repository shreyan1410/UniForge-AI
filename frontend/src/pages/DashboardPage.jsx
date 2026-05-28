import DashboardLayout from "../layouts/DashboardLayout";

import {
  useModule
} from "../context/ModuleContext";

import {
  Brain,
  Briefcase,
  BookOpen,
  TrendingUp
} from "lucide-react";

const DashboardPage = () => {

  const { module } = useModule();

  return (

    <DashboardLayout>

      {/* HERO SECTION */}

      <div className={`rounded-3xl p-8 text-white relative overflow-hidden ${
        module === "placement"
          ? "bg-gradient-to-r from-blue-600 to-indigo-600"
          : "bg-gradient-to-r from-violet-600 to-fuchsia-600"
      }`}>

        <div className="relative z-10">

          <p className="text-sm opacity-80 mb-2">

            Welcome back 👋

          </p>

          <h1 className="text-4xl font-bold mb-4 leading-tight max-w-xl">

            {
              module === "placement"
                ? "Your AI Placement Preparation Ecosystem"
                : "Your Personalized AI Learning Ecosystem"
            }

          </h1>

          <p className="text-sm opacity-90 max-w-lg leading-7">

            {
              module === "placement"
                ? "Track coding progress, analyze resumes, prepare for interviews, and boost placement readiness."
                : "Learn smarter with AI tutoring, study planning, adaptive learning paths, and productivity tracking."
            }

          </p>

          <button className="mt-6 bg-white text-slate-900 px-5 py-3 rounded-2xl font-medium text-sm">

            Explore Features

          </button>

        </div>

        <div className="absolute right-[-50px] top-[-50px] w-72 h-72 bg-white/10 rounded-full"></div>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <div className="bg-white rounded-3xl p-6 border border-slate-200">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">

                Progress

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                82%

              </h2>

            </div>

            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
              module === "placement"
                ? "bg-blue-100"
                : "bg-violet-100"
            }`}>

              <TrendingUp
                className={
                  module === "placement"
                    ? "text-blue-600"
                    : "text-violet-600"
                }
              />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">

                AI Sessions

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                24

              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">

              <Brain className="text-pink-600" />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">

                Tasks Done

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                18

              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">

              <BookOpen className="text-emerald-600" />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">

                Opportunities

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                12

              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">

              <Briefcase className="text-orange-600" />

            </div>

          </div>

        </div>

      </div>

      {/* SECOND SECTION */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* ROADMAP */}

        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-xl font-semibold text-slate-800">

                {
                  module === "placement"
                    ? "Placement Roadmap"
                    : "Learning Roadmap"
                }

              </h2>

              <p className="text-sm text-slate-500 mt-1">

                Continue your progress systematically

              </p>

            </div>

            <button className="text-sm text-violet-600 font-medium">

              View All

            </button>

          </div>

          <div className="space-y-5">

            <div className="flex items-start gap-4">

              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${
                module === "placement"
                  ? "bg-blue-600"
                  : "bg-violet-600"
              }`}>

                1

              </div>

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <h3 className="font-medium text-slate-800">

                    {
                      module === "placement"
                        ? "DSA Practice"
                        : "AI Learning Session"
                    }

                  </h3>

                  <span className="text-xs text-slate-400">

                    Today

                  </span>

                </div>

                <p className="text-sm text-slate-500 mt-1">

                  {
                    module === "placement"
                      ? "Solve arrays and recursion problems"
                      : "Continue adaptive AI learning modules"
                  }

                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-700">

                2

              </div>

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <h3 className="font-medium text-slate-800">

                    {
                      module === "placement"
                        ? "Mock Interview"
                        : "Study Revision"
                    }

                  </h3>

                  <span className="text-xs text-slate-400">

                    Tomorrow

                  </span>

                </div>

                <p className="text-sm text-slate-500 mt-1">

                  {
                    module === "placement"
                      ? "AI-generated HR interview session"
                      : "Smart revision recommendations"
                  }

                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-700">

                3

              </div>

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <h3 className="font-medium text-slate-800">

                    {
                      module === "placement"
                        ? "Resume Optimization"
                        : "Quiz Assessment"
                    }

                  </h3>

                  <span className="text-xs text-slate-400">

                    Upcoming

                  </span>

                </div>

                <p className="text-sm text-slate-500 mt-1">

                  {
                    module === "placement"
                      ? "Improve ATS and portfolio quality"
                      : "Evaluate concept understanding"
                  }

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ACTIVITY */}

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <h2 className="text-xl font-semibold text-slate-800">

            Activity

          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-6">

            Your recent ecosystem actions

          </p>

          <div className="space-y-5">

            <div className="flex gap-3">

              <div className="w-3 h-3 rounded-full bg-emerald-500 mt-2"></div>

              <div>

                <p className="text-sm font-medium text-slate-700">

                  Resume analyzed successfully

                </p>

                <span className="text-xs text-slate-400">

                  2 hours ago

                </span>

              </div>

            </div>

            <div className="flex gap-3">

              <div className="w-3 h-3 rounded-full bg-blue-500 mt-2"></div>

              <div>

                <p className="text-sm font-medium text-slate-700">

                  AI session completed

                </p>

                <span className="text-xs text-slate-400">

                  Yesterday

                </span>

              </div>

            </div>

            <div className="flex gap-3">

              <div className="w-3 h-3 rounded-full bg-violet-500 mt-2"></div>

              <div>

                <p className="text-sm font-medium text-slate-700">

                  Progress increased by 12%

                </p>

                <span className="text-xs text-slate-400">

                  3 days ago

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default DashboardPage;
import DashboardLayout from "../layouts/DashboardLayout";

import {
  Brain,
  BookOpen,
  Clock,
  Sparkles,
  Target,
  NotebookPen
} from "lucide-react";

const LearningPage = () => {

  return (

    <DashboardLayout>

      {/* HERO */}

      <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl p-8 text-white">

        <p className="text-sm opacity-80">

          Learning Ecosystem

        </p>

        <h1 className="text-4xl font-bold mt-2">

          AI Learning Hub

        </h1>

        <p className="mt-4 text-sm opacity-90 max-w-2xl leading-7">

          Learn smarter with AI-powered tutoring,
          adaptive study plans,
          productivity tracking,
          revision support,
          and personalized learning guidance.

        </p>

      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">

                Study Hours

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                5.8h

              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center">

              <Clock className="text-violet-600" />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">

                AI Sessions

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                32

              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">

              <Brain className="text-pink-600" />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">

                Productivity

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                92%

              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

              <Target className="text-blue-600" />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">

                Notes Generated

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                18

              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">

              <NotebookPen className="text-emerald-600" />

            </div>

          </div>

        </div>

      </div>

      {/* MAIN SECTION */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* SUBJECTS */}

        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-xl font-semibold text-slate-800">

                Learning Progress

              </h2>

              <p className="text-sm text-slate-500 mt-1">

                Track subject mastery and consistency

              </p>

            </div>

          </div>

          <div className="space-y-6">

            <div>

              <div className="flex justify-between mb-2">

                <p className="text-sm text-slate-600">

                  DBMS

                </p>

                <p className="text-sm font-medium">

                  90%

                </p>

              </div>

              <div className="h-3 bg-slate-100 rounded-full">

                <div className="h-3 w-[90%] bg-violet-600 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <p className="text-sm text-slate-600">

                  Computer Networks

                </p>

                <p className="text-sm font-medium">

                  74%

                </p>

              </div>

              <div className="h-3 bg-slate-100 rounded-full">

                <div className="h-3 w-[74%] bg-pink-600 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <p className="text-sm text-slate-600">

                  Java

                </p>

                <p className="text-sm font-medium">

                  82%

                </p>

              </div>

              <div className="h-3 bg-slate-100 rounded-full">

                <div className="h-3 w-[82%] bg-blue-600 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <p className="text-sm text-slate-600">

                  Operating Systems

                </p>

                <p className="text-sm font-medium">

                  68%

                </p>

              </div>

              <div className="h-3 bg-slate-100 rounded-full">

                <div className="h-3 w-[68%] bg-emerald-600 rounded-full"></div>

              </div>

            </div>

          </div>

        </div>

        {/* AI TOOLS */}

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <h2 className="text-xl font-semibold text-slate-800">

            AI Learning Tools

          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-6">

            Smart tools to accelerate learning

          </p>

          <div className="space-y-4">

            <div className="bg-violet-50 rounded-2xl p-4">

              <div className="flex items-center gap-3">

                <Brain className="text-violet-600" />

                <div>

                  <h3 className="font-medium text-slate-800">

                    AI Tutor

                  </h3>

                  <p className="text-xs text-slate-500 mt-1">

                    Instant concept explanations

                  </p>

                </div>

              </div>

            </div>

            <div className="bg-pink-50 rounded-2xl p-4">

              <div className="flex items-center gap-3">

                <Sparkles className="text-pink-600" />

                <div>

                  <h3 className="font-medium text-slate-800">

                    Quiz Generator

                  </h3>

                  <p className="text-xs text-slate-500 mt-1">

                    AI-generated practice quizzes

                  </p>

                </div>

              </div>

            </div>

            <div className="bg-blue-50 rounded-2xl p-4">

              <div className="flex items-center gap-3">

                <BookOpen className="text-blue-600" />

                <div>

                  <h3 className="font-medium text-slate-800">

                    Smart Notes

                  </h3>

                  <p className="text-xs text-slate-500 mt-1">

                    Generate concise AI notes

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default LearningPage;
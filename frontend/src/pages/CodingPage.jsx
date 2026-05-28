import DashboardLayout from "../layouts/DashboardLayout";

import {
  Flame,
  Trophy,
  Code2,
  Calendar
} from "lucide-react";

const CodingPage = () => {

  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">

        <p className="text-sm opacity-80">

          Placement Ecosystem

        </p>

        <h1 className="text-4xl font-bold mt-2">

          Coding Tracker

        </h1>

        <p className="mt-4 text-sm opacity-90 max-w-2xl leading-7">

          Track coding consistency, monitor DSA preparation,
          and improve placement readiness systematically.

        </p>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">

                Problems Solved

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                248

              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

              <Code2 className="text-blue-600" />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">

                Coding Streak

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                15 Days

              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">

              <Flame className="text-orange-600" />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">

                Contest Rating

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                1672

              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center">

              <Trophy className="text-violet-600" />

            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-500 text-sm">

                Practice Hours

              </p>

              <h2 className="text-3xl font-bold text-slate-800 mt-2">

                124h

              </h2>

            </div>

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">

              <Calendar className="text-emerald-600" />

            </div>

          </div>

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* PROGRESS */}

        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-xl font-semibold text-slate-800">

                DSA Progress

              </h2>

              <p className="text-sm text-slate-500 mt-1">

                Track topic-wise preparation

              </p>

            </div>

          </div>

          <div className="space-y-6">

            <div>

              <div className="flex items-center justify-between mb-2">

                <p className="text-sm text-slate-600">

                  Arrays

                </p>

                <p className="text-sm font-medium">

                  90%

                </p>

              </div>

              <div className="h-3 bg-slate-100 rounded-full">

                <div className="h-3 w-[90%] bg-blue-600 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex items-center justify-between mb-2">

                <p className="text-sm text-slate-600">

                  Linked List

                </p>

                <p className="text-sm font-medium">

                  72%

                </p>

              </div>

              <div className="h-3 bg-slate-100 rounded-full">

                <div className="h-3 w-[72%] bg-violet-600 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex items-center justify-between mb-2">

                <p className="text-sm text-slate-600">

                  Trees

                </p>

                <p className="text-sm font-medium">

                  64%

                </p>

              </div>

              <div className="h-3 bg-slate-100 rounded-full">

                <div className="h-3 w-[64%] bg-pink-600 rounded-full"></div>

              </div>

            </div>

            <div>

              <div className="flex items-center justify-between mb-2">

                <p className="text-sm text-slate-600">

                  Dynamic Programming

                </p>

                <p className="text-sm font-medium">

                  48%

                </p>

              </div>

              <div className="h-3 bg-slate-100 rounded-full">

                <div className="h-3 w-[48%] bg-orange-500 rounded-full"></div>

              </div>

            </div>

          </div>

        </div>

        {/* DAILY GOALS */}

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <h2 className="text-xl font-semibold text-slate-800">

            Daily Goals

          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-6">

            Stay consistent everyday

          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-3">

              <input type="checkbox" />

              <p className="text-sm text-slate-700">

                Solve 3 DSA questions

              </p>

            </div>

            <div className="flex items-center gap-3">

              <input type="checkbox" checked readOnly />

              <p className="text-sm text-slate-700">

                Watch system design video

              </p>

            </div>

            <div className="flex items-center gap-3">

              <input type="checkbox" />

              <p className="text-sm text-slate-700">

                Participate in contest

              </p>

            </div>

            <div className="flex items-center gap-3">

              <input type="checkbox" checked readOnly />

              <p className="text-sm text-slate-700">

                Revise recursion concepts

              </p>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default CodingPage;
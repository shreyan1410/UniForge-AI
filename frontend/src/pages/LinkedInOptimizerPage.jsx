import { useState } from "react";

import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  Briefcase,
  Sparkles
} from "lucide-react";

const LinkedInOptimizerPage = () => {

  const [profileText, setProfileText] =
    useState("");

  const [optimized, setOptimized] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const optimizeProfile = async () => {

    if (!profileText) {

      alert("Enter profile text");

      return;

    }

    try {

      setLoading(true);

      const { data } = await axios.post(

        "http://localhost:5000/api/ai/optimize-profile",

        {

          profileText

        }

      );

      setOptimized(data.optimized);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Optimization failed");

    }

  };

  return (

    <DashboardLayout>

      {/* HERO */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">

        <p className="text-sm opacity-80">

          Placement Ecosystem

        </p>

        <h1 className="text-4xl font-bold mt-2">

          LinkedIn Optimizer

        </h1>

        <p className="mt-4 text-sm opacity-90 max-w-2xl leading-7">

          Improve your LinkedIn profile,
          portfolio summary,
          ATS keywords,
          and recruiter visibility using AI.

        </p>

      </div>

      {/* MAIN */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* LEFT */}

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <h2 className="text-xl font-semibold text-slate-800">

            Enter Profile

          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-6">

            Paste LinkedIn or portfolio content

          </p>

          <textarea
            rows={12}
            placeholder="Paste your LinkedIn summary..."
            value={profileText}
            onChange={(e) =>
              setProfileText(e.target.value)
            }
            className="w-full border border-slate-200 rounded-3xl p-5 outline-none resize-none"
          />

          <button
            onClick={optimizeProfile}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-medium"
          >

            {
              loading
                ? "Optimizing..."
                : "Optimize Profile"
            }

          </button>

        </div>

        {/* RIGHT */}

        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 min-h-[500px]">

          {

            !optimized && !loading && (

              <div className="h-[350px] flex flex-col items-center justify-center text-center">

                <div className="w-24 h-24 rounded-3xl bg-blue-100 flex items-center justify-center">

                  <Briefcase
                    size={40}
                    className="text-blue-600"
                  />

                </div>

                <h2 className="text-2xl font-semibold text-slate-800 mt-6">

                  AI Profile Optimization

                </h2>

                <p className="text-slate-500 mt-3 max-w-md leading-7">

                  Improve recruiter visibility,
                  ATS optimization,
                  and LinkedIn professionalism instantly.

                </p>

              </div>

            )

          }

          {

            loading && (

              <div className="h-[350px] flex items-center justify-center">

                <div className="text-center">

                  <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>

                  <p className="text-slate-500 mt-6">

                    AI is optimizing profile...

                  </p>

                </div>

              </div>

            )

          }

          {

            optimized && !loading && (

              <div className="bg-slate-50 rounded-3xl p-6 overflow-y-auto max-h-[500px]">

                <div className="flex items-center gap-3 mb-5">

                  <Sparkles className="text-blue-600" />

                  <h2 className="text-xl font-semibold text-slate-800">

                    Optimized Profile

                  </h2>

                </div>

                <pre className="whitespace-pre-wrap text-sm leading-8 text-slate-700 font-sans">

                  {optimized}

                </pre>

              </div>

            )

          }

        </div>

      </div>

    </DashboardLayout>

  );

};

export default LinkedInOptimizerPage;
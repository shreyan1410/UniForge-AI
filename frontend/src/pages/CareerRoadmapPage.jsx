import { useState } from "react";

import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  Rocket,
  Sparkles,
  Target,
  BookOpen,
  FolderKanban,
  Award,
  Briefcase
} from "lucide-react";

const CareerRoadmapPage = () => {

  const [career, setCareer] = useState("");

  const [roadmap, setRoadmap] = useState("");

  const [loading, setLoading] = useState(false);

  const generateRoadmap = async () => {

    if (!career) {

      alert("Enter career goal");

      return;

    }

    try {

      setLoading(true);

      const { data } = await axios.post(

        "http://localhost:5000/api/ai/career-roadmap",

        {
          career
        }

      );

      setRoadmap(data.roadmap);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Roadmap generation failed");

    }

  };

  const roadmapSections = roadmap
    ? roadmap.split(/\d+\./).filter(Boolean)
    : [];

  const cards = [
    {
      title: "Skills Required",
      icon: <Target size={22} />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Technologies",
      icon: <BookOpen size={22} />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Projects",
      icon: <FolderKanban size={22} />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Certifications",
      icon: <Award size={22} />,
      color: "bg-pink-50 text-pink-600"
    },
    {
      title: "Interview Prep",
      icon: <Briefcase size={22} />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Career Timeline",
      icon: <Rocket size={22} />,
      color: "bg-green-50 text-green-600"
    }
  ];

  return (

    <DashboardLayout>

      {/* HERO */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-sm">

        <p className="text-sm opacity-80">

          Placement Ecosystem

        </p>

        <h1 className="text-4xl font-bold mt-2">

          AI Career Roadmap

        </h1>

        <p className="mt-4 text-sm opacity-90 max-w-2xl leading-7">

          Generate personalized AI-powered career roadmaps,
          skill plans,
          project paths,
          certifications,
          and interview strategies.

        </p>

      </div>

      {/* MAIN */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* LEFT PANEL */}

        <div className="bg-white rounded-3xl border border-slate-200 p-6 h-fit shadow-sm">

          <h2 className="text-xl font-semibold text-slate-800">

            Career Goal

          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-6">

            Enter your dream role

          </p>

          <textarea
            rows={6}
            placeholder="Example: Full Stack Developer"
            value={career}
            onChange={(e) =>
              setCareer(e.target.value)
            }
            className="w-full border border-slate-200 rounded-3xl p-5 outline-none resize-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={generateRoadmap}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-medium shadow-sm"
          >

            {
              loading
                ? "Generating Roadmap..."
                : "Generate Roadmap"
            }

          </button>

        </div>

        {/* RIGHT PANEL */}

        <div className="xl:col-span-2">

          {/* EMPTY STATE */}

          {

            !roadmap && !loading && (

              <div className="bg-white rounded-3xl border border-slate-200 p-10 min-h-[500px] flex flex-col items-center justify-center text-center shadow-sm">

                <div className="w-24 h-24 rounded-3xl bg-blue-100 flex items-center justify-center">

                  <Rocket
                    size={40}
                    className="text-blue-600"
                  />

                </div>

                <h2 className="text-2xl font-semibold text-slate-800 mt-6">

                  AI Career Planning

                </h2>

                <p className="text-slate-500 mt-3 max-w-md leading-7">

                  Generate intelligent career roadmaps,
                  skills,
                  projects,
                  certifications,
                  and placement strategies instantly.

                </p>

              </div>

            )

          }

          {/* LOADING */}

          {

            loading && (

              <div className="bg-white rounded-3xl border border-slate-200 p-10 min-h-[500px] flex items-center justify-center shadow-sm">

                <div className="text-center">

                  <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>

                  <p className="text-slate-500 mt-6">

                    AI is generating roadmap...

                  </p>

                </div>

              </div>

            )

          }

          {/* ROADMAP */}

          {

            roadmap && !loading && (

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {

                  roadmapSections.map((section, index) => (

                    <div
                      key={index}
                      className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
                    >

                      <div className="flex items-center gap-3">

                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cards[index]?.color}`}>

                          {cards[index]?.icon}

                        </div>

                        <h2 className="text-lg font-semibold text-slate-800">

                          {cards[index]?.title}

                        </h2>

                      </div>

                      <div className="mt-5 text-sm leading-8 text-slate-600 whitespace-pre-wrap">

                        {section.trim()}

                      </div>

                    </div>

                  ))

                }

              </div>

            )

          }

        </div>

      </div>

    </DashboardLayout>

  );

};

export default CareerRoadmapPage;
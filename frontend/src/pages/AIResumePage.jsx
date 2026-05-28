import {
  useState
} from "react";

import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  UploadCloud,
  FileText,
  Sparkles
} from "lucide-react";

const AIResumePage = () => {

  const [resume, setResume] = useState(null);

  const [analysis, setAnalysis] = useState("");

  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {

    if (!resume) {

      alert("Please upload resume");

      return;

    }

    try {

      setLoading(true);

      const formData = new FormData();

      formData.append("resume", resume);

      const { data } = await axios.post(

        "http://localhost:5000/api/ai/resume-analysis",

        formData

      );

      setAnalysis(data.analysis);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Resume analysis failed");

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

          AI Resume Analyzer

        </h1>

        <p className="mt-4 text-sm opacity-90 max-w-2xl leading-7">

          Upload your resume and get AI-powered ATS analysis,
          missing skills detection, resume improvements,
          and career optimization suggestions.

        </p>

      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* LEFT */}

        <div className="xl:col-span-1">

          <div className="bg-white rounded-3xl border border-slate-200 p-6">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">

                <UploadCloud className="text-blue-600" />

              </div>

              <div>

                <h2 className="text-lg font-semibold text-slate-800">

                  Upload Resume

                </h2>

                <p className="text-sm text-slate-500">

                  PDF format only

                </p>

              </div>

            </div>

            {/* UPLOAD BOX */}

            <label className="border-2 border-dashed border-slate-300 rounded-3xl h-64 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">

              <UploadCloud
                size={40}
                className="text-slate-400"
              />

              <p className="text-sm text-slate-500 mt-4">

                Click to upload resume

              </p>

              {

                resume && (

                  <div className="mt-4 flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-xl">

                    <FileText
                      size={18}
                      className="text-blue-600"
                    />

                    <span className="text-sm text-blue-700">

                      {resume.name}

                    </span>

                  </div>

                )

              }

              <input
                type="file"
                hidden
                accept=".pdf"
                onChange={(e) =>
                  setResume(e.target.files[0])
                }
              />

            </label>

            {/* BUTTON */}

            <button
              onClick={analyzeResume}
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-medium"
            >

              {
                loading
                  ? "Analyzing Resume..."
                  : "Analyze Resume"
              }

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="xl:col-span-2">

          <div className="bg-white rounded-3xl border border-slate-200 p-6 min-h-[500px]">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center">

                <Sparkles className="text-violet-600" />

              </div>

              <div>

                <h2 className="text-lg font-semibold text-slate-800">

                  AI Analysis

                </h2>

                <p className="text-sm text-slate-500">

                  Smart resume evaluation

                </p>

              </div>

            </div>

            {

              !analysis && !loading && (

                <div className="h-[350px] flex flex-col items-center justify-center text-center">

                  <div className="w-24 h-24 rounded-3xl bg-slate-100 flex items-center justify-center">

                    <Sparkles
                      size={40}
                      className="text-slate-400"
                    />

                  </div>

                  <h2 className="text-2xl font-semibold text-slate-800 mt-6">

                    AI Resume Insights

                  </h2>

                  <p className="text-slate-500 mt-3 max-w-md leading-7">

                    Upload your resume to receive ATS scoring,
                    technical skill analysis,
                    improvement suggestions,
                    and placement readiness insights.

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

                      AI is analyzing your resume...

                    </p>

                  </div>

                </div>

              )

            }

            {

              analysis && !loading && (

                <div className="bg-slate-50 rounded-3xl p-6 overflow-y-auto max-h-[500px]">

                  <pre className="whitespace-pre-wrap text-sm leading-8 text-slate-700 font-sans">

                    {analysis}

                  </pre>

                </div>

              )

            }

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default AIResumePage;
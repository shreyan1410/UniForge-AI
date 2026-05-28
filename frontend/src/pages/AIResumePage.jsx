import { useState } from "react";

import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

const AIResumePage = () => {

  const [file, setFile] = useState(null);

  const [analysis, setAnalysis] = useState("");

  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {

    try {

      setLoading(true);

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const formData = new FormData();

      formData.append("resume", file);

      const response = await axios.post(

        "http://localhost:5000/api/ai/analyze-resume",

        formData,

        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }

      );

      setAnalysis(response.data.analysis);

      setLoading(false);

    } catch (error) {

      console.log(error);

      alert("AI Analysis Failed");

      setLoading(false);

    }

  };

  return (

    <DashboardLayout>

      <div>

        <h1 className="text-4xl font-bold text-blue-400 mb-8">

          AI Resume Analyzer

        </h1>

        <div className="bg-slate-900 p-10 rounded-2xl border border-slate-800 max-w-3xl">

          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
            className="mb-6"
          />

          <button
            onClick={handleAnalyze}
            className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600"
          >

            Analyze Resume

          </button>

        </div>

        {

          loading && (

            <div className="mt-10 text-xl text-blue-400">

              AI analyzing your resume...

            </div>

          )

        }

        {

          analysis && (

            <div className="bg-slate-900 mt-10 p-8 rounded-2xl border border-slate-800 whitespace-pre-wrap">

              {analysis}

            </div>

          )

        }

      </div>

    </DashboardLayout>

  );
};

export default AIResumePage;
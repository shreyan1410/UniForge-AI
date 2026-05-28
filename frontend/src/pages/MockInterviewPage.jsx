import { useState } from "react";

import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  Brain,
  Sparkles,
  Trophy
} from "lucide-react";

const MockInterviewPage = () => {

  const [type, setType] = useState("HR");

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [feedback, setFeedback] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // START INTERVIEW

  const startInterview = async () => {

    try {

      setLoading(true);

      const { data } = await axios.post(

        "http://localhost:5000/api/ai/start-interview",

        {

          type

        }

      );

      setQuestion(data.question);

      setFeedback("");

      setAnswer("");

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Interview start failed");

    }

  };

  // SUBMIT ANSWER

  const submitAnswer = async () => {

    try {

      setLoading(true);

      const { data } = await axios.post(

        "http://localhost:5000/api/ai/evaluate-answer",

        {

          question,

          answer

        }

      );

      setFeedback(data.feedback);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Evaluation failed");

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

          AI Mock Interview

        </h1>

        <p className="mt-4 text-sm opacity-90 max-w-2xl leading-7">

          Practice real AI-powered interviews
          with professional evaluation and smart feedback.

        </p>

      </div>

      {/* MAIN */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* LEFT */}

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <h2 className="text-xl font-semibold text-slate-800">

            Interview Setup

          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-6">

            Choose your interview type

          </p>

          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
            className="w-full border border-slate-200 rounded-2xl p-4 outline-none"
          >

            <option>HR</option>

            <option>Technical</option>

            <option>Behavioral</option>

          </select>

          <button
            onClick={startInterview}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-medium"
          >

            Start Interview

          </button>

        </div>

        {/* RIGHT */}

        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 min-h-[500px]">

          {

            !question && !loading && (

              <div className="h-[350px] flex flex-col items-center justify-center text-center">

                <div className="w-24 h-24 rounded-3xl bg-blue-100 flex items-center justify-center">

                  <Brain
                    size={40}
                    className="text-blue-600"
                  />

                </div>

                <h2 className="text-2xl font-semibold text-slate-800 mt-6">

                  AI Interview Practice

                </h2>

                <p className="text-slate-500 mt-3 max-w-md leading-7">

                  Practice professional interviews
                  and receive intelligent AI feedback instantly.

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

                    AI is processing...

                  </p>

                </div>

              </div>

            )

          }

          {

            question && !loading && (

              <div>

                {/* QUESTION */}

                <div className="bg-blue-50 rounded-3xl p-6">

                  <div className="flex items-center gap-3 mb-4">

                    <Sparkles className="text-blue-600" />

                    <h2 className="text-xl font-semibold text-slate-800">

                      Interview Question

                    </h2>

                  </div>

                  <p className="text-slate-700 leading-8">

                    {question}

                  </p>

                </div>

                {/* ANSWER */}

                <textarea
                  rows={8}
                  placeholder="Type your answer here..."
                  value={answer}
                  onChange={(e) =>
                    setAnswer(e.target.value)
                  }
                  className="w-full mt-6 border border-slate-200 rounded-3xl p-5 outline-none resize-none"
                />

                <button
                  onClick={submitAnswer}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-2xl font-medium"
                >

                  Submit Answer

                </button>

                {/* FEEDBACK */}

                {

                  feedback && (

                    <div className="mt-8 bg-slate-50 rounded-3xl p-6">

                      <div className="flex items-center gap-3 mb-4">

                        <Trophy className="text-yellow-500" />

                        <h2 className="text-xl font-semibold text-slate-800">

                          AI Feedback

                        </h2>

                      </div>

                      <pre className="whitespace-pre-wrap text-sm leading-8 text-slate-700 font-sans">

                        {feedback}

                      </pre>

                      <button
                        onClick={startInterview}
                        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-2xl"
                      >

                        Next Question

                      </button>

                    </div>

                  )

                }

              </div>

            )

          }

        </div>

      </div>

    </DashboardLayout>

  );

};

export default MockInterviewPage;
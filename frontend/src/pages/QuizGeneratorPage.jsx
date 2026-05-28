import { useState } from "react";

import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  Sparkles,
  Trophy,
  CheckCircle,
  XCircle
} from "lucide-react";

const QuizGeneratorPage = () => {

  const [topic, setTopic] = useState("");

  const [quiz, setQuiz] = useState([]);

  const [loading, setLoading] = useState(false);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [score, setScore] = useState(0);

  const [showResult, setShowResult] =
    useState(false);

  // GENERATE QUIZ

  const generateQuiz = async () => {

    if (!topic) {

      alert("Enter a topic");

      return;

    }

    try {

      setLoading(true);

      const { data } = await axios.post(

        "http://localhost:5000/api/ai/generate-quiz",

        {

          topic

        }

      );

      setQuiz(data.quiz);

      setCurrentQuestion(0);

      setScore(0);

      setShowResult(false);

      setSelectedAnswer("");

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Quiz generation failed");

    }

  };

  // NEXT QUESTION

  const nextQuestion = () => {

    const currentQuiz =
      quiz[currentQuestion];

    if (
      selectedAnswer ===
      currentQuiz.answer
    ) {

      setScore((prev) => prev + 1);

    }

    setSelectedAnswer("");

    if (
      currentQuestion + 1 < quiz.length
    ) {

      setCurrentQuestion((prev) => prev + 1);

    } else {

      setShowResult(true);

    }

  };

  return (

    <DashboardLayout>

      {/* HERO */}

      <div className="bg-gradient-to-r from-violet-600 to-pink-600 rounded-3xl p-8 text-white">

        <p className="text-sm opacity-80">

          Learning Ecosystem

        </p>

        <h1 className="text-4xl font-bold mt-2">

          AI Interactive Quiz

        </h1>

        <p className="mt-4 text-sm opacity-90 max-w-2xl leading-7">

          Generate AI-powered MCQ quizzes
          with real-time scoring and smart assessments.

        </p>

      </div>

      {/* MAIN */}

      <div className="bg-white rounded-3xl border border-slate-200 p-8 mt-8">

        {

          quiz.length === 0 && !loading && (

            <>

              <h2 className="text-2xl font-bold text-slate-800">

                Generate Quiz

              </h2>

              <p className="text-slate-500 mt-2">

                Enter any topic to create AI quiz

              </p>

              <textarea
                rows={5}
                placeholder="Example: DBMS normalization"
                value={topic}
                onChange={(e) =>
                  setTopic(e.target.value)
                }
                className="w-full mt-6 border border-slate-200 rounded-3xl p-5 outline-none resize-none"
              />

              <button
                onClick={generateQuiz}
                className="mt-6 bg-violet-600 hover:bg-violet-700 transition text-white px-8 py-4 rounded-2xl font-medium"
              >

                Generate Quiz

              </button>

            </>

          )

        }

        {

          loading && (

            <div className="h-[400px] flex items-center justify-center">

              <div className="text-center">

                <div className="w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto"></div>

                <p className="text-slate-500 mt-6">

                  AI is generating quiz...

                </p>

              </div>

            </div>

          )

        }

        {

          quiz.length > 0 &&
          !showResult &&
          !loading && (

            <div>

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-2xl font-bold text-slate-800">

                  Question {currentQuestion + 1}

                </h2>

                <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-xl text-sm">

                  {currentQuestion + 1} / {quiz.length}

                </span>

              </div>

              <h3 className="text-xl font-semibold text-slate-800 leading-8">

                {
                  quiz[currentQuestion].question
                }

              </h3>

              <div className="mt-8 space-y-4">

                {

                  quiz[currentQuestion].options.map(

                    (option, index) => (

                      <button
                        key={index}
                        onClick={() =>
                          setSelectedAnswer(option)
                        }
                        className={`w-full text-left p-5 rounded-2xl border transition ${
                          selectedAnswer === option
                            ? "border-violet-600 bg-violet-50"
                            : "border-slate-200 hover:border-violet-300"
                        }`}
                      >

                        {option}

                      </button>

                    )

                  )

                }

              </div>

              <button
                onClick={nextQuestion}
                disabled={!selectedAnswer}
                className="mt-8 bg-violet-600 disabled:bg-slate-300 text-white px-8 py-4 rounded-2xl font-medium"
              >

                Next Question

              </button>

            </div>

          )

        }

        {

          showResult && (

            <div className="text-center py-20">

              <div className="w-24 h-24 rounded-full bg-violet-100 flex items-center justify-center mx-auto">

                <Trophy
                  size={40}
                  className="text-violet-600"
                />

              </div>

              <h2 className="text-4xl font-bold text-slate-800 mt-8">

                Quiz Completed

              </h2>

              <p className="text-slate-500 mt-3">

                Your final score

              </p>

              <h1 className="text-7xl font-bold text-violet-600 mt-6">

                {score}/{quiz.length}

              </h1>

              <div className="mt-10 flex justify-center gap-6">

                <div className="bg-green-50 px-6 py-4 rounded-2xl flex items-center gap-3">

                  <CheckCircle className="text-green-600" />

                  <span className="font-medium text-green-700">

                    Correct: {score}

                  </span>

                </div>

                <div className="bg-red-50 px-6 py-4 rounded-2xl flex items-center gap-3">

                  <XCircle className="text-red-600" />

                  <span className="font-medium text-red-700">

                    Wrong: {quiz.length - score}

                  </span>

                </div>

              </div>

              <button
                onClick={() => {

                  setQuiz([]);

                  setTopic("");

                }}
                className="mt-10 bg-violet-600 text-white px-8 py-4 rounded-2xl"
              >

                Generate New Quiz

              </button>

            </div>

          )

        }

      </div>

    </DashboardLayout>

  );

};

export default QuizGeneratorPage;
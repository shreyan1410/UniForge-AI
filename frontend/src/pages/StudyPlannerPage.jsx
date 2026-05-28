import { useState } from "react";

import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  CalendarDays,
  Sparkles,
  Plus,
  Trash2
} from "lucide-react";

const StudyPlannerPage = () => {

  const [subject, setSubject] = useState("");

  const [examDate, setExamDate] = useState("");

  const [hours, setHours] = useState("");

  const [subjects, setSubjects] = useState([]);

  const [plan, setPlan] = useState("");

  const [loading, setLoading] = useState(false);

  // ADD SUBJECT

  const addSubject = () => {

    if (!subject || !examDate || !hours) {

      alert("Fill all fields");

      return;

    }

    const today = new Date();

    const selectedDate = new Date(examDate);

    // REMOVE TIME
    today.setHours(0,0,0,0);

    if (selectedDate < today) {

      alert("Past exam dates are not allowed");

      return;

    }

    const newSubject = {

      subject,

      examDate,

      hours

    };

    setSubjects((prev) => [

      ...prev,

      newSubject

    ]);

    setSubject("");

    setExamDate("");

    setHours("");

  };

  // DELETE SUBJECT

  const removeSubject = (index) => {

    const updated = [...subjects];

    updated.splice(index, 1);

    setSubjects(updated);

  };

  // GENERATE PLAN

  const generatePlan = async () => {

    if (subjects.length === 0) {

      alert("Add subjects first");

      return;

    }

    try {

      setLoading(true);

      // SORT BY NEAREST EXAM

      const sortedSubjects = [...subjects].sort(

        (a, b) =>

          new Date(a.examDate) -

          new Date(b.examDate)

      );

      const { data } = await axios.post(

        "http://localhost:5000/api/ai/study-plan",

        {

          subjects: sortedSubjects

        }

      );

      setPlan(data.plan);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      alert("Study plan generation failed");

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

          Smart AI Study Planner

        </h1>

        <p className="mt-4 text-sm opacity-90 max-w-2xl leading-7">

          Create intelligent AI-powered study schedules
          based on exam priorities,
          subject deadlines,
          and available study hours.

        </p>

      </div>

      {/* MAIN */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        {/* LEFT */}

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <h2 className="text-xl font-semibold text-slate-800">

            Add Subjects

          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-6">

            Exams with nearest dates get higher priority

          </p>

          {/* SUBJECT */}

          <input
            type="text"
            placeholder="Subject Name"
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)
            }
            className="w-full border border-slate-200 rounded-2xl p-4 outline-none"
          />

          {/* DATE */}

          <input
            type="date"
            value={examDate}
            onChange={(e) =>
              setExamDate(e.target.value)
            }
            className="w-full mt-4 border border-slate-200 rounded-2xl p-4 outline-none"
          />

          {/* HOURS */}

          <input
            type="number"
            placeholder="Daily Study Hours"
            value={hours}
            onChange={(e) =>
              setHours(e.target.value)
            }
            className="w-full mt-4 border border-slate-200 rounded-2xl p-4 outline-none"
          />

          {/* ADD BUTTON */}

          <button
            onClick={addSubject}
            className="w-full mt-5 bg-violet-100 text-violet-700 py-4 rounded-2xl font-medium flex items-center justify-center gap-2"
          >

            <Plus size={18} />

            Add Subject

          </button>

          {/* SUBJECT LIST */}

          <div className="mt-6 space-y-3">

            {

              subjects.map((item, index) => (

                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-4"
                >

                  <div className="flex justify-between items-start">

                    <div>

                      <h3 className="font-medium text-slate-800">

                        {item.subject}

                      </h3>

                      <p className="text-sm text-slate-500 mt-1">

                        Exam: {item.examDate}

                      </p>

                      <p className="text-sm text-slate-500">

                        {item.hours} hrs/day

                      </p>

                    </div>

                    <button
                      onClick={() =>
                        removeSubject(index)
                      }
                    >

                      <Trash2
                        size={18}
                        className="text-red-500"
                      />

                    </button>

                  </div>

                </div>

              ))

            }

          </div>

          {/* GENERATE */}

          <button
            onClick={generatePlan}
            className="w-full mt-6 bg-violet-600 hover:bg-violet-700 transition text-white py-4 rounded-2xl font-medium"
          >

            {
              loading
                ? "Generating Plan..."
                : "Generate AI Study Plan"
            }

          </button>

        </div>

        {/* RIGHT */}

        <div className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 min-h-[500px]">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center">

              <Sparkles className="text-pink-600" />

            </div>

            <div>

              <h2 className="text-lg font-semibold text-slate-800">

                AI Study Schedule

              </h2>

              <p className="text-sm text-slate-500">

                Smart prioritized academic planning

              </p>

            </div>

          </div>

          {

            !plan && !loading && (

              <div className="h-[350px] flex flex-col items-center justify-center text-center">

                <div className="w-24 h-24 rounded-3xl bg-slate-100 flex items-center justify-center">

                  <CalendarDays
                    size={40}
                    className="text-slate-400"
                  />

                </div>

                <h2 className="text-2xl font-semibold text-slate-800 mt-6">

                  Smart Exam Planning

                </h2>

                <p className="text-slate-500 mt-3 max-w-md leading-7">

                  AI automatically prioritizes
                  subjects with nearest exams
                  and creates optimized study schedules.

                </p>

              </div>

            )

          }

          {

            loading && (

              <div className="h-[350px] flex items-center justify-center">

                <div className="text-center">

                  <div className="w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto"></div>

                  <p className="text-slate-500 mt-6">

                    AI is generating your plan...

                  </p>

                </div>

              </div>

            )

          }

          {

            plan && !loading && (

              <div className="bg-slate-50 rounded-3xl p-6 overflow-y-auto max-h-[500px]">

                <pre className="whitespace-pre-wrap text-sm leading-8 text-slate-700 font-sans">

                  {plan}

                </pre>

              </div>

            )

          }

        </div>

      </div>

    </DashboardLayout>

  );

};

export default StudyPlannerPage;
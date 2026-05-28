import {
  useState,
  useRef,
  useEffect
} from "react";

import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

import { useModule } from "../context/ModuleContext";

import {
  SendHorizonal,
  Sparkles
} from "lucide-react";

const AIChatPage = () => {

  const { module } = useModule();

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // AUTO SCROLL

  useEffect(() => {

    bottomRef.current?.scrollIntoView({

      behavior: "smooth"

    });

  }, [messages, loading]);


  // ASK AI

  const askAI = async () => {

    if (!question.trim()) return;

    const userMessage = {

      role: "user",

      text: question

    };

    setMessages((prev) => [

      ...prev,

      userMessage

    ]);

    try {

      setLoading(true);

      const { data } = await axios.post(

        "http://localhost:5000/api/ai/chat",

        {

          question

        }

      );

      const aiMessage = {

        role: "ai",

        text: data.reply

      };

      setMessages((prev) => [

        ...prev,

        aiMessage

      ]);

      setQuestion("");

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      setMessages((prev) => [

        ...prev,

        {

          role: "ai",

          text: "AI request failed. Please try again."

        }

      ]);

    }

  };


  return (

    <DashboardLayout>

      <div className="h-[calc(100vh-120px)] flex flex-col">

        {/* HEADER */}

        <div className={`rounded-3xl p-6 text-white ${
          module === "placement"
            ? "bg-gradient-to-r from-blue-600 to-indigo-600"
            : "bg-gradient-to-r from-violet-600 to-fuchsia-600"
        }`}>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">

              <Sparkles />

            </div>

            <div>

              <h1 className="text-2xl font-bold">

                {
                  module === "placement"
                    ? "AI Career Assistant"
                    : "AI Learning Tutor"
                }

              </h1>

              <p className="text-sm opacity-90 mt-1">

                {
                  module === "placement"
                    ? "Ask interview, coding, resume and career questions."
                    : "Ask academic, study and learning related questions."
                }

              </p>

            </div>

          </div>

        </div>

        {/* CHAT AREA */}

        <div className="flex-1 bg-white rounded-3xl border border-slate-200 mt-6 p-6 overflow-y-auto">

          {

            messages.length === 0 && (

              <div className="h-full flex flex-col items-center justify-center text-center">

                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${
                  module === "placement"
                    ? "bg-blue-100"
                    : "bg-violet-100"
                }`}>

                  <Sparkles
                    size={34}
                    className={
                      module === "placement"
                        ? "text-blue-600"
                        : "text-violet-600"
                    }
                  />

                </div>

                <h2 className="text-2xl font-semibold text-slate-800 mt-6">

                  {
                    module === "placement"
                      ? "Start your placement preparation"
                      : "Start learning with AI"
                  }

                </h2>

                <p className="text-slate-500 mt-3 max-w-md leading-7">

                  {
                    module === "placement"
                      ? "Ask about coding interviews, resume building, placements, DSA and career guidance."
                      : "Ask about subjects, concepts, notes, productivity and learning roadmaps."
                  }

                </p>

              </div>

            )

          }

          {/* MESSAGES */}

          <div className="space-y-5">

            {

              messages.map((msg, index) => (

                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div className={`max-w-2xl px-5 py-4 rounded-3xl text-sm leading-7 whitespace-pre-wrap ${
                    msg.role === "user"
                      ? module === "placement"
                        ? "bg-blue-600 text-white"
                        : "bg-violet-600 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}>

                    {msg.text}

                  </div>

                </div>

              ))

            }

            {

              loading && (

                <div className="flex justify-start">

                  <div className="bg-slate-100 px-5 py-4 rounded-3xl text-sm text-slate-500">

                    ✨ AI is thinking...

                  </div>

                </div>

              )

            }

            <div ref={bottomRef}></div>

          </div>

        </div>

        {/* INPUT */}

        <div className="mt-6 flex gap-4">

          <input
            type="text"
            placeholder={
              module === "placement"
                ? "Ask career or coding questions..."
                : "Ask learning related questions..."
            }
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                askAI();

              }

            }}
            className="flex-1 bg-white border border-slate-200 rounded-2xl px-5 py-4 outline-none"
          />

          <button
            onClick={askAI}
            className={`px-6 rounded-2xl text-white flex items-center justify-center ${
              module === "placement"
                ? "bg-blue-600"
                : "bg-violet-600"
            }`}
          >

            <SendHorizonal size={20} />

          </button>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default AIChatPage;
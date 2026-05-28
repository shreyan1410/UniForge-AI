import { useState } from "react";

import axios from "axios";

import {
  Link,
  useNavigate
} from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: "",
    password: ""

  });

  const changeHandler = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(

        "http://localhost:5000/api/auth/login",

        formData

      );

      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Credentials");

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#f8fafc] flex items-center justify-center px-6">

      {/* Main Container */}

      <div className="w-full max-w-6xl bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/50 overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="p-14 flex flex-col justify-center">

          <h1 className="text-6xl font-black leading-tight text-slate-800">

            Welcome to
            <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">

              UniForge AI

            </span>

          </h1>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">

            Your complete AI ecosystem for
            placement preparation,
            learning, resume building,
            mock interviews, coding,
            and career growth.

          </p>

          {/* Feature Cards */}

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-100">

              <h3 className="font-bold text-purple-600">

                AI Resume

              </h3>

              <p className="text-sm text-slate-500 mt-2">

                ATS analysis & smart improvements

              </p>

            </div>

            <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-100">

              <h3 className="font-bold text-pink-500">

                AI Tutor

              </h3>

              <p className="text-sm text-slate-500 mt-2">

                Learn with AI explanations

              </p>

            </div>

            <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-100">

              <h3 className="font-bold text-blue-500">

                Placement Prep

              </h3>

              <p className="text-sm text-slate-500 mt-2">

                Track coding & interviews

              </p>

            </div>

            <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-100">

              <h3 className="font-bold text-indigo-500">

                Study Module

              </h3>

              <p className="text-sm text-slate-500 mt-2">

                Notes, quizzes & AI learning

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-white/60 p-14 flex items-center justify-center">

          <div className="w-full max-w-md">

            {/* Logo */}

            <h2 className="text-4xl font-black mb-10 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">

              ✦ UniForge AI

            </h2>

            {/* Tabs */}

            <div className="flex gap-8 mb-10">

              <button className="text-2xl font-bold text-purple-600 border-b-4 border-purple-600 pb-2">

                Sign In

              </button>

              <Link
                to="/register"
                className="text-2xl font-bold text-slate-400"
              >

                Sign Up

              </Link>

            </div>

            {/* Form */}

            <form
              onSubmit={submitHandler}
              className="space-y-6"
            >

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={changeHandler}
                className="w-full bg-slate-100 rounded-2xl px-6 py-5 outline-none text-lg"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={changeHandler}
                className="w-full bg-slate-100 rounded-2xl px-6 py-5 outline-none text-lg"
              />

              <div className="flex justify-between text-sm text-slate-500">

                <label className="flex items-center gap-2">

                  <input type="checkbox" />

                  Remember me

                </label>

                <button
                  type="button"
                  className="text-purple-600 font-semibold"
                >

                  Forgot Password?

                </button>

              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl text-white text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 shadow-xl hover:scale-[1.02] transition"
              >

                Continue →

              </button>

            </form>

            {/* Bottom */}

            <p className="mt-8 text-center text-slate-400 text-sm">

              AI Powered Student Ecosystem

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default LoginPage;
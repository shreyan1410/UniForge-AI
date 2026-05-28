import { useState } from "react";

import axios from "axios";

import {
  Link,
  useNavigate
} from "react-router-dom";

const RegisterPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    name: "",
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

      await axios.post(

        "http://localhost:5000/api/auth/register",

        formData

      );

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      alert("Registration Failed");

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#f8fafc] flex items-center justify-center px-6">

      {/* Main Container */}

      <div className="w-full max-w-6xl bg-white/70 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white/50 overflow-hidden grid md:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="p-14 flex flex-col justify-center">

          <h1 className="text-6xl font-black leading-tight text-slate-800">

            Build Your
            <span className="block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">

              Future Faster

            </span>

          </h1>

          <p className="mt-6 text-slate-500 text-lg leading-relaxed">

            Join UniForge AI and unlock
            personalized AI learning,
            placement preparation,
            resume analysis,
            coding practice,
            and mentorship tools.

          </p>

          {/* Stats Cards */}

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-100">

              <h3 className="text-4xl font-black text-purple-600">

                95%

              </h3>

              <p className="text-slate-500 mt-2">

                Resume Accuracy

              </p>

            </div>

            <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-100">

              <h3 className="text-4xl font-black text-blue-500">

                AI

              </h3>

              <p className="text-slate-500 mt-2">

                Career Assistance

              </p>

            </div>

            <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-100">

              <h3 className="text-4xl font-black text-pink-500">

                24/7

              </h3>

              <p className="text-slate-500 mt-2">

                Smart Tutor Support

              </p>

            </div>

            <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-100">

              <h3 className="text-4xl font-black text-indigo-500">

                +100

              </h3>

              <p className="text-slate-500 mt-2">

                Learning Resources

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

              <Link
                to="/login"
                className="text-2xl font-bold text-slate-400"
              >

                Sign In

              </Link>

              <button className="text-2xl font-bold text-purple-600 border-b-4 border-purple-600 pb-2">

                Sign Up

              </button>

            </div>

            {/* Form */}

            <form
              onSubmit={submitHandler}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={changeHandler}
                className="w-full bg-slate-100 rounded-2xl px-6 py-5 outline-none text-lg"
              />

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

              <button
                type="submit"
                className="w-full py-5 rounded-2xl text-white text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 shadow-xl hover:scale-[1.02] transition"
              >

                Create Account →

              </button>

            </form>

            {/* Bottom */}

            <p className="mt-8 text-center text-slate-400 text-sm">

              Your AI Powered Career Journey Starts Here

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default RegisterPage;
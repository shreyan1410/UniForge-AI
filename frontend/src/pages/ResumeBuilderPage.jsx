import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import {
  FileText,
  Sparkles
} from "lucide-react";

const ResumeBuilderPage = () => {

  const [template, setTemplate] =
    useState("modern");

  const [formData, setFormData] =
    useState({

      name: "",

      role: "",

      email: "",

      phone: "",

      summary: "",

      skills: "",

      education: "",

      projects: "",

      experience: ""

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  return (

    <DashboardLayout>

      {/* HERO */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">

        <p className="text-sm opacity-80">

          Placement Ecosystem

        </p>

        <h1 className="text-4xl font-bold mt-2">

          AI Resume Builder

        </h1>

        <p className="mt-4 text-sm opacity-90 max-w-2xl leading-7">

          Build professional ATS-friendly resumes
          with elegant templates,
          aligned layouts,
          and modern recruiter-focused designs.

        </p>

      </div>

      {/* MAIN */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        {/* LEFT */}

        <div className="bg-white rounded-3xl border border-slate-200 p-6">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-slate-800">

                Resume Details

              </h2>

              <p className="text-sm text-slate-500 mt-1">

                Fill professional details

              </p>

            </div>

            <Sparkles className="text-blue-600" />

          </div>

          {/* TEMPLATE */}

          <div className="mt-6">

            <p className="text-sm font-medium text-slate-700 mb-3">

              Resume Template

            </p>

            <div className="grid grid-cols-3 gap-3">

              <button
                onClick={() =>
                  setTemplate("modern")
                }
                className={`p-3 rounded-2xl border text-sm font-medium transition ${
                  template === "modern"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-slate-200"
                }`}
              >

                Modern

              </button>

              <button
                onClick={() =>
                  setTemplate("minimal")
                }
                className={`p-3 rounded-2xl border text-sm font-medium transition ${
                  template === "minimal"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-slate-200"
                }`}
              >

                Minimal

              </button>

              <button
                onClick={() =>
                  setTemplate("creative")
                }
                className={`p-3 rounded-2xl border text-sm font-medium transition ${
                  template === "creative"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-slate-200"
                }`}
              >

                Creative

              </button>

            </div>

          </div>

          {/* FORM */}

          <div className="mt-6 space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none"
            />

            <input
              type="text"
              name="role"
              placeholder="Professional Role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none"
            />

            <textarea
              rows={4}
              name="summary"
              placeholder="Professional Summary"
              value={formData.summary}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none resize-none"
            />

            <textarea
              rows={3}
              name="skills"
              placeholder="Skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none resize-none"
            />

            <textarea
              rows={3}
              name="education"
              placeholder="Education"
              value={formData.education}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none resize-none"
            />

            <textarea
              rows={4}
              name="projects"
              placeholder="Projects"
              value={formData.projects}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none resize-none"
            />

            <textarea
              rows={4}
              name="experience"
              placeholder="Experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded-2xl p-4 outline-none resize-none"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="sticky top-6 h-fit">

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">

            {/* TEMPLATE HEADER */}

            <div className={`p-8 text-white ${
              template === "modern"
                ? "bg-blue-600"
                : template === "minimal"
                ? "bg-slate-800"
                : "bg-gradient-to-r from-purple-600 to-pink-600"
            }`}>

              <h1 className="text-4xl font-bold">

                {
                  formData.name || "Your Name"
                }

              </h1>

              <p className="text-lg mt-2 opacity-90">

                {
                  formData.role || "Professional Role"
                }

              </p>

              <div className="flex gap-6 mt-4 text-sm opacity-90">

                <span>

                  {formData.email || "email@example.com"}

                </span>

                <span>

                  {formData.phone || "+91 9876543210"}

                </span>

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-8 space-y-8">

              {/* SUMMARY */}

              <div>

                <h2 className="text-lg font-bold text-slate-800 border-b pb-2">

                  Professional Summary

                </h2>

                <p className="text-sm text-slate-600 leading-7 mt-3">

                  {
                    formData.summary ||
                    "Professional summary appears here..."
                  }

                </p>

              </div>

              {/* SKILLS */}

              <div>

                <h2 className="text-lg font-bold text-slate-800 border-b pb-2">

                  Skills

                </h2>

                <p className="text-sm text-slate-600 leading-7 mt-3">

                  {
                    formData.skills ||
                    "Skills appear here..."
                  }

                </p>

              </div>

              {/* EDUCATION */}

              <div>

                <h2 className="text-lg font-bold text-slate-800 border-b pb-2">

                  Education

                </h2>

                <p className="text-sm text-slate-600 leading-7 mt-3">

                  {
                    formData.education ||
                    "Education details appear here..."
                  }

                </p>

              </div>

              {/* PROJECTS */}

              <div>

                <h2 className="text-lg font-bold text-slate-800 border-b pb-2">

                  Projects

                </h2>

                <p className="text-sm text-slate-600 leading-7 mt-3">

                  {
                    formData.projects ||
                    "Project details appear here..."
                  }

                </p>

              </div>

              {/* EXPERIENCE */}

              <div>

                <h2 className="text-lg font-bold text-slate-800 border-b pb-2">

                  Experience

                </h2>

                <p className="text-sm text-slate-600 leading-7 mt-3">

                  {
                    formData.experience ||
                    "Experience appears here..."
                  }

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default ResumeBuilderPage;
import { useState } from "react";

import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";

const ResumePage = () => {

  const [file, setFile] = useState(null);

  const handleUpload = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const formData = new FormData();

      formData.append("resume", file);

      await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );

      alert("Resume Uploaded Successfully");

    } catch (error) {

      console.log(error);

      alert("Upload Failed");

    }

  };

  return (

    <DashboardLayout>

      <div>

        <h1 className="text-4xl font-bold text-blue-400 mb-8">

          Resume Upload

        </h1>

        <div className="bg-slate-900 p-10 rounded-2xl border border-slate-800 max-w-2xl">

          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
            className="mb-6"
          />

          <button
            onClick={handleUpload}
            className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600"
          >

            Upload Resume

          </button>

        </div>

      </div>

    </DashboardLayout>

  );
};

export default ResumePage;
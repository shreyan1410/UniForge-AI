import { useState } from "react";

import Navbar from "../components/Navbar";

import { registerUser } from "../services/authService";

const RegisterPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await registerUser(formData);

      alert("Registration Successful");

    } catch (error) {

      alert("Registration Failed");

    }

  };

  return (

    <div>

      <Navbar />

      <div className="flex items-center justify-center h-[90vh]">

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-10 rounded-xl w-[400px]"
        >

          <h2 className="text-4xl font-bold mb-8 text-center">
            Register
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={handleChange}
            className="w-full p-4 mb-5 rounded bg-slate-700 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            className="w-full p-4 mb-5 rounded bg-slate-700 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            className="w-full p-4 mb-5 rounded bg-slate-700 outline-none"
          />

          <button
            className="w-full bg-blue-500 p-4 rounded hover:bg-blue-600"
          >
            Register
          </button>

        </form>

      </div>

    </div>

  );
};

export default RegisterPage;
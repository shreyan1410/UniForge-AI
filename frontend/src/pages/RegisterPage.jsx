import { useState } from "react";

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

      const data = await registerUser(formData);

      console.log(data);

      alert("Registration Successful");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }

  };

  return (

    <div className="flex items-center justify-center h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 rounded-xl w-[400px]"
      >

        <h2 className="text-3xl font-bold mb-6 text-center">
          Register
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-700 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-700 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-700 outline-none"
        />

        <button
          className="w-full bg-blue-500 p-3 rounded hover:bg-blue-600"
        >
          Register
        </button>

      </form>

    </div>

  );
};

export default RegisterPage;
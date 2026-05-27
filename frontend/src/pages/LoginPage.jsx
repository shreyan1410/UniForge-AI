import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const LoginPage = () => {

  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
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

      const data = await loginUser(formData);

      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );

      setUser(data);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Invalid Credentials");

    }

  };

  return (

    <div className="flex items-center justify-center h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 rounded-xl w-[400px]"
      >

        <h2 className="text-3xl font-bold mb-6 text-center">
          Login
        </h2>

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
        <div>

  <Navbar />

  PAGE CONTENT

</div>

        <button
          className="w-full bg-blue-500 p-3 rounded hover:bg-blue-600"
        >
          Login
        </button>

      </form>

    </div>

  );
};

export default LoginPage;
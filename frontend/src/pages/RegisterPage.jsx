const RegisterPage = () => {
  return (

    <div className="flex items-center justify-center h-screen">

      <form className="bg-slate-800 p-10 rounded-xl w-[400px]">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Enter name"
          className="w-full p-3 mb-4 rounded bg-slate-700 outline-none"
        />

        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-3 mb-4 rounded bg-slate-700 outline-none"
        />

        <input
          type="password"
          placeholder="Enter password"
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
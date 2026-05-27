import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <nav className="bg-slate-900 px-8 py-4 flex justify-between items-center border-b border-slate-700">

      <Link
        to="/"
        className="text-3xl font-bold text-blue-400"
      >
        UniForge AI
      </Link>

      <div className="flex gap-6">

        <Link
          to="/login"
          className="text-white hover:text-blue-400"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="text-white hover:text-blue-400"
        >
          Register
        </Link>

      </div>

    </nav>

  );
};

export default Navbar;
import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);

  const logoutHandler = () => {

    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");

  };

  return (

    <nav className="bg-slate-900 px-8 py-4 flex justify-between items-center border-b border-slate-700">

      <Link
        to="/"
        className="text-3xl font-bold text-blue-400"
      >
        UniForge AI
      </Link>

      <div className="flex gap-6 items-center">

        {
          user ? (

            <>

              <Link
                to="/dashboard"
                className="text-white hover:text-blue-400"
              >
                Dashboard
              </Link>

              <button
                onClick={logoutHandler}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Logout
              </button>

            </>

          ) : (

            <>

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

            </>

          )
        }

      </div>

    </nav>

  );
};

export default Navbar;
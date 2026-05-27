import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import Navbar from "../components/Navbar";

const DashboardPage = () => {

  const { user } = useContext(AuthContext);

  return (

    <div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold text-blue-400">
          Dashboard
        </h1>

        <p className="mt-5 text-xl">
          Welcome,
          {" "}
          {user?.name}
        </p>

      </div>

    </div>

  );
};

export default DashboardPage;
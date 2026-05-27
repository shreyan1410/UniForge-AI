import Navbar from "../components/Navbar";

const HomePage = () => {
  return (

    <div>

      <Navbar />

      <div className="flex flex-col items-center justify-center h-[80vh]">

        <h1 className="text-6xl font-bold text-blue-400">
          UniForge AI
        </h1>

        <p className="mt-5 text-gray-300 text-xl">
          AI Powered Student Success Platform
        </p>

      </div>

    </div>

  );
};

export default HomePage;
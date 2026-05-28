import DashboardLayout from "../layouts/DashboardLayout";

const ProfilePage = () => {

  return (

    <DashboardLayout>

      <div className="space-y-8">

        {/* HEADER */}

        <div>

          <p className="uppercase tracking-[5px] text-indigo-500 font-semibold text-sm">

            Student Profile

          </p>

          <h1 className="text-5xl font-black text-slate-800 mt-3">

            My Profile
          </h1>

        </div>

        {/* PROFILE CARD */}

        <div className="bg-white rounded-[40px] p-10 shadow-xl">

          <div className="flex flex-col lg:flex-row gap-10 items-center">

            {/* IMAGE */}

            <div className="w-52 h-52 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>

            {/* DETAILS */}

            <div className="flex-1">

              <h2 className="text-5xl font-black text-slate-800">

                Shreyan
              </h2>

              <p className="text-slate-500 mt-4 text-xl">

                AI & Software Engineering Student
              </p>

              {/* STATS */}

              <div className="grid grid-cols-3 gap-5 mt-10">

                <div className="bg-purple-50 rounded-3xl p-6">

                  <h1 className="text-4xl font-black text-purple-600">

                    85
                  </h1>

                  <p className="text-slate-500 mt-2">

                    ATS Score
                  </p>

                </div>

                <div className="bg-blue-50 rounded-3xl p-6">

                  <h1 className="text-4xl font-black text-blue-600">

                    15
                  </h1>

                  <p className="text-slate-500 mt-2">

                    Coding Streak
                  </p>

                </div>

                <div className="bg-pink-50 rounded-3xl p-6">

                  <h1 className="text-4xl font-black text-pink-600">

                    248
                  </h1>

                  <p className="text-slate-500 mt-2">

                    Problems Solved
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

};

export default ProfilePage;
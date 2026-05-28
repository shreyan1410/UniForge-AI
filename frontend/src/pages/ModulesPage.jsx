import { Link } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

const ModulesPage = () => {

    return (

        <DashboardLayout>

            <div>

                <h1 className="text-5xl font-bold text-blue-400 mb-16">

                    UniForge AI Ecosystem

                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Placement Module */}

                    <Link to="/dashboard">

                        <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl hover:border-blue-500 transition cursor-pointer h-full">

                            <h2 className="text-4xl font-bold text-blue-400 mb-6">

                                Placement Ecosystem

                            </h2>

                            <p className="text-slate-300 text-lg leading-10">

                                AI-powered career preparation platform for placements,
                                internships, coding interviews, resume analysis,
                                mock interviews, and job readiness.

                            </p>

                            <div className="mt-8 text-slate-400 leading-9">

                                ✅ Resume Analyzer <br />

                                ✅ Mock Interviews <br />

                                ✅ AI Career Assistant <br />

                                ✅ Coding Preparation <br />

                                ✅ Placement Dashboard

                            </div>

                        </div>

                    </Link>


                    {/* Learning Module */}

                    <Link to="/study-planner">

                        <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl hover:border-purple-500 transition cursor-pointer h-full">

                            <h2 className="text-4xl font-bold text-purple-400 mb-6">

                                Learning Ecosystem

                            </h2>

                            <p className="text-slate-300 text-lg leading-10">

                                Smart AI learning platform for study planning,
                                productivity, AI tutoring, quizzes,
                                flashcards, and academic success.

                            </p>

                            <div className="mt-8 text-slate-400 leading-9">

                                ✅ AI Study Planner <br />

                                ✅ AI Tutor <br />

                                ✅ Smart Revision <br />

                                ✅ Productivity Tools <br />

                                ✅ Study Analytics

                            </div>

                        </div>

                    </Link>

                </div>

            </div>

        </DashboardLayout>

    );

};

export default ModulesPage;
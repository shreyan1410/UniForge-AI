import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ResumePage from "./pages/ResumePage";
import AIResumePage from "./pages/AIResumePage";
import AIChatPage from "./pages/AIChatPage";
import CodingPage from "./pages/CodingPage";
import LearningPage from "./pages/LearningPage";
import NotesSummarizerPage from "./pages/NotesSummarizerPage";
import QuizGeneratorPage from "./pages/QuizGeneratorPage";
import StudyPlannerPage from "./pages/StudyPlannerPage";
import MockInterviewPage from "./pages/MockInterviewPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import CareerRoadmapPage from "./pages/CareerRoadmapPage";
import LinkedInOptimizerPage from "./pages/LinkedInOptimizerPage";
import ResumeBuilderPage from "./pages/ResumeBuilderPage";
const App = () => {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<HomePage />}
        />

        {/* LOGIN */}

        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* REGISTER */}

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        {/* RESUME PAGE */}

        <Route
          path="/resume"
          element={
            <ProtectedRoute>
              <ResumePage />
            </ProtectedRoute>
          }
        />

        {/* AI RESUME ANALYZER */}

        <Route
          path="/ai-resume"
          element={
            <ProtectedRoute>
              <AIResumePage />
            </ProtectedRoute>
          }
        />
        <Route
  path="/resume-builder"
  element={
    <ProtectedRoute>
      <ResumeBuilderPage />
    </ProtectedRoute>
  }
/>
        <Route
  path="/linkedin-optimizer"
  element={
    <ProtectedRoute>
      <LinkedInOptimizerPage />
    </ProtectedRoute>
  }
/>
        <Route
  path="/career-roadmap"
  element={
    <ProtectedRoute>
      <CareerRoadmapPage />
    </ProtectedRoute>
  }
/>
<Route
  path="/mock-interview"
  element={
    <ProtectedRoute>
      <MockInterviewPage />
    </ProtectedRoute>
  }
/>
        {/* AI CHAT */}

        <Route
          path="/ai-chat"
          element={
            <ProtectedRoute>
              <AIChatPage />
            </ProtectedRoute>
          }
        />

        {/* CODING TRACKER */}

        <Route
          path="/coding"
          element={
            <ProtectedRoute>
              <CodingPage />
            </ProtectedRoute>
          }
        />

        {/* LEARNING HUB */}

        <Route
          path="/learning"
          element={
            <ProtectedRoute>
              <LearningPage />
            </ProtectedRoute>
          }
        />

        {/* NOTES SUMMARIZER */}

        <Route
          path="/notes-summarizer"
          element={
            <ProtectedRoute>
              <NotesSummarizerPage />
            </ProtectedRoute>
          }
        />

        {/* QUIZ GENERATOR */}

        <Route
          path="/quiz-generator"
          element={
            <ProtectedRoute>
              <QuizGeneratorPage />
            </ProtectedRoute>
          }
        />

        {/* STUDY PLANNER */}

        <Route
          path="/study-planner"
          element={
            <ProtectedRoute>
              <StudyPlannerPage />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );

};

export default App;
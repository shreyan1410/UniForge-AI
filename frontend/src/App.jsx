import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import ResumePage from "./pages/ResumePage";
const App = () => {
  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />
        <Route
  path="/resume"
  element={
    <ProtectedRoute>
      <ResumePage />
    </ProtectedRoute>
  }
/>

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>}
/>

      </Routes>

    </BrowserRouter>

  );
};

export default App;
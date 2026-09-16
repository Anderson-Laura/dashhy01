import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function ProtectedRoute({ children }) {
  const loggedIn = localStorage.getItem("isLoggedIn");

  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Unknown pages */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

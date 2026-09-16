import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BANK_INFO, DEMO_USER } from "../data/bank";
import BankLogo from "../components/BankLogo";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (
      email === DEMO_USER.email &&
      password === DEMO_USER.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md">

        {/* Bank Branding */}
        <div className="text-center mb-7 sm:mb-8">

          <div className="flex justify-center mb-4">
            <BankLogo />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            {BANK_INFO.name}
          </h1>

          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Secure Online Banking
          </p>

        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-8">

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Welcome Back
            </h2>

            <p className="text-slate-500 text-sm mt-1">
              Sign in to access your account
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
                required
              />
            </div>

            {/* Login */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-3 rounded-lg transition"
            >
              Sign In
            </button>

          </form>

          {/* Demo Login */}
          {/* <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4">

            <p className="font-semibold text-slate-700 text-sm mb-2">
              Demo Account
            </p>

            <div className="space-y-1 text-xs sm:text-sm text-slate-500">

              <p>
                Email:{" "}
                <span className="text-slate-700">
                  {DEMO_USER.email}
                </span>
              </p>

              <p>
                Password:{" "}
                <span className="text-slate-700">
                  {DEMO_USER.password}
                </span>
              </p>

            </div>
          </div> */}

        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          © 2026 {BANK_INFO.name}. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default Login;

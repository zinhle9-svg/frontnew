import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  // Basic client-side validation
  function validate() {
    if (!email) return "Email is required";
    // email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return "Please enter a valid email";
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      // Replace this URL with your real auth endpoint
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Expect server to return { message: '...' } on error
        throw new Error(data?.message || "Login failed");
      }

      // Example response: { token: '...', user: { id, name, email } }
      const { token, user } = data;

      // Store token according to user's choice
      if (remember) {
        localStorage.setItem("auth_token", token);
      } else {
        sessionStorage.setItem("auth_token", token);
      }

      // Optionally store minimal user info
      localStorage.setItem("auth_user", JSON.stringify(user || {}));

      // Inform parent component (optional)
      if (typeof onLogin === "function") onLogin(user || {});

      // Navigate to protected area after login
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-2">Sign in to your account</h1>
        <p className="text-sm text-gray-500 mb-6">Enter your email and password to continue.</p>

        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-100 p-3 rounded">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label="Email address"
          />

          <label className="block mb-2 text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              minLength={6}
              className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-label="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-2 text-xs text-gray-600"
              aria-pressed={showPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center text-sm">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="mr-2"
              />
              Remember me
            </label>

            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded bg-indigo-600 text-white font-medium disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?
          <button
            onClick={() => navigate("/signup")}
            className="ml-2 text-indigo-600 hover:underline"
          >
            Create one
          </button>
        </div>
      </div>
    </div>
  );
}

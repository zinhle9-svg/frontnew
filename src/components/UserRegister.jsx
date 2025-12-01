import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function validate() {
    if (!name) return "Name is required";
    if (!email) return "Email is required";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) return "Enter a valid email";

    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";

    if (password !== confirmPassword) return "Passwords do not match";

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
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Registration failed");
      }

      // Successful registration → go to login page
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-2">Create an Account</h1>
        <p className="text-sm text-gray-500 mb-6">Register to continue shopping.</p>

        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-100 p-3 rounded">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <label className="block mb-2 text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <label className="block mb-2 text-sm font-medium">Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="text-sm text-indigo-600 mb-4 hover:underline"
          >
            {showPassword ? "Hide Passwords" : "Show Passwords"}
          </button>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded bg-indigo-600 text-white font-medium disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <button
            onClick={() => navigate("/login")}
            className="ml-2 text-indigo-600 hover:underline"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

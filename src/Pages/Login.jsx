import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const { login } = useUserContext();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">Movies Watch List</div>
        </div>
      </header>

      <main className="flex items-center justify-center flex-grow">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl mb-6 text-center">Login to Your Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full mb-4 rounded"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </main>
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600 text-sm">Movie WatchList App</p>
      </footer>
    </div>
  );
};

export default Login;

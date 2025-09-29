import React, { useState } from "react";
import { motion } from "framer-motion";
import Login from '../components/Login'
import Register from '../components/Register'

const User = () => {
    const [user, setUser] = useState(null);   // null → not logged in
  const [showRegister, setShowRegister] = useState(false);

  const handleLogout = () => setUser(null);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {!user ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4"
        >
          {showRegister ? (
            <Register onRegister={setUser} />
          ) : (
            <Login onLogin={setUser} />
          )}

          <p className="text-sm text-center mt-2">
            {showRegister ? "Already have an account?" : "New here?"}{" "}
            <button
              onClick={() => setShowRegister(!showRegister)}
              className="text-blue-600 font-semibold"
            >
              {showRegister ? "Login" : "Register"}
            </button>
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <ul className="space-y-2">
            <li><strong>Name:</strong> {user.name}</li>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Mobile:</strong> {user.mobile}</li>
            <li><strong>Location:</strong> {user.location}</li>
            <li><strong>Account:</strong> {user.account}</li>
          </ul>
          <button
            onClick={handleLogout}
            className="mt-6 w-full bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default User

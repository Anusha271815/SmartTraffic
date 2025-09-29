import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { MdEmail, MdPassword } from 'react-icons/md'

const Login = ({ onLogin }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg text-center text-white">
        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <div className=" rounded p-2  w-20">
            <img src="TrafficSaathi.jpg" alt="logo" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">Welcome to Traffic Saathi</h2>
        <p className="text-gray-300 mb-6 text-sm">
          RL powered Traffic management software
        </p>

        {/* Google button */}
        <button className="flex items-center justify-center w-full gap-2 px-4 py-2 bg-gray-100 text-black rounded-lg shadow hover:bg-gray-200 transition mb-4">
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        <div className="text-gray-400 my-2">or</div>

        {/* Email input */}
        <div className="flex items-center bg-white rounded-lg px-3 mb-4">
          <MdEmail className="text-gray-500 text-xl mr-2" />
          <input
            type="text"
            placeholder="Username"
            className="w-full px-2 py-2 text-black rounded-lg outline-none"
          />
          
        </div>
        <div className="flex items-center bg-white rounded-lg px-3 mb-4">
          <MdPassword className="text-gray-500 text-xl mr-2" />
        <input
            type="password"
            placeholder="password"
            className="w-full px-2 py-2 text-black rounded-lg outline-none"
          />
</div>
        <button
          className="w-full px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
          onClick={onLogin}
        >
          Login
        </button>

        <p className="mt-4 text-sm text-gray-300">
          Don't have an account?{' '}
          <a href="/register" className="text-indigo-400 hover:underline">
            register
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login

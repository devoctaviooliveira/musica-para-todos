import { useState } from "react";

function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              Name
            </label>
            <input 
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input 
              type="password"
              placeholder="Enter the password"
              name="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded mb-3 transition-colors"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mb-2">Already Have an Account?</p>

          <button 
            type="button"
            className="w-full border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}


export default Signup;
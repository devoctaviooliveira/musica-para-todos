import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input 
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">
              E-mail
            </label>
            <input 
              type="text"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded mb-3 transition-colors"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mb-2">Already Have an Account?</p>

        </form>

        <Link 
          to="/login"
          type="button"
          className="flex justify-center items-center w-full border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded transition-colors"
        >
          Login
        </Link>
      </div>
    </div>
  );
}


export default Signup;
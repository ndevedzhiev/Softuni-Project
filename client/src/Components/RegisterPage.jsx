import { Link } from "react-router-dom"

export default function RegisterPage () {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{ backgroundImage: 'url("https://images.wallpaperscraft.com/image/single/cars_parking_dividing_lines_122567_2560x1440.jpg")' }}>
        
  <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      Create an Account
    </h2>
    <form id="registrationForm" noValidate="">
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 font-semibold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your username"
          required=""
        />
        <p className="text-red-500 text-sm mt-2 hidden" id="usernameError">
          Username is required.
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
          required=""
        />
        <p className="text-red-500 text-sm mt-2 hidden" id="emailError">
          Please enter a valid email.
        </p>
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-semibold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
          required=""
        />
        <p className="text-red-500 text-sm mt-2 hidden" id="passwordError">
          Password is required.
        </p>
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirm-password"
          className="block text-gray-700 font-semibold mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Confirm your password"
          required=""
        />
        <p className="text-red-500 text-sm mt-2 hidden" id="confirmPasswordError">
          Passwords do not match.
        </p>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Register
      </button>
    </form>
    <p className="text-center text-gray-600 mt-4">
      Already have an account?{" "}
      <Link to="/login" className="text-blue-500 font-semibold">
        Log In
      </Link>
    </p>
  </div>
</div>

    

    )
}
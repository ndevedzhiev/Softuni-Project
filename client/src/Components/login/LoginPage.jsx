import { Link } from "react-router-dom"
import styles from "../../styles/login.module.css"

export default function LoginPage () {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{ 
        backgroundImage: 'url("https://c.wallhere.com/photos/cd/d0/3000x2000_px_Arny_North_bmw_BMW_Z4_men_model_nature_sea-835959.jpg!d")', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        
  <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full -mt-20">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      Sign In
    </h2>
    <form id="registrationForm" noValidate="">
      
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
      
      <button 
        type="submit"
        className={styles['cbtn']}
        style={{backgroundColor: '#E11D48'}}
      >
        Sign In
      </button>
    </form>
    <p className="text-center text-gray-600 mt-4">
      Don't have an account?{" "}
      <Link to="/register" className="text-black-500 font-semibold">
        Sign Up
      </Link>
    </p>
  </div>
</div>
    

    )
}
import { Link, useNavigate } from "react-router-dom"
import { useRegister } from "../../hooks/useAuth.js"
import useForm from "../../hooks/useForm.js"
import { useState } from "react"


const initialValues = {email: '', password: '', rePassword: '',}


export default function RegisterPage () {
  const [error, setError] = useState('')
  const register = useRegister()
  const navigate = useNavigate()

  const registerHandler = async (values) => {

    if (values.password !== values.rePassword) {
      return setError('Password missmatch!')
    }

    try {
      await register(values.email, values.password)
      navigate('/')
    
    } catch (err) {
      setError(err.message)
      
    }
  }
    //подаваме на useForm заедно с initialValues и registerHandler
    const {
      values,
      changeHandler,
      submitHandler,
    } = useForm(initialValues, registerHandler)
    
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{ 
        backgroundImage: 'url("https://c.wallhere.com/photos/cd/d0/3000x2000_px_Arny_North_bmw_BMW_Z4_men_model_nature_sea-835959.jpg!d")', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}>
        
  <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
      Create an Account
    </h2>
    <form id="registrationForm" onSubmit={submitHandler}>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={changeHandler}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
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
          name="password"
          value={values.password}
          onChange={changeHandler}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
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
          id="rePassword"
          name="rePassword"
          value={values.rePassword}
          onChange={changeHandler}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Confirm your password"
          />
        
        {error && (
        <p className="text-red-500 text-sm mt-2">
          {error}
        </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        style={{backgroundColor: '#E11D48'}}
      >
        Register
      </button>
    
    </form>
    <p className="text-center text-gray-600 mt-4">
      Already have an account?{" "}
      
      <Link to="/login" className="text-black-500 font-semibold">
        Log In
      </Link>
    
    </p>
  </div>
</div>

    

    )
}
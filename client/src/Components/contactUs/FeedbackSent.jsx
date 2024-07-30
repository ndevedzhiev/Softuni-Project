import { Link } from "react-router-dom"

export default function FeedbackSent () {
    return(
        <div classname="min-h-screen flex items-center justify-center bg-gray-100">
  <div classname="bg-white p-8 rounded-lg shadow-lg">
    <h2 classname="text-3xl font-bold text-gray-800 text-center">
      Thank you for your feedback
    </h2>
  </div>

        <div className="flex justify-center mt-6 -mt-11">
      <button className= "bg-blue-500 text-white px-20 py-3 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 -mt-12">
        <Link to="/">Back To Home Page</Link>
      </button>
    </div>
    </div>
    )
}
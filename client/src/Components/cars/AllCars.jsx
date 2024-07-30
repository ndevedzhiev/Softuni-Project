import { useEffect, useState } from "react"
import * as carsApi from '../../api/cars-api.js'
import { Link } from "react-router-dom"
import CarItem from "./Car-item.jsx"
export default function AllCars () {
  
  const [cars, setCars] = useState([])
  
  useEffect(() => {
      carsApi.getAllCars()
        .then(result => setCars(result))
  }, [])

    return (
      <section className="bg-gray-50 py-24">
  <div className="container mx-auto px-4">
    <div className="-mx-4 flex flex-wrap items-center mb-6">
      <div className="px-4 w-full md:w-10/12">
        <h2 className="font-medium mb-1 text-primary-500 text-xl" style={{ color: '#E11D48' }}>
          Top Deals
        </h2>
        <h3 className="capitalize font-bold mb-4 text-4xl text-gray-900">
          Cars for all your needs
        </h3>
        <div className="bg-primary-500 mb-6 pb-1 w-2/12" />
      </div>
    </div>
    
    {/* Car Grid */}
    <div className="flex flex-wrap -mx-3 mb-12">
            {/* Car Block Example */}
            <CarItem />
    </div>
    
    <div className="flex justify-center mt-6">
      <button className="bg-blue-500 text-white px-20 py-3 rounded-full transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 -mt-12" style={{ backgroundColor: '#E11D48' }}>
        View All
      </button>
    </div>
  </div>
</section>


    )
}
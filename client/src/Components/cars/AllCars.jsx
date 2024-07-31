import { useEffect, useState } from "react"
import * as carsApi from '../../api/cars-api.js'
import CarItem from "./Car-item.jsx"


export default function AllCars () {

  const [cars, setCars] = useState([])
  
  useEffect(() => {
      carsApi.getAllCars()
    .then(result =>  setCars(result))
    
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
            {cars.length > 0
            ? cars.map(car => <CarItem key={car._id} {...car} />)
            : <h1 className="text-center text-xl font-semibold text-gray-600 mt-8">
            No articles yet
            </h1>
        }
    {}
          
    </div>
    
 </div>
</section>


    )
}
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
    <div className="-mx-4 flex min-h-min items-center mb-6">
      <div className="px-4 flex min-h-min">
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
    <div className="my-8 gap-4 gap-y-8 px-8 grid grid-cols-3 -mx-3 mb-12">
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
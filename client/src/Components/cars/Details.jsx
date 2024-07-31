import { useEffect, useState } from "react"
import carsApi from "../../api/cars-api.js"
import { useParams } from "react-router-dom"

export default function Details () {
  
  const [car, setCar] = useState({})
  const {carId} = useParams()

  useEffect(() => {
    (async () => {
      const result = await carsApi.getOne(carId)
      setCar(result)
    })()
  }, [])
  
  return (
      <section className="relative ">
<div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
    <div className="img">
      <div className="img-box h-full max-lg:mx-auto ">
        <img
          src={car.imageUrl}
          alt=""
          className="max-lg:mx-auto lg:ml-auto h-full"
        />
      </div>
    </div>
    <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
      <div className="data w-full max-w-xl">
        <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
          {car.year} {car.make} {car.model} in {car.color}
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
          <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
            {car.price}
          </h6>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              
              
              
            </div>
            
          </div>
        </div>
        <p className="text-gray-500 text-base font-normal mb-5">
         {car.summary}
        </p>
        
        
       <div className="flex items-center gap-3">
          
          <button className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"
          style={{backgroundColor: '#E11D48'}}
          >
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
)
}
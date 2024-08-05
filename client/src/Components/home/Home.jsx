import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import carsApi from "../../api/cars-api.js"
import LatestCar from "./LatestCar.jsx"

export default function Home() {

  const [latestCars, setLatestCars] = useState([])
  
  
  useEffect(() => {
      (async () => {
        const result = await carsApi.getAllCars()
        setLatestCars(result.reverse().slice(0, 4))
    })()
  }, [])
    
    return (
<div>
  <div className="relative bg-[url('https://www.brabus.com/_Resources/Persistent/5/3/2/0/5320571be65a0c882934323d1a7c18b92f3dbc94/BRABUS%20930_S63%20E%20Performance_On%20Location_sky_klein%20%2844%29.jpg')] bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
      <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
          Find The Best Car
          <strong className="block font-extrabold text-rose-500">
            {" "}
            For Your Needs.{" "}
          </strong>
        </h1>
        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
          Welcome to Prime Cars, your premier destination for quality pre-owned vehicles. Explore our wide range of inspected and certified cars, ensuring you drive home in a reliable and affordable vehicle.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-center">
          <Link
            to="/register"
            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Get Started
          </Link>
          <Link
            to="/allcars"
            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            Show Deals
          </Link>
        </div>
      </div>
    </div>
  </div>
    <div className="my-8 gap-4 gap-y-8 px-8 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 min-h-min">
      { latestCars.length > 0
      ? latestCars.map(car => <LatestCar key={car._id} {...car} />)
      : <h1 className="text-center text-xl font-semibold text-gray-600 mt-8">
          No articles yet
        </h1>
      }
    </div>
</div>





    )
}
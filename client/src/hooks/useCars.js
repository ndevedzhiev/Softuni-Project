import { useEffect, useState } from "react"
import carsApi from "../api/cars-api.js"


export function useGetAllCars() {

    const [cars, setCars] = useState([])
  
    useEffect(() => {
        (async () => {
          const result = await carsApi.getAllCars()

          setCars(result)
        })()
    }, [])

    return [cars, setCars]
}

export function useGetOneCar(carId) {

  const [car, setCar] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const result = await carsApi.getOne(carId);
        if (result) {
          setCar(result);
        } else {
          console.error("Car data is undefined");
        }
      } catch (error) {
        console.error("Failed to fetch car data:", error);
      }
    })();
  }, [carId]);

  return [
    car, setCar
  ]

}
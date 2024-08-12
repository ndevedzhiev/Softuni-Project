import * as request from './requester'

const baseUrl = 'http://localhost:3030/data/cars'

export const getAllCars = async () => { 
    
    const result = await request.get(baseUrl)

    const cars = Object.values(result)

    return cars
    
}

export const getOne = (carId) => request.get(`${baseUrl}/${carId}`);

export const create = (carData) => request.post(`${baseUrl}`, carData)

const carsApi = {
    
    getAllCars,
    getOne, 
    create
    
}
export default carsApi
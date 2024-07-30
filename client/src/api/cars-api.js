import * as request from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/cars'

export const getAllCars = async () => { 
    
    const result = await request.get(baseUrl)

    const cars = Object.values(result)

    return cars
    
}


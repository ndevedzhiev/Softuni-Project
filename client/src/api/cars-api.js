import * as request from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/cars'

export const getAllCars = () => request.get(baseUrl)

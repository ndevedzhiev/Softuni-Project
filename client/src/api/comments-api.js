import requester from "./requester.js"

const baseUrl = 'http://localhost:3030/jsonstore/cars/'

const buildUrl = (carId) => `${baseUrl}/${carId}/comments`

const create = async (carId, username, text) => requester.post(buildUrl(carId), { username, text })

const getAllComments = async (carId) => {
    
const result = await requester.get(buildUrl(carId))

const comments = Object.values(result)

return comments
}

export default {
    create,
    getAllComments
}
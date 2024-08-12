import requester from "./requester.js"

const baseUrl = 'http://localhost:3030/data/comments'

const create = (carId, text) => requester.post(baseUrl, { carId, text })

const getAllComments = (carId) => {
    const params = new URLSearchParams({
        where: `carId="${carId}"`
    })
    return requester.get(`${baseUrl}?${params.toString()}`)
}
const commentsApi = {
    create,
    getAllComments,
}

export default commentsApi
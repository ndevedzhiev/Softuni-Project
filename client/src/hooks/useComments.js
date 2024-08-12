import { useEffect, useState } from "react"
import commentsApi from "../api/comments-api.js"


export function useCreateComment(){
const createHandler = (carId, comment) => commentsApi.create(carId, comment)

return createHandler
}

export function useGetAllComments(carId) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        (async () => {
          const result = await commentsApi.getAllComments(carId)
          setComments(result)
        })()
    }, [carId])

    return [comments, setComments]
}

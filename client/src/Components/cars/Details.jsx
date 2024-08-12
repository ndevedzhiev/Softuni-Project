import { useParams } from "react-router-dom";
import { useGetOneCar } from "../../hooks/useCars.js";
import useForm from "../../hooks/useForm.js";
import { useGetAllComments, useCreateComment } from "../../hooks/useComments.js"
import { useAuthContext } from "../../contexts/AuthContext.jsx";

const initialValues = {
  comment: ''
}

export default function Details() {
  
  const { carId } = useParams();
  const [comments, setComments] = useGetAllComments(carId)
  const createComment = useCreateComment()
  const [car] = useGetOneCar(carId)
  const { isAuthenticated } = useAuthContext()
  const { 
    changeHandler, 
    submitHandler, 
    values,
   } = useForm(initialValues, async ({ comment }) => {
    try {
     const newComment = await createComment(carId, comment)
     setComments(oldComments => [...oldComments, newComment])
    } catch (err) {
      console.log(err.message);
      
    }
    
  })
  

  return (
    <section className="relative mt-20 ml-20 pl-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 ">
          <div className="img">
            <div className="img-box h-full max-lg:mx-auto ">
            <img
              src={car.imageUrl}
              alt={`${car.make} ${car.model}`}
              className="w-full h-auto object-cover"
              style={{ maxHeight: '700px' }}
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
                  <div className="flex items-center gap-1"></div>
                </div>
              </div>
              <p className="text-gray-500 text-base font-normal mb-5">
                {car.summary}
              </p>
              <div className="flex items-center gap-3">
                <button
                  className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"
                  style={{ backgroundColor: '#E11D48' }}
                >
                  Contact Seller
                </button>

                <button
                  className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"
                  style={{ backgroundColor: '#E11D48' }}
                >
                  Edit
                </button>
                <button
                  className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400"
                  style={{ backgroundColor: '#E11D48' }}
                >
                  Delete
                </button>
              </div>
              
              
              
              {isAuthenticated && (
                    <article className="p-4">
                      <label className="block text-lg mb-2">Add new comment :</label>
                        <form className="flex flex-col" onSubmit={submitHandler}>
                            <textarea
                              name="comment"
                              placeholder="Comment..."
                              onChange={changeHandler}
                              value={values.comment}
                              className="mb-4 p-2 border rounded"
                            ></textarea>
                            
                            <input
                              style={{ backgroundColor: '#E11D48' }}
                              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
                              type="submit"
                              value="Add Comment"
                            />
                      </form>
                      
                  </article>
              )}

              <div className="p-4 border border-gray-200 rounded-md shadow-sm">
                <h2>Comments:</h2>
                  <ul>
                    {comments.map(comment => (
                      <li key={comment._id}>
                      <p>{comment.author.email}: {comment.text}</p>
                      </li>
                    ))}
                  </ul>
              </div>

            {comments.length === 0 && <p> No Comments Yet </p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

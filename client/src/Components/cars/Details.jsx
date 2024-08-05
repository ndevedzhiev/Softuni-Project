import { useEffect, useState } from "react";
import carsApi from "../../api/cars-api.js";
import { useParams } from "react-router-dom";
import commentsApi from "../../api/comments-api.js";

export default function Details() {
  const [car, setCar] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');
  const { carId } = useParams();

  useEffect(() => {
    (async () => {
      const result = await carsApi.getOne(carId);
      setCar(result);
    })();
  }, [carId]);

  // Функция, която handle-ва събмита на коментарите
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    await commentsApi.create(carId, username, comments)

    if (newComment.trim() && username.trim()) {
      e.preventDefault()
      const commentWithUsername = {
        username,
        text: newComment,
      };
      setComments([...comments, commentWithUsername]);
      //изчистваме инпутите
      setNewComment('');
      setUsername(''); 
    }
  };

  return (
    <section className="relative ">
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
              </div>

              {/* Comment Section */}
              <div className="mt-10 w-full max-w-xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Comments</h3>

                <form onSubmit={handleCommentSubmit} className="mb-6">
                  <div className="mb-4">
                    <input
                    name="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      className="w-full border border-gray-300 rounded p-3 mb-4 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <textarea
                    name="comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full h-24 border border-gray-300 rounded p-3 mb-4 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                    style={{ backgroundColor: '#E11D48' }}
                  >
                    Submit
                  </button>
                </form>

                {/* Display Comments */}
                <div className="space-y-4">
                  {comments.length > 0 ? (
                    comments.map((comment, index) => (
                      <div key={index} className="p-4 border border-gray-200 rounded">
                        <p className="font-bold text-gray-700">{comment.username}</p>
                        <p className="text-gray-700">{comment.text}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No comments yet.</p>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

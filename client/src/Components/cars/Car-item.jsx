import { Link } from "react-router-dom"
export default function CarItem(
    {
        _id,
        imageUrl,
        make,
        model,
        color,
        year,
        summary,
        price
        
    }
) {
    return (
        <div className="p-3 w-full md:w-6/12 lg:w-4/12">
              <div className="bg-white border shadow-md text-gray-500">
                
                <a>
                  <img
                    src={imageUrl}
                    className="hover:opacity-90 w-full"
                  />
                </a>
                
                <div className="p-6">
                  <h4 className="font-bold mb-2 text-gray-900 text-xl">
                    <a href="#" className="hover:text-gray-500">
                      {year} {make} {model} in {color}
                    </a>
                  </h4>
                  <p className="mb-2 text-sm">
                    {summary}
                  </p>
                  
                  <hr className="border-gray-200 my-4" />
                  
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center py-1 space-x-1">
                          </div>
                          <p className="font-bold text-gray-900">Price {price}</p>
                      </div>
                        <button className="bg-[#E11D48] text-white px-6 py-2 rounded-md transition duration-400 ease-in-out hover:bg-[#D12D40]">
                            View Details
                        </button>
                </div>
              </div>
            </div>
    )

}
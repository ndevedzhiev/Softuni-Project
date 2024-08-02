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
      <div className="p-3 flex min-h-min">
      <div className="bg-white border shadow-md text-gray-500">
        <a>
          <img src={imageUrl} className="hover:opacity-90 w-full h-[200px] object-cover" />
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
          
          <div className="flex justify-between">
            <span className="font-bold text-gray-900">Price {price}</span>
            <Link to={`/cars/${_id}/details`} className="bg-[#E11D48] text-white px-6 py-2 rounded-md transition duration-400 ease-in-out hover:bg-[#D12D40]">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
    )

}
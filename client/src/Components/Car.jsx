import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({ car }) => {
  return (
    <div className="p-3 w-full md:w-6/12 lg:w-4/12">
      <div className="bg-white border shadow-md text-gray-500">
        <Link to={`/car/${car._id}`}>
          <img
            src={`https://via.placeholder.com/600x450.png?text=${car.make}+${car.model}`}
            className="hover:opacity-90 w-full"
            alt={`${car.make} ${car.model}`}
            width={600}
            height={450}
          />
        </Link>
        <div className="p-6">
          <h4 className="font-bold mb-2 text-gray-900 text-xl">
            <Link to={`/car/${car._id}`} className="hover:text-gray-500">
              {car.make} {car.model} {car.year}
            </Link>
          </h4>
          <p className="mb-2 text-sm">
            A beautiful {car.color} {car.make} {car.model}.
          </p>
          <hr className="border-gray-200 my-4" />
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center py-1 space-x-1">
              <span>4.5</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1.125em"
                height="1.125em"
                className="text-primary-500"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                </g>
              </svg>
              <span>(234 reviews)</span>
            </div>
            <p className="font-bold text-gray-900">$50/day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;

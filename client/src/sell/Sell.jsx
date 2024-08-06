import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './backgroundImage.jpg';


function SellCarForm() {
  const carMakes = [
    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan',
    'BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Hyundai',
    'Kia', 'Subaru', 'Mazda', 'Lexus', 'Jeep',
    'Dodge', 'Chrysler', 'GMC', 'Ram', 'Tesla',
  ];

  const carModels = {
    'Toyota': ['Camry', 'Corolla', 'Prius', 'Highlander', 'RAV4'],
    'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'Fit'],
    'Ford': ['F-150', 'Mustang', 'Escape', 'Explorer', 'Focus'],
    'Chevrolet': ['Silverado', 'Malibu', 'Equinox', 'Tahoe', 'Camaro'],
    'Nissan': ['Altima', 'Sentra', 'Rogue', 'Murano', 'Frontier'],
    'BMW': ['3 Series', '5 Series', 'X3', 'X5', '7 Series'],
    'Mercedes-Benz': ['C-Class', 'E-Class', 'GLA', 'GLC', 'GLE'],
    'Volkswagen': ['Golf', 'Jetta', 'Passat', 'Tiguan', 'Atlas'],
    'Audi': ['A3', 'A4', 'Q3', 'Q5', 'A6'],
    'Hyundai': ['Elantra', 'Sonata', 'Santa Fe', 'Tucson', 'Kona'],
    'Kia': ['Soul', 'Optima', 'Sportage', 'Sorento', 'Forte'],
    'Subaru': ['Impreza', 'Outback', 'Forester', 'Crosstrek', 'Ascent'],
    'Mazda': ['Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'MX-5 Miata'],
    'Lexus': ['ES', 'RX', 'NX', 'GX', 'IS'],
    'Jeep': ['Wrangler', 'Cherokee', 'Grand Cherokee', 'Compass', 'Renegade'],
    'Dodge': ['Charger', 'Challenger', 'Durango', 'Journey', 'Grand Caravan'],
    'Chrysler': ['300', 'Pacifica', 'Voyager', 'Aspen', 'Sebring'],
    'GMC': ['Sierra', 'Terrain', 'Acadia', 'Canyon', 'Yukon'],
    'Ram': ['1500', '2500', '3500', 'ProMaster', 'Chassis Cab'],
    'Tesla': ['Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster'],
  };

  const carColors = [
    'Black', 'White', 'Gray', 'Silver', 'Red',
    'Blue', 'Brown', 'Green', 'Yellow', 'Orange',
  ];

  const [values, setValues] = useState({
    make: '',
    model: '',
    color: '',
    year: '',
    price: '',
    summary: '',
    imageUrl: ''
  });

  const navigate = useNavigate()
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
    setValues({ ...values, make: e.target.value, model: '' });
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    (async () => {
      const response = await fetch('http://localhost:3030/jsonstore/cars', {
        method: 'POST',
        headers: {'Content-type': 'application/json' },
        body: JSON.stringify(values),
      })
      const result = await response.json()
     navigate(`/cars/${result._id}/details`)
      
      })()
      }

 

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100"
    style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
    }}>
  <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold mb-6 text-center">Sell Your Car</h2>
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="make">
        Make
      </label>
      <select
        id="make"
        name="make"
        value={values.make}
        onChange={handleMakeChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select car make</option>
        {carMakes.map((make) => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
        Model
      </label>
      
      <select
        id="model"
        name="model"
        className='className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
        value={values.model}
        onChange={(e) => {
          setSelectedModel(e.target.value);
          handleChange(e);
        }}
        disabled={!selectedMake}
      >
        <option value="">Select car model</option>
        {selectedMake && carModels[selectedMake].map((model) => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
        Color
      </label>

      <select
        id="color"
        name="color"
        value={values.color}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleChange}
      >
        <option value="">Select car color</option>
        {carColors.map((color) => (
          <option key={color} value={color}>{color}</option>
        ))}
      </select>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
        Year of Production
      </label>

      <select
        id="year"
        name="year"
        value={values.year}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleChange}
      >
        <option value="">Select year</option>
        {Array.from({ length: 2024 - 1980 + 1 }, (_, i) => 1980 + i).map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
        Price
      </label>
      <input
        id="price"
        name="price"
        type="text"
        value={values.price}
        onChange={handleChange}
        placeholder="Enter the price of your car"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
        Summary
      </label>
      <textarea
        id="summary"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        placeholder="Enter a brief summary of your car"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
        Image URL
      </label>
      <input
        id="imageUrl"
        name="imageUrl"
        type="text"
        value={values.imageUrl}
        onChange={handleChange}
        placeholder="Enter the URL of your car image"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        style={{backgroundColor: '#E11D48'}}
      >
        Create
      </button>
    </div>
  </form>
</div>

  );
}

export default SellCarForm;
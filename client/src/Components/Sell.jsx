import React, { useState } from 'react';

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

  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
    setSelectedModel('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sell Your Car</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="make">
            Make
          </label>
          <select
            id="make"
            value={selectedMake}
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
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <input
            id="year"
            type="number"
            placeholder="Enter year of production"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SellCarForm;

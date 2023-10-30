import React, { useState } from 'react';
import axios from 'axios';

const CreateCarForm = ({ setEmployees }) => {
  const [carData, setCarData] = useState({
    car: '',
    color: '',
    year: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/server/cars', carData);
      if (response.status === 200) {
        setCars((prevCars) => [...prevCars, response.data]);
      }
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="car">Car:</label>
          <input type="text" name="name" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <input type="text" name="role" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input type="text" name="department" onChange={handleInputChange} />
        </div>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default CreateCarForm;

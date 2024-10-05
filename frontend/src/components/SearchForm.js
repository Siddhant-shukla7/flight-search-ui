import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ departureCity, destinationCity, departureDate, returnDate });
  };

  return (
    <div className="container mt-4">
      <h2>Search Flights</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label>Departure City</label>
          <input
            type="text"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Destination City</label>
          <input
            type="text"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Departure Date</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Return Date (Optional)</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

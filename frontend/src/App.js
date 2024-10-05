import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm';
import FlightResults from './components/FlightResults';
import { flights as mockFlights } from './mockData';

function App() {
  const [flights, setFlights] = useState([]);

  const handleSearch = (criteria) => {
    //return all flights for demo purposes.
    setFlights(mockFlights);
  };

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      <FlightResults flights={flights} />
    </div>
  );
}

export default App;

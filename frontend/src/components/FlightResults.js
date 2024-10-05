import React from 'react';

const FlightResults = ({ flights }) => {
  return (
    <div className="container mt-4">
      <h2>Available Flights</h2>
      {flights.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Airline</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index}>
                <td>{flight.flightNumber}</td>
                <td>{flight.departureTime}</td>
                <td>{flight.arrivalTime}</td>
                <td>{flight.airline}</td>
                <td>{flight.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No flights available for the selected criteria.</p>
      )}
    </div>
  );
};

export default FlightResults;

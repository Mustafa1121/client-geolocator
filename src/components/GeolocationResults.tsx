import { useLocation } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Map = lazy(() => import("./map/Map"));

const GeolocationResults = () => {
  const location = useLocation();
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Geolocation Results</h2>
          <div>
            <p>Address: {location.state.geolocationData?.address}</p>
            <p>Latitude: {location.state.geolocationData?.latitude}</p>
            <p>Longitude: {location.state.geolocationData?.longitude}</p>
            {/* Add more details as needed */}
          </div>
          {/* Google Map Container */}
          <Suspense fallback={<div>Loading...</div>}>
            <Map
              center={[
                location.state.geolocationData?.latitude,
                location.state.geolocationData?.longitude,
              ]}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default GeolocationResults;

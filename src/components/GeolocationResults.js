import { useLocation } from "react-router-dom";
import { MapContainer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: require("../icons/placeholder.png"),
  iconSize: [38, 38],
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

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
          {/* <MapContainer
            center={[
              location.state.geolocationData?.latitude,
              location.state.geolocationData?.longitude,
            ]}
            zoom={13}
            maxZoom={100}
          >
            <MarkerClusterGroup
              chunkedLoading
              iconCreateFunction={createClusterCustomIcon}
            >
              <Marker
                position={[
                  location.state.geolocationData?.latitude,
                  location.state.geolocationData?.longitude,
                ]}
                icon={customIcon}
              >
                <Popup>
                  Latitude: {location.state.geolocationData?.latitude}{" "}
                  Longitude: {location.state.geolocationData?.longitude}{" "}
                </Popup>
              </Marker>
            </MarkerClusterGroup>
          </MapContainer> */}
        </div>
      </div>
    </>
  );
};

export default GeolocationResults;

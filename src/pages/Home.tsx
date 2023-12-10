import React from "react";
import AddressForm from "../components/AddressForm";

const Home: React.FC = () => {
  return (
    <div>
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-blue-600">Geolocation App</h1>
      </div>
      <AddressForm />
    </div>
  );
};

export default Home;

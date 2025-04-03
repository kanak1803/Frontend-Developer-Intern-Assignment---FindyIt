import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import VendorCard from "./VendorCard";
import SearchBar from "./SearchBar";

const VendorList = () => {
  const [vendors, setVendors] = useState([]); //state to store the data from json file
  const [searchTerm, setSearchTerm] = useState(""); //state to store search query of user
  useEffect(() => {
    const fetchVendors = async () => {
      /// api call to get all vendors data
      try {
        const response = await axios.get("/vendors.json");
        setVendors(response.data);
      } catch (error) {
        console.error("Error fetching data from json file:", error);
      }
    };
    fetchVendors(); // need  function to use async and await and calling it here and dependency array is empty as api should be called on every render
  }, []);
  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="container mx-auto p-4">
      {/* Search Bar Component */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Vendor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredVendors.length > 0 ? (
          filteredVendors.map((vendor) => <VendorCard key={vendor.id} vendor={vendor} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No vendors found.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default VendorList;

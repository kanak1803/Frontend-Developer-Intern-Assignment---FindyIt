import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import VendorCard from "./VendorCard";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";

const VendorList = () => {
  const [vendors, setVendors] = useState([]); //state to store the data from json file
  const [searchTerm, setSearchTerm] = useState(""); //state to store search query of user
  const [selectedCategory, setSelectedCategory] = useState(""); //state to store selected category  of user
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
  const categories = [...new Set(vendors.map((vendor) => vendor.category))];
  const filteredVendors = vendors.filter((vendor) => { //making query lowercase and trimming it so that the qeury can match data in json
    const matchesSearch = vendor.name 
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" ||
      vendor.category.trim().toLowerCase() ===
        selectedCategory.trim().toLowerCase();

    return matchesSearch && matchesCategory;
  });
  return (
    <>
      <div className="container mx-auto p-4">
        {/* Search & Filter Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterDropdown
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </div>

        {/* Vendor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredVendors.length > 0 ? (
            filteredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No vendors found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default VendorList;

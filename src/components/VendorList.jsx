import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { Loader } from "lucide-react";
import VendorCard from "./VendorCard";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import { motion } from "framer-motion";

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendors = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/vendors.json");
        setVendors(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching vendors:", error);
        setError("Failed to load vendors. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVendors();
  }, []);

  const categories = useMemo(() => {
    return [...new Set(vendors.map((vendor) => vendor.category))];
  }, [vendors]);

  const filteredVendors = useMemo(() => {
    return vendors.filter((vendor) => {
      const matchesSearch = vendor.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());

      const matchesCategory =
        selectedCategory === "" ||
        vendor.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [vendors, searchTerm, selectedCategory]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-64">
        <Loader className="w-8 h-8 text-blue-500 animate-spin" />
        <span className="ml-2 text-gray-600">Loading vendors...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
          <p>{error}</p>
          <button
            className="mt-2 text-blue-600 hover:underline"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Search & Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-grow">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div className="w-full md:w-48">
            <FilterDropdown
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          </div>
          {(searchTerm || selectedCategory) && (
            <button
              onClick={handleClearFilters}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Results summary */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredVendors.length}{" "}
          {filteredVendors.length === 1 ? "vendor" : "vendors"}
          {selectedCategory && (
            <span>
              {" "}
              in <strong>{selectedCategory}</strong>
            </span>
          )}
          {searchTerm && (
            <span>
              {" "}
              matching "<strong>{searchTerm}</strong>"
            </span>
          )}
        </div>
      </div>

      {/* Vendor Cards */}
      {filteredVendors.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 
                     justify-center items-start auto-rows-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {filteredVendors.map((vendor) => (
            <div key={vendor.id} className="w-full max-w-[300px] mx-auto">
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center min-h-[400px] bg-gray-50 border border-gray-200 rounded-lg p-6 text-center shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-gray-400 text-5xl mb-3">🚫</span>
          <p className="text-gray-600 text-lg font-medium">
            No vendors match your criteria.
          </p>
          <p className="text-gray-500 text-sm mb-4">
            Try adjusting your filters or search query.
          </p>
          <button
            onClick={handleClearFilters}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Clear all filters
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default VendorList;

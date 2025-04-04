import React from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleClear = () => setSearchTerm("");

  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-500" />
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search vendors..."
        className="w-full py-2.5 pl-10 pr-10 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-700 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 
                   hover:border-blue-400 placeholder-gray-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Clear Button */}
      {searchTerm && (
        <button
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-all duration-200"
          onClick={handleClear}
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

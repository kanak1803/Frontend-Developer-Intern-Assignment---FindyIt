import React from "react";
import { ChevronDown, Filter } from "lucide-react";

const FilterDropdown = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Filter size={18} className="text-gray-500" />
      </div>

      <select
        className="w-full py-2.5 pl-10 pr-8 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-700 
                   focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 
                   hover:border-blue-400 cursor-pointer"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        aria-label="Filter by category"
      >
        <option value="" className="text-gray-700">
          All Categories
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category} className="text-gray-700">
            {category}
          </option>
        ))}
      </select>

      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        {/* <ChevronDown size={18} className="text-gray-500" /> */}
      </div>
    </div>
  );
};

export default FilterDropdown;

import React from "react";

const FilterDropdown = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <>
      <select
        className="w-full p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option className="text-black" value="">All Categories</option>
        {categories.map((category, index) => (
          <option className="text-black" key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterDropdown;

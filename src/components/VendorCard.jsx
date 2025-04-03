import React from "react";

const VendorCard = ({ vendor }) => {
  return (
    <>
      <div className="border p-4 rounded-lg shadow-lg bg-white">
        {/* Vendor Image */}
        <img
          src={vendor.image} // Dummy Image
          alt={vendor.name}
          className="w-full h-40 object-cover rounded-md mb-3"
        />

        {/* Vendor Details */}
        <h2 className="text-xl font-bold">{vendor.name}</h2>
        <p className="text-gray-600">{vendor.category}</p>
        <p className="text-gray-500">{vendor.location}</p>
        <p className="text-yellow-500">⭐ {vendor.rating}</p>

        {/* Contact Button */}
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => alert("Contact feature coming soon!")}
        >
          Contact
        </button>
      </div>
    </>
  );
};

export default VendorCard;

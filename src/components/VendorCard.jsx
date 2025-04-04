import React from "react";
import toast from "react-hot-toast";
import { MapPin, Mail, Heart, Star } from "lucide-react";

const VendorCard = ({ vendor }) => {
  const handleContactClick = () => {
    toast.success("Contact feature coming soon!", {
      duration: 2000,
      position: "top-right",
    });
  };

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col h-full">
      {/* Vendor Image */}
      <div className="relative group">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 bg-white/80 text-gray-800 px-2 py-1 rounded-full text-xs font-medium shadow">
          {vendor.category}
        </span>
      </div>

      {/* Vendor Details */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-900 truncate">
            {vendor.name}
          </h2>
          <div className="flex items-center px-2 py-1 rounded-md">
            <Star
              size={16}
              className="text-yellow-500 mr-1"
              fill="currentColor"
            />
            <span className="text-sm font-medium">{vendor.rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="truncate">{vendor.location}</span>
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          <button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex justify-center items-center"
            onClick={handleContactClick}
          >
            <Mail size={16} className="mr-2" />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;

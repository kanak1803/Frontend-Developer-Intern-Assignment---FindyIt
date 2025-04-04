import React from "react";
import toast from "react-hot-toast";
import { MapPin, Mail, Heart, Star } from "lucide-react";

const VendorCard = ({ vendor }) => {
  const handleContactClick = () => {
    console.log("Button clicked!");
    toast.success("Contact feature coming soon!", {
      duration: 2000,
      position: "top-right",
    });
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col h-full">
      <div className="relative">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 right-3 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
          {vendor.category}
        </span>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
            {vendor.name}
          </h2>
          <div className="flex items-center  px-2 py-1 rounded-md">
            <Star
              size={16}
              className="text-yellow-500 mr-1"
              fill="currentColor"
            />
            <span className="text-sm font-medium">{vendor.rating}</span>
          </div>
        </div>

        {/* Location Icon */}
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-1" />
          {vendor.location}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-2">
          <button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex justify-center items-center"
            onClick={handleContactClick}
          >
            <Mail size={16} className="mr-2" />
            Contact
          </button>
          <button
            className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            onClick={() =>
              toast.success("Saved to favorites!", { duration: 2000 })
            }
          >
            <Heart size={18} className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;

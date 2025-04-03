import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import VendorCard from "./VendorCard";

const VendorList = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("/vendors.json");
        setVendors(response.data);
      } catch (error) {
        console.error("Error fetching data from json file:", error);
      }
    };
    fetchVendors();
  }, []);
  console.log(vendors);
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Vendor Listing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VendorList;

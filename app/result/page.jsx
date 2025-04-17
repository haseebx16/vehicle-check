"use client";

import React, { useState, useEffect } from 'react';
import Nav from '../Components/Navbar';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const [registrationNumber, setRegistrationNumber] = useState("BHB-947"); // Default value
  
  useEffect(() => {
    // Get the registration number from URL query parameters
    const regNumber = searchParams.get('reg');
    if (regNumber) {
      setRegistrationNumber(regNumber);
    }
  }, [searchParams]);
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Progress Steps */}
      <div className="flex items-center px-4 py-2 bg-white border-b">
        <div className="flex items-center">
          <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</div>
          <span className="ml-2 text-sm font-medium">Precheck</span>
        </div>
        <div className="h-px bg-gray-300 w-8 mx-2"></div>
        <div className="flex items-center text-gray-500">
          <div className="bg-white border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-xs">2</div>
          <span className="ml-2 text-sm font-medium">Payment</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-bold">Success! We've detected this vehicle and its previous data records.</h2>
              <div className="mt-4">
                <span className="bg-black text-white text-sm px-3 py-1 inline-block">VIN/REG: {registrationNumber}</span>
              </div>
            </div>
            
            <div className="bg-gray-400 p-6 rounded">
              <h3 className="text-lg font-bold mb-4">Let's Get Started</h3>
              
              <form>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 bg-white rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 bg-white rounded"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (No spaces)"
                    className="w-full p-3 bg-white rounded"
                  />
                  <input
                    type="text"
                    placeholder="VIN/REG"
                    className="w-full p-3 bg-white rounded"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="md:w-2/5">
            <div className="bg-white p-6 border rounded">
              <h3 className="text-lg mb-4">With VehicleCheck you may get:</h3>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div className="flex items-start">
                  <span className="text-green-600 mr-1">✓</span>
                  <span className="text-sm">Major accidents</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-1">✓</span>
                  <span className="text-sm">Hail damage</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-1">✓</span>
                  <span className="text-sm">Service records</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-1">✓</span>
                  <span className="text-sm">Flood damage</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-1">✓</span>
                  <span className="text-sm">Airbag deployment</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-1">✓</span>
                  <span className="text-sm">Open safety recalls</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-1">✓</span>
                  <span className="text-sm">Vehicle theft</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-1">✓</span>
                  <span className="text-sm">Frame and structural damage</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-1">✓</span>
                  <span className="text-sm">Repair estimates and costs</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-1">✓</span>
                  <span className="text-sm">Money owed on the vehicle (lien)2</span>
                </div>
              </div>
              
              <div className="mt-8 border p-4 rounded">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="checkReport"
                    className="mr-2 h-5 w-5"
                  />
                  <label htmlFor="checkReport" className="font-medium">Check Report</label>
                </div>
                
                <div className="mb-2">
                  <span className="text-2xl font-bold">€33.38</span>
                  <span className="text-sm"> report</span>
                </div>
                
                <div className="text-sm mb-2">
                  You pay €33.38 <span className="line-through">€42.00</span>
                </div>
                
                <div className="bg-red-300 text-red-700 w-16 text-center py-1 mb-4 rounded">
                  -31.77%
                </div>
                
                <div className="border-t pt-4 flex items-center text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-800">✓</span>
                    You'll get report
                  </div>
                  <div className="ml-auto bg-gray-200 rounded-full h-5 w-5 flex items-center justify-center text-gray-400">
                    i
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-medium">
                Get Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
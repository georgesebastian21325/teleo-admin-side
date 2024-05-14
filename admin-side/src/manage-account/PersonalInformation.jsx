import React, { useState } from 'react';
import LogoPlaceHolder from '../assets/logo_placeholder.png';
import { Link } from 'react-router-dom'; 

const PersonalInformation = () => {
  const [formData, setFormData] = useState({
    username: 'Victory',
    email: 'victory@gmail.com',
    buildingNo: '123',
    streetName: 'Main Street',
    barangay: 'San Juan',
    province: 'Metro, Manila',
    postalCode: '1234'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saved changes:', formData);
  };

  const handleCancelChanges = () => {
    setFormData({
      username: 'Victory',
      email: 'victory@gmail.com',
      buildingNo: '123',
      streetName: 'Main Street',
      barangay: 'San Juan',
      province: 'Metro, Manila',
      postalCode: '1234'
    });
    console.log('Cancelled changes');
  };

  return (
    <div className="bg-white min-h-screen flex font-poppins flex-col items-center py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 mt-16">MANAGE ACCOUNT</h1>
      <div className="w-full max-w-xs space-y-4">
        <h2 className="text-sm font-medium mb-5">
          <Link to="/" className="text-black hover:underline focus:underline">
            Profile Settings
          </Link>
        </h2>
        <div className="flex items-center">
          <img src={LogoPlaceHolder} className="w-16 h-16 object-cover" alt="Logo" />
          <span className="ml-3 text-sm">Victory</span>
        </div>

        {/* Username */}
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Username
          </label>
          <div>
            <input
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type="text"
              placeholder="Username"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
          </div>
        </div>

        {/* Email */}
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Email
          </label>
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type="email"
              placeholder="Email"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
          </div>
        </div>

        {/* Building/House No. */}
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Building/House No.
          </label>
          <div>
            <input
              name="buildingNo"
              value={formData.buildingNo}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type="text"
              placeholder="Building/House No."
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
          </div>
        </div>

        {/* Street Name */}
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Street Name
          </label>
          <div>
            <input
              name="streetName"
              value={formData.streetName}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type="text"
              placeholder="Street Name"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
          </div>
        </div>

        {/* Barangay */}
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Barangay
          </label>
          <div>
            <input
              name="barangay"
              value={formData.barangay}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type="text"
              placeholder="Barangay"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
          </div>
        </div>

        {/* Province */}
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Province
          </label>
          <div>
            <input
              name="province"
              value={formData.province}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type="text"
              placeholder="Province"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
          </div>
        </div>

        {/* Postal Code */}
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Postal Code
          </label>
          <div>
            <input
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type="text"
              placeholder="Postal Code"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
          </div>
        </div>

        {/* Save and Cancel Buttons */}
        <div className="w-full flex justify-between mt-4">
          <button onClick={handleSaveChanges} className="w-1/2 h-12 text-xs bg-gray-100 drop-shadow-md text-black font-medium py-2 rounded-full mr-2">
            Save Changes
          </button>
          <button onClick={handleCancelChanges} className="w-1/2 h-12 text-xs bg-gray-100 drop-shadow-md text-black font-medium py-2 rounded-full ml-2">
            Cancel Changes
          </button>
        </div>

      </div>
    </div>

  );
};

export default PersonalInformation;

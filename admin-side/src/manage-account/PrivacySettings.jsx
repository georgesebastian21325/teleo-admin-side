import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import LogoPlaceHolder from '../assets/logo_placeholder.png';

const PrivacySettings = () => {
  const [formData, setFormData] = useState({
    username: 'Victory',
    email: 'victory@gmail.com',
    buildingNo: '123',
    streetName: 'Main Street',
    barangay: 'San Juan',
    province: 'Metro, Manila',
    postalCode: '1234'
  });

  const [showUsername, setShowUsername] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showBuildingNo, setShowBuildingNo] = useState(false);
  const [showStreetName, setShowStreetName] = useState(false);
  const [showBarangay, setShowBarangay] = useState(false);
  const [showProvince, setShowProvince] = useState(false);
  const [showPostalCode, setShowPostalCode] = useState(false);

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
    // Reset all toggle states to false
    setShowUsername(false);
    setShowEmail(false);
    setShowBuildingNo(false);
    setShowStreetName(false);
    setShowBarangay(false);
    setShowProvince(false);
    setShowPostalCode(false);

    console.log('Cancelled changes and reset toggles');
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
        <div className="w-full relative">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Username
          </label>
          <div className="flex items-center">
            <input
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type={showUsername ? 'password' : 'text'} // Show as text if toggled
              placeholder="Username"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
            {/* Toggle button for username visibility */}
            <button
              className="absolute right-0 mr-2 focus:outline-none"
              onClick={() => setShowUsername((prev) => !prev)}
            >
              {showUsername ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        {/* Email */}
        <div className="w-full relative">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Email
          </label>
          <div className="flex items-center">
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type={showEmail ? 'password' : 'text'} // Show as text if toggled
              placeholder="Email"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
            {/* Toggle button for email visibility */}
            <button
              className="absolute right-0 mr-2 focus:outline-none"
              onClick={() => setShowEmail((prev) => !prev)}
            >
              {showEmail ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        {/* Building/House No. */}
        <div className="w-full relative">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Building/House No.
          </label>
          <div className="flex items-center">
            <input
              name="buildingNo"
              value={formData.buildingNo}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type={showBuildingNo ? 'password' : 'text'} // Show as text if toggled
              placeholder="Building/House No."
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
            {/* Toggle button for buildingNo visibility */}
            <button
              className="absolute right-0 mr-2 focus:outline-none"
              onClick={() => setShowBuildingNo((prev) => !prev)}
            >
              {showBuildingNo ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        {/* Street Name */}
        <div className="w-full relative">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Street Name
          </label>
          <div className="flex items-center">
            <input
              name="streetName"
              value={formData.streetName}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type={showStreetName ? 'password' : 'text'} // Show as text if toggled
              placeholder="Street Name"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
            {/* Toggle button for streetName visibility */}
            <button
              className="absolute right-0 mr-2 focus:outline-none"
              onClick={() => setShowStreetName((prev) => !prev)}
            >
              {showStreetName ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        {/* Barangay */}
        <div className="w-full relative">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Barangay
          </label>
          <div className="flex items-center">
            <input
              name="barangay"
              value={formData.barangay}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type={showBarangay ? 'password' : 'text'} // Show as text if toggled
              placeholder="Barangay"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
            {/* Toggle button for barangay visibility */}
            <button
              className="absolute right-0 mr-2 focus:outline-none"
              onClick={() => setShowBarangay((prev) => !prev)}
            >
              {showBarangay ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        {/* Province */}
        <div className="w-full relative">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Province
          </label>
          <div className="flex items-center">
            <input
              name="province"
              value={formData.province}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type={showProvince ? 'password' : 'text'}// Show as text if toggled
              placeholder="Province"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
            {/* Toggle button for province visibility */}
            <button
              className="absolute right-0 mr-2 focus:outline-none"
              onClick={() => setShowProvince((prev) => !prev)}
            >
              {showProvince ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        {/* Postal Code */}
        <div className="w-full relative">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Postal Code
          </label>
          <div className="flex items-center">
            <input
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-1 leading-tight focus:outline-none"
              type={showPostalCode ? 'password' : 'text'}// Show as text if toggled
              placeholder="Postal Code"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
            {/* Toggle button for postalCode visibility */}
            <button
              className="absolute right-0 mr-2 focus:outline-none"
              onClick={() => setShowPostalCode((prev) => !prev)}
            >
              {showPostalCode ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        {/* Save and Cancel Buttons */}
        <div className="w-full flex justify-between mt-4">
          <button
            onClick={handleSaveChanges}
            className="w-1/2 h-12 text-xs bg-gray-100 drop-shadow-md text-black font-medium py-2 rounded-full mr-2"
          >
            Save Changes
          </button>
          <button
            onClick={handleCancelChanges}
            className="w-1/2 h-12 text-xs bg-gray-100 drop-shadow-md text-black font-medium py-2 rounded-full ml-2"
          >
            Cancel Changes
          </button>
        </div>
      </div>
    </div>

  );
};

export default PrivacySettings;


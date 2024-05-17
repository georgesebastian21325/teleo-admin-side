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
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-sm font-medium mb-5">
          <Link to="/" className="text-black hover:underline focus:underline">
            Profile Settings
          </Link>
        </h2>
        <div className="flex items-center mb-8">
          <img src={LogoPlaceHolder} className="w-16 h-16 object-cover" alt="Logo" />
          <span className="ml-3 text-sm">Victory</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            showToggle={showUsername}
            onToggle={() => setShowUsername(!showUsername)}
          />
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            showToggle={showEmail}
            onToggle={() => setShowEmail(!showEmail)}
          />
          <InputField
            label="House Number"
            name="buildingNo"
            value={formData.buildingNo}
            onChange={handleInputChange}
            showToggle={showBuildingNo}
            onToggle={() => setShowBuildingNo(!showBuildingNo)}
          />
          <InputField
            label="Street Name"
            name="streetName"
            value={formData.streetName}
            onChange={handleInputChange}
            showToggle={showStreetName}
            onToggle={() => setShowStreetName(!showStreetName)}
          />
          <InputField
            label="Barangay"
            name="barangay"
            value={formData.barangay}
            onChange={handleInputChange}
            showToggle={showBarangay}
            onToggle={() => setShowBarangay(!showBarangay)}
          />
          <InputField
            label="Province"
            name="province"
            value={formData.province}
            onChange={handleInputChange}
            showToggle={showProvince}
            onToggle={() => setShowProvince(!showProvince)}
          />
          <InputField
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            showToggle={showPostalCode}
            onToggle={() => setShowPostalCode(!showPostalCode)}
          />
        </div>

        <div className="flex justify-between mt-6">
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

const InputField = ({ label, name, value, onChange, showToggle, onToggle }) => (
  <div className="relative">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
      {label}
    </label>
    <div className="flex items-center">
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="appearance-none block w-full bg-white text-gray-700 border-b-2 border-gray-200 py-2 px-3 leading-tight focus:outline-none"
        type={showToggle ? 'password' : 'text'}
        placeholder={`Enter your ${label.toLowerCase()}`}
        style={{ fontSize: '14px', marginTop: '0.25rem' }}
      />
      <button
        className="absolute right-0 mr-2 focus:outline-none"
        onClick={onToggle}
      >
        {showToggle ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </button>
    </div>
  </div>
);

export default PrivacySettings;

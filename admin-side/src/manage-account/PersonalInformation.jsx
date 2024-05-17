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
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    console.log('Saved changes:', formData);
  };

  const handleCancelChanges = () => {
    console.log('Cancelled changes');
    // Reset to initial state or fetched data
  };

  return (
    <div className="bg-white min-h-screen flex font-poppins flex-col items-center py-8 px-4">
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold mb-8 text-left">MANAGE ACCOUNT</h1>
        {/* Profile section */}
        <h1 className="text-sm font-bold mb-8">Profile Settings</h1>
        <div className="flex items-center space-x-3 mb-6">
          <img src={LogoPlaceHolder} className="w-20 h-16 rounded-full" alt="User Profile" />
          <span className="text-xl font-semibold">{formData.username}</span>
        </div>

        {/* Form section */}
        <form className="space-y-4 text-xs">
          <InputField label="Username" name="username" value={formData.username} onChange={handleInputChange}/>
          <InputField label="Email" name="email" value={formData.email} onChange={handleInputChange} type="email" />
          <InputField label="Building/House No." name="buildingNo" value={formData.buildingNo} onChange={handleInputChange} />
          <InputField label="Street Name" name="streetName" value={formData.streetName} onChange={handleInputChange} />
          <InputField label="Barangay" name="barangay" value={formData.barangay} onChange={handleInputChange} />
          <InputField label="Province" name="province" value={formData.province} onChange={handleInputChange} />
          <InputField label="Postal Code" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />

          <div className="flex justify-end space-x-4">
            <button type="button" onClick={handleCancelChanges} className="px-6 py-2 border text-xs border-gray-300 rounded text-gray-600 hover:bg-gray-100">
              Cancel Changes
            </button>
            <button type="button" onClick={handleSaveChanges} className="px-6 py-2 bg-black text-xs text-white rounded hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, type = 'text', name, value, onChange }) => (
  <div>
    <label className="block text-gray-700 text-xs font-bold mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={label}
    />
  </div>
);

export default PersonalInformation;

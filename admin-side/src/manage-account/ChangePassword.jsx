import React, { useState } from 'react';
import LogoPlaceHolder from '../assets/logo_placeholder.png';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: 'victory',
    newPassword: '',
    confirmPassword: ''
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleToggleCurrentPassword = () => {
    setShowCurrentPassword((prevShow) => !prevShow);
  };

  const handleToggleNewPassword = () => {
    setShowNewPassword((prevShow) => !prevShow);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevShow) => !prevShow);
  };

  const handleSaveChanges = () => {
    console.log('Saved changes:', formData);
  };

  const handleCancelChanges = () => {
    setFormData({
      currentPassword: 'victory',
      newPassword: '',
      confirmPassword: ''
    });
    console.log('Cancelled changes');
  };

  return (
    <div className="bg-white min-h-screen flex font-poppins flex-col items-center py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 mt-16">CHANGE PASSWORD</h1>
      
      <div className="w-full max-w-md bg-gray-50 p-8 rounded-lg shadow-lg space-y-4">
        <div className="flex items-center mb-6">
          <img src={LogoPlaceHolder} className="w-16 h-16 object-cover rounded-full" alt="Logo" />
          <span className="ml-3 text-sm">Victory</span>
        </div>

        {/* Current Password */}
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Current Password
          </label>
          <div className="relative">
            <input
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type={showCurrentPassword ? 'text' : 'password'}
              placeholder="Current Password"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={handleToggleCurrentPassword}
            >
              {showCurrentPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            New Password
          </label>
          <div className="relative">
            <input
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type={showNewPassword ? 'text' : 'password'}
              placeholder="New Password"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={handleToggleNewPassword}
            >
              {showNewPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="w-full">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              style={{ fontSize: '12px', marginTop: '0.25rem' }}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={handleToggleConfirmPassword}
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
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

export default ChangePassword;

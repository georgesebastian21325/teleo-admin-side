import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineCog } from "react-icons/hi";
import { LuWrench } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

const Account = () => {
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate('/personal-information');
  };

  const handleChangePasswordClick = () => {
    navigate('/change-password');
  };

  const handlePrivacySettingsClick = () => {
    navigate('/privacy-settings');
  };

  const handleAssignNewAdminClick = () => {
    navigate('/new-admin');
  };

  return (
    <div className="bg-white min-h-screen flex font-poppins flex-col items-center py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 mt-2">MANAGE ACCOUNT</h1>
      <div className="w-full max-w-xs space-y-8">
          <h2 className="text-sm font-medium mb-5">Profile Settings</h2>

        <button onClick={handleUpdateClick} className="w-full h-12 drop-shadow-lg flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg">
            <span className="text-xs">Update Personal Information</span>
            <HiOutlineCog className="h-4 w-4 text-gray-600"/>
        </button>
        
        <button onClick={handleChangePasswordClick} className="w-full h-12 drop-shadow-lg flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg">
          <span className="text-xs">Change Password</span>
          <LuWrench className="h-4 w-4 text-gray-600"/>
        </button>

        <button onClick={handlePrivacySettingsClick} className="w-full h-12 drop-shadow-lg flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg">
          <span className="text-xs">Privacy Settings</span>
          <FaRegEye className="h-4 w-4 text-gray-600"/>
        </button>

        <button onClick={handleAssignNewAdminClick} className="w-full h-12 drop-shadow-lg flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg">
          <span className="text-xs">Assign New Admin</span>
          <AiOutlineUserAdd  className="h-4 w-4 text-gray-600"/>
        </button>

        <button className="w-full drop-shadow-lg py-2 bg-green-500 text-white font-bold rounded-lg mt-8">
          Save Changes
        </button>
        
      </div>
    </div>
  );
};

export default Account;

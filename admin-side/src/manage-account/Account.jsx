import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineCog } from "react-icons/hi";
import { LuWrench } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";

const Account = () => {
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate('/manage-account/personal-information');
  };

  const handleChangePasswordClick = () => {
    navigate('/manage-account/change-password');
  };

  const handlePrivacySettingsClick = () => {
    navigate('/manage-account/privacy-settings');
  };

  const handleAssignNewAdminClick = () => {
    navigate('/manage-account/new-admin');
  };

  return (
    <div className="bg-white min-h-screen flex font-poppins flex-col items-center py-8 px-4">
      <div className="w-full max-w-5xl space-y-8">
        <h2 className="text-3xl font-semibold mb-10">MANAGE ACCOUNT</h2>
        <p className="text-lg text-gray-600 mb-5">Profile Settings</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button onClick={handleUpdateClick} className="w-full h-40 drop-shadow-xl flex flex-col justify-center items-center px-4 py-2 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center w-14 h-14 mb-2 rounded-full bg-gradient-to-t from-red-900 via-slate-900 to-sky-900">
              <FaUser className="h-4 w-8 text-gray-200" />
            </div>
            <span className="text-base font-semibold">PERSONAL INFORMATION</span>
            <span className="text-xs text-gray-500 text-center mt-2">Update your personal information</span>
          </button>
          
          <button onClick={handleChangePasswordClick} className="w-full h-40 drop-shadow-xl flex flex-col justify-center items-center px-4 py-2 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center w-14 h-14 mb-2 rounded-full bg-gradient-to-t from-red-900 via-slate-900 to-sky-900">
              <FaScrewdriverWrench  className="h-4 w-8 text-gray-200" />
            </div>
            <span className="text-base font-semibold">CHANGE PASSWORD</span>
            <span className="text-xs text-gray-500 text-center mt-2">Update your account password</span>
          </button>

          <button onClick={handlePrivacySettingsClick} className="w-full h-40 drop-shadow-xl flex flex-col justify-center items-center px-4 py-2 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center w-14 h-14 mb-2 rounded-full bg-gradient-to-t from-red-900 via-slate-900 to-sky-900">
              <FaRegEye className="h-4 w-8 text-gray-200" />
            </div>
            <span className="text-base font-semibold">PRIVACY SETTINGS</span>
            <span className="text-xs text-gray-500 text-center mt-2">Manage your privacy preferences</span>
          </button>

          <button onClick={handleAssignNewAdminClick} className="w-full h-40 drop-shadow-xl flex flex-col justify-center items-center px-4 py-2 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-center w-14 h-14 mb-2 rounded-full bg-gradient-to-t from-red-900 via-slate-900 to-sky-900">
              <MdAdminPanelSettings className="h-5 w-8 text-gray-200" />
            </div>
            <span className="text-base font-semibold">ASSIGN NEW</span>
            <span className="text-xs text-gray-500 text-center mt-2">Assign a new admin</span>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Account;

import React, { useState } from 'react';
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

  const handleUpdateClick = () => navigate('/manage-account/personal-information');
  const handleChangePasswordClick = () => navigate('/manage-account/change-password');
  const handlePrivacySettingsClick = () => navigate('/manage-account/privacy-settings');
  const handleAssignNewAdminClick = () => navigate('/manage-account/new-admin');

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-5xl">
        <div className="text-3xl font-semibold mb-10 flex justify-center">MANAGE ACCOUNT</div>
        <p className="text-lg text-gray-600 mb-5">Profile Settings</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ButtonCard onClick={handleUpdateClick} icon={<FaUser size={32} className="text-gray-200" />} title="PERSONAL INFORMATION" />
          <ButtonCard onClick={handleChangePasswordClick} icon={<FaScrewdriverWrench size={32} className="text-gray-200" />} title="CHANGE PASSWORD" />
          <ButtonCard onClick={handlePrivacySettingsClick} icon={<FaRegEye size={32} className="text-gray-200" />} title="PRIVACY SETTINGS" />
          <ButtonCard onClick={handleAssignNewAdminClick} icon={<MdAdminPanelSettings size={32} className="text-gray-200" />} title="ASSIGN NEW" />
        </div>
        
      </div>
    </div>
  );
};

const ButtonCard = ({ onClick, icon, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(true)}
      className="w-full h-40 drop-shadow-xl flex flex-row justify-start items-center px-4 py-2 bg-gray-50 rounded-lg relative transform transition duration-300 ease-in-out hover:bg-gray-200 hover:scale-110"
    >
      <div className="flex items-center justify-center w-20 h-20 mr-4 rounded-full bg-gradient-to-t from-red-900 via-slate-900 to-sky-900 transform transition duration-300 ease-in-out">
        {React.cloneElement(icon, { size: isHovered ? 40 : 32 })}
      </div>
      <span className={`text-base font-semibold transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        {title}
      </span>
    </button>
  );
};

export default Account;

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LogoPlaceHolder from '../assets/logo_placeholder.png';

const MemberInfo = () => {
  const location = useLocation();
  const member = location.state?.member;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    birthday: '',
    buildingNo: '',
    streetName: '',
    barangay: '',
    city: '',
    province: '',
    postalCode: '',
    country: ''
  });

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name || '',
        email: member.email || '',
        mobileNumber: member.mobileNumber || '',
        birthday: member.birthday || '',
        buildingNo: member.buildingNo || '',
        streetName: member.streetName || '',
        barangay: member.barangay || '',
        city: member.city || '',
        province: member.province || '',
        postalCode: member.postalCode || '',
        country: member.country || ''
      });
    }
  }, [member]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="bg-white min-h-screen flex font-poppins flex-col items-center py-8 px-4">
      <div className="w-full max-w-4xl p-8 rounded-lg">
        <div className="flex items-center mb-2">
          <img src={LogoPlaceHolder} className="w-26 h-24 rounded-full" alt="User Profile" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{formData.name}</h2>
            <p className="text-gray-500">Member</p>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name" name="name" value={formData.name} onChange={handleInputChange} />
          <InputField label="Email" name="email" value={formData.email} onChange={handleInputChange} type="email" />
          <InputField label="Mobile Number" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
          <InputField label="Birthday" name="birthday" value={formData.birthday} onChange={handleInputChange} placeholder="MM/DD/YYYY" />
        </div>

        <h3 className="text-lg font-semibold mb-4 mt-6">Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Building/House Number" name="buildingNo" value={formData.buildingNo} onChange={handleInputChange} />
          <InputField label="Street Name" name="streetName" value={formData.streetName} onChange={handleInputChange} />
          <InputField label="Barangay" name="barangay" value={formData.barangay} onChange={handleInputChange} />
          <InputField label="City/Municipality" name="city" value={formData.city} onChange={handleInputChange} />
          <InputField label="Province" name="province" value={formData.province} onChange={handleInputChange} />
          <InputField label="ZIP/Postal Code" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
          <InputField label="Country" name="country" value={formData.country} onChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, type = 'text', name, value, onChange, placeholder }) => (
  <div>
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight text-xs focus:outline-none focus:shadow-outline"
      placeholder={placeholder || label}
    />
  </div>
);

export default MemberInfo;

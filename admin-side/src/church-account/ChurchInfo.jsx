import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logoImage from '../assets/logo_placeholder.png';

const ChurchInfo = () => {
  const location = useLocation();
  const member = location.state?.member;

  const [formData, setFormData] = useState({
    churchName: '',
    email: '',
    mobileNumber: '',
    buildingNumber: '',
    streetName: '',
    barangay: '',
    city: '',
    province: '',
    postalCode: '',
    country: '',
    events: []
  });

  useEffect(() => {
    if (member) {
      setFormData({
        churchName: member.name || '',
        email: member.email || '',
        mobileNumber: member.mobileNumber || '',
        buildingNumber: member.buildingNumber || '',
        streetName: member.streetName || '',
        barangay: member.barangay || '',
        city: member.city || '',
        province: member.province || '',
        postalCode: member.postalCode || '',
        country: member.country || '',
        events: member.events || []
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

  const handleEditDetails = () => {
    // Logic to handle editing details
    console.log('Edit details clicked');
  };

  return (
    <div className="bg-white min-h-screen flex font-poppins flex-col items-center py-8 px-4">
      <div className="w-full max-w-4xl p-8 ">        
        <div className="flex items-center mb-8">
          <img src={logoImage} className="w-24 h-24 rounded-full" alt="User Profile" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{formData.churchName}</h2>
            <p className="text-gray-500">Member</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-4">Church Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputField label="Church Name" name="churchName" value={formData.churchName} onChange={handleInputChange} />
          <InputField label="Email" name="email" value={formData.email} onChange={handleInputChange} type="email" />
          <InputField label="Mobile Number" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
        </div>

        <h3 className="text-lg font-semibold mb-4 mt-6">Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputField label="Building/House Number" name="buildingNumber" value={formData.buildingNumber} onChange={handleInputChange} />
          <InputField label="Street Name" name="streetName" value={formData.streetName} onChange={handleInputChange} />
          <InputField label="Barangay" name="barangay" value={formData.barangay} onChange={handleInputChange} />
          <InputField label="City/Municipality" name="city" value={formData.city} onChange={handleInputChange} />
          <InputField label="Province" name="province" value={formData.province} onChange={handleInputChange} />
          <InputField label="ZIP/Postal Code" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
          <InputField label="Country" name="country" value={formData.country} onChange={handleInputChange} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {formData.events.map((event, index) => (
              <EventCard 
                key={index}
                title={event.title}
                description={event.description}
                date={event.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, type = 'text', name, value, onChange, placeholder }) => (
  <div>
    <label className="block text-gray-700 text-xs font-bold mb-2">{label}</label>
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

const EventCard = ({ title, description, date }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
    <div className="h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
      <span className="text-gray-500 text-xl">Image Placeholder</span>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  </div>
);

export default ChurchInfo;

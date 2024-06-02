import React, { useState } from 'react';
import LogoPlaceHolder from '../assets/logo_placeholder.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";

const NewAdmin = () => {
  const [members, setMembers] = useState([
    { name: 'John Doe', memberSince: '2018', location: 'Location: New York, USA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.' },
    { name: 'Jane Smith', memberSince: '2015', location: 'Location: London, UK', description: 'Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.' },
    { name: 'Michael Johnson', memberSince: '2020', location: 'Location: Manila, Philippines', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.' },
    { name: 'Sarah Lee', memberSince: '2019', location: 'Location: Sydney, Australia', description: 'Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.' }
  ]);
  const [adminsCount, setAdminsCount] = useState(3); // Initialize admins count

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAccept = () => {
    if (selectedMember) {
      const updatedMembers = members.filter((mem) => mem.name !== selectedMember.name);
      setMembers(updatedMembers);
      setSelectedMember(null);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);

      // Increase admins count
      setAdminsCount((prevCount) => prevCount + 1);
    }
    setModalOpen(false);
  };

  const modalContainerStyles = {
    padding: '20px',
    width: '80%',
    maxWidth: '400px',
  };

  const navigate = useNavigate(); // Added the useNavigate hook here

  return (
    <div className={`bg-white min-h-screen flex flex-col items-center py-8 px-4 ${isModalOpen ? 'backdrop-blur-sm filter' : ''}`}>
      <h1 className="text-3xl font-bold mb-8 mt-16">Assign New Admin</h1>
      <p className="text-gray-600 mb-8">Assign a new admin to manage the church's activities and members.</p>

      <div className="w-full max-w-2xl">
        {members.map((member, index) => (
          <div key={index} className="flex justify-between items-center py-4 border-b border-gray-300">
            <div className="flex items-center">
              <span className="w-10 h-10 flex justify-center items-center bg-gray-200 text-gray-700 text-lg font-medium rounded-full">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </span>
              <div className="ml-4">
                <h3 className="text-sm font-medium">{member.name}</h3>
                <p className="text-xs text-gray-500">Member since {member.memberSince}</p>
              </div>
            </div>
            <button
              onClick={() => handleOpenModal(member)}
              className="text-xs text-blue-600 hover:text-blue-800 focus:text-blue-800"
            >
              Assign as Admin
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full max-w-2xl mt-8 text-sm text-gray-500">
        <div className="flex items-center">
          <span className="mr-2"></span>
          <span>Total Members: {members.length}</span>
        </div>
        <div className="flex items-center">
          <span className="mr-2"></span>
          <span>Admins: {adminsCount}</span> {/* Display admins count */}
        </div>
      </div>
      {showAlert && (
        <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-6 py-3 rounded-full shadow-lg flex items-center justify-center">
          <FaCircleCheck className="mr-2" /> Admin successfully assigned!
        </div>
      )}

      {isModalOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg flex flex-col items-center text-center" style={modalContainerStyles}>
            <h2 className="text-md font-semibold mb-2">You are about to make this member an admin</h2>
            <div className="flex items-center space-x-4">
              <img src={LogoPlaceHolder} className="w-20 h-20 object-cover rounded-full" alt="Logo" />
              <div className="text-left">
                <h3 className="text-md font-bold mt-2">{selectedMember.name}</h3>
                <p className="text-xs">{selectedMember.location}</p>
                <p className="text-xs">{selectedMember.description}</p>
              </div>
            </div>
            <div className="flex mt-4">
              <button onClick={handleCloseModal} className="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded text-xs mr-2">
                Go Back
              </button>
              <button onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-xs ml-2">
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Added div with button inside */}
      <div className="mt-6 w-full flex justify-center px-4">
        <button
          type="button"
          onClick={() => navigate('/manage-account')}
          className="px-6 py-2 bg-gray-300 text-xs text-gray-600 rounded hover:bg-gray-400"
          style={{ marginRight: '600px' }}  // Moves the button 100 pixels to the right
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default NewAdmin;

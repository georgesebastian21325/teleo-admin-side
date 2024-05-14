import React, { useState } from 'react';
import LogoPlaceHolder from '../assets/logo_placeholder.png';
import { Link } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";

const NewAdmin = () => {
  const [members, setMembers] = useState([
    { name: 'Member 1', location: 'Location: New York, USA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.' },
    { name: 'Member 2', location: 'Location: London, UK', description: 'Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.' },
    { name: 'Member 3', location: 'Location: Manila, Philippines', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.' },
    { name: 'Member 4', location: 'Location: Sydney, Australia', description: 'Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.' },
    { name: 'Member 5', location: 'Location: Mumbai, India', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.' },
    { name: 'Member 6', location: 'Location: Tokyo, Japan', description: 'Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.' },
  ]);

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
    }
    setModalOpen(false);
  };

  const modalContainerStyles = {
    padding: '20px',
    width: '80%',
    maxWidth: '400px',
  };

  return (
    <div className={`bg-white min-h-screen flex font-poppins flex-col items-center py-8 px-4 ${isModalOpen ? 'backdrop-blur-sm filter' : ''}`}>
      <h1 className="text-3xl font-bold mb-8 mt-16">MANAGE ACCOUNT</h1>
      <div className="w-full max-w-xs">
        <div className="flex justify-between">
        <h2 className="text-sm font-medium mb-5">
          <Link to="/" className="text-black hover:underline focus:underline">
            Profile Settings
          </Link>
        </h2>
        </div>
        <div className="flex justify-between mb-4">
          <div className="text-md font-medium">Church Members</div>
          <div className="bg-blue-800 text-white text-xs font-bold px-2 py-1 rounded-full">{members.length}</div>
        </div>

        {members.map((member, index) => (
          <div key={index} className="flex justify-between items-center py-3 border-b border-gray-300">
            <div className="flex items-center">
              <span className="w-10 h-10 flex justify-center items-center bg-gray-200 text-gray-700 text-lg font-medium rounded-full">
                {member.name[0]}
              </span>
              <span className="ml-4 text-sm font-medium">{member.name}</span>
            </div>
            <button onClick={() => handleOpenModal(member)} className="bg-black hover:bg-blue-600 h-8 text-white font-bold py-2 px-4 rounded-md text-xs">
              Assign
            </button>
          </div>
        ))}

        {showAlert && (
          <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 bg-green-900 text-white text-sm px-4 py-2 rounded whitespace-nowrap flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default NewAdmin;

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ChurchModal from './ChurchModal';
import logoImage from '../assets/logo_placeholder.png';
import { ChurchContext } from '../context/ChurchContext';

const ChurchAccountPage = () => {
    const [membersState, setMembersState, applicantsState, setApplicantsState] = useContext(ChurchContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    const navigate = useNavigate();

    const handleViewClick = (member) => {
        navigate('/church-account/ChurchInfo', { state: { member } });
    };

    const openModal = (member) => {
        setSelectedApplicant(member);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const handleAcceptApplicant = (member) => {
        setApplicantsState(currentApplicants => currentApplicants.filter(m => m !== member));
        setMembersState(currentMembers => [member, ...currentMembers]);
        setIsModalOpen(false);
    };

    const handleDecline = (member) => {
        setApplicantsState(currentApplicants => currentApplicants.filter(m => m !== member));
    };

    return (
        <div className="p-6 max-w-screen-lg font-poppins mx-auto">
            <h1 className="text-[28px] font-extrabold text-center mt-8 mb-6">CHURCH ACCOUNT</h1>
            <div className="flex items-center mb-4">
                <span className="font-semibold text-[0.75rem]">Pending Applications</span>
                <div className="relative ml-2">
                    <div className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {applicantsState.length}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {applicantsState.map((applicant, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between text-[0.75rem]">
                        <div className="flex items-center">
                            <img src={logoImage} alt="Logo" className="w-10 h-10 object-cover mr-2 ml-2" />
                            <div>
                                <span className="font-semibold">{applicant.name}</span>
                                <p className="text-gray-500">{applicant.email}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-gray-500">Joined {applicant.joined}</p>
                            <div className="flex">
                                <button onClick={() => openModal(applicant)} className="bg-green-500 text-white ml-4 px-2 py-1 rounded text-xs">ACCEPT</button>
                                <button onClick={() => handleDecline(applicant)} className="bg-red-500 text-white ml-2 px-2 py-1 rounded text-xs">DECLINE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center mb-4 mt-8">
                <span className="font-semibold text-[0.75rem]">Church Members</span>
                <div className="relative ml-2">
                    <div className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {membersState.length}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {membersState.map((member, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between text-[0.75rem]">
                        <div className="flex items-center">
                            <img src={logoImage} alt="Logo" className="w-10 h-10 object-cover mr-2 ml-2" />
                            <div>
                                <span className="font-semibold">{member.name}</span>
                                <p className="text-gray-500">{member.position}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-gray-500">Joined {member.joined}</p>
                            <div className="flex">
                                <button onClick={() => handleViewClick(member)} className="text-blue-500 ml-4 px-2 py-1 rounded text-xs">VIEW</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && <ChurchModal member={selectedApplicant} closeModal={closeModal} acceptHandler={handleAcceptApplicant} />}
        </div>
    );
}

export default ChurchAccountPage;

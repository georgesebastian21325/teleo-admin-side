import React from 'react';
import logoImage from '../assets/logo_placeholder.png'; // Use the correct path to your logo image

export default function Modal({ closeModal, member, acceptHandler }) { // Include acceptHandler as a prop
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white p-4 rounded-lg shadow" style={{ maxWidth: "90vw", margin: "0 auto" }}>
                <h2 className="text-sm mb-2">You are about to accept an application</h2>
                <div className="flex items-center">
                    <img src={logoImage} alt="Logo" className="w-18 h-18 object-cover" />
                    <div className="ml-2">
                        <h3 className="text-base font-semibold">{member}</h3> {/* Display the member's name */}
                        <p className="text-[0.75rem] text-gray-500">Location: Manila, Philippines</p>
                        <p className="text-[0.75rem] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="bg-black text-white px-5 py-1 rounded text-xs" onClick={closeModal}>Go Back</button>
                    <button className="bg-green-500 text-white px-5 py-1 rounded text-xs ml-2" onClick={() => {
                        acceptHandler(member); // Call the acceptHandler when "Accept" button is clicked
                        closeModal(); // Optionally, close the modal after acceptance
                    }}>Accept</button>
                </div>
            </div>
        </div>
    );
}

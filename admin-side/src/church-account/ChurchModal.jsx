import React from 'react';
import logoImage from '../assets/logo_placeholder.png'; 

export default function ChurchModal({ closeModal, member, acceptHandler }) { 
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <div className="bg-white p-4 rounded-lg shadow" style={{ maxWidth: "90vw", margin: "0 auto" }}>
                <h2 className="text-sm mb-2 text-center">You are about to accept an application</h2> {/* Added text-center */}
                <div className="flex items-center justify-center"> {/* Added justify-center for centering the image and text block */}
                    <img src={logoImage} alt="Logo" className="w-18 h-18 object-cover" />
                    <div className="ml-2">
                        <h3 className="text-base font-semibold">{member.name}</h3> 
                        <p className="text-[0.75rem] text-gray-500">Location: Manila, Philippines</p>
                        <p className="text-[0.75rem] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="bg-black text-white px-5 py-1 rounded text-xs" onClick={closeModal}>Go Back</button>
                    <button className="bg-green-500 text-white px-5 py-1 rounded text-xs ml-2" onClick={() => {
                        acceptHandler(member);
                        closeModal(); 
                    }}>Accept</button>
                </div>
            </div>
        </div>
    );
}

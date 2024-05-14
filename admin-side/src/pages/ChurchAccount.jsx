import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChurchInfo from '../church-account/ChurchInfo'; 
import ChurchMembers from '../church-account/ChurchMembers'; 
import Modal from '../church-account/Modal';

export default function ChurchAccount() {
    return (
        <Routes>
            <Route path="/" element={<ChurchMembers />} />
            <Route path="ChurchInfo" element={<ChurchInfo />} /> {/* Corrected path */}
        </Routes>
    );
}

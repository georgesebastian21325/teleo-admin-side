import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChurchInfo from '../church-account/ChurchInfo';
import ChurchAccountPage from '../church-account/ChurchAccountPage';
import ChurchModal from '../church-account/ChurchModal';

export default function ChurchAccount() {
    return (
        <Routes>
            <Route path="/" element={<ChurchAccountPage />} />
            <Route path="ChurchInfo" element={<ChurchInfo />} /> {/* Corrected path */}
        </Routes>
    );
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberInfo from '../member-account/MemberInfo';
import MemberAccountPage from '../member-account/MemberAccountPage';

export default function MemberAccount() {
    return (
        <Routes>
            <Route path="/" element={<MemberAccountPage />} />
            <Route path="/MemberInfo" element={<MemberInfo />} />
        </Routes>
    );
}
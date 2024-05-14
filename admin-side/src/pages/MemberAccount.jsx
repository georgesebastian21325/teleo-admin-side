import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberInfo from '../member-account/MemberInfo';
import MemberAcc from '../member-account/MemberAcc';

export default function MemberAccount() {
    return (
        <Routes>
            <Route path="/" element={<MemberAcc />} />
            <Route path="/member-info" element={<MemberInfo />} />
        </Routes>
    );
}

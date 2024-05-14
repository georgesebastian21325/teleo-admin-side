import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MemberAcc from '../member-account/MemberAcc';
import MemberInfo from '../member-account/MemberInfo';

const MemberAccount = () => {
    return (
        <Routes>
            <Route path="/" element={<MemberAcc />} />
            <Route path="/member-info" element={<MemberInfo />} />
        </Routes>
    );
};

export default MemberAccount;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChurchMembers from '../church-account/ChurchMembers';
import ChurchInfo from '../church-account/ChurchInfo';

const ChurchAccount = () => {
    return (
        <Routes>
            <Route path="/" element={<ChurchMembers />} />
            <Route path="/church-info" element={<ChurchInfo />} />
        </Routes>
    );
};

export default ChurchAccount;

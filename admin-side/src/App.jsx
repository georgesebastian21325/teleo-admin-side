import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './global/Navbar';
import Dashboard from './pages/Dashboard';
import MemberAccount from './pages/MemberAccount';
import ChurchAccount from './pages/ChurchAccount';
import ManageAccount from './pages/ManageAccount';

function App() {
    return (
        <Router>
            <div className="flex">
                <Navbar />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/member-account/*" element={<MemberAccount />} />
                        <Route path="/church-account/*" element={<ChurchAccount />} />
                        <Route path="/manage-account/*" element={<ManageAccount />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

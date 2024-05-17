import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './global/Navbar';
import Dashboard from './pages/Dashboard';
import MemberAccount from './pages/MemberAccount';
import ChurchAccount from './pages/ChurchAccount';
import ManageAccount from './pages/ManageAccount';
import MemberProvider from './context/MemberContext';
import ChurchProvider from './context/ChurchContext';
import Login from './pages/Login';

function App() {
    return (
        <MemberProvider>
            <ChurchProvider>
                <Router>
                    <AppContent />
                </Router>
            </ChurchProvider>
        </MemberProvider>
    );
}

function AppContent() {
    const location = useLocation(); // Get the current location
    const showNavbar = location.pathname !== "/"; // Determine if Navbar should be shown

    return (
        <div className="flex">
            {showNavbar && <Navbar />}
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/member-account/*" element={<MemberAccount />} />
                    <Route path="/church-account/*" element={<ChurchAccount />} />
                    <Route path="/manage-account/*" element={<ManageAccount />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

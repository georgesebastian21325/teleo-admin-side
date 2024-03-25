import React, { useState } from 'react';
import { MdOutlineEmail, MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import LogoPlaceHolder from '../assets/logo_placeholder.png';

export default function UpperSection() {
    const [passwordShown, setPasswordShown] = useState(false);
    
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className="flex flex-col items-center font-poppins font-extrabold text-center mt-[9rem]">
            <img src={LogoPlaceHolder} className="w-[5rem] mb-5" alt="Logo"/>
            <h1 className="text-[30px]">SIGN IN</h1>
            <h1 className="text-[30px]">(ADMIN)</h1>
            
            <div className="mb-4 relative mt-[2rem]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdOutlineEmail className="text-gray-400" />
                </div>
                <input
                    className="shadow-md appearance-none border rounded w-full py-2 px-12 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal text-sm"
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                />
            </div>

            <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdLockOutline className="text-gray-400" />
                </div>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button onClick={togglePasswordVisibility} type="button" className="text-gray-400 focus:outline-none">
                        {passwordShown ? <MdVisibilityOff /> : <MdVisibility />}
                    </button>
                </div>
                <input
                    className="shadow-md appearance-none border rounded w-full py-2 px-12 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-normal text-sm"
                    id="password"
                    type={passwordShown ? 'text' : 'password'}
                    placeholder="Password"
                    required
                />
            </div>

            <p className="font-normal text-[10px] ml-[9rem] cursor-pointer">Forgot Password?</p>
            <button className="bg-gradient-to-r from-[#073150] via-[#093D64] to-[#5F1313] hover:from-[#093D64] hover:via-[#5F1313] hover:to-[#000000] text-white font-bold py-1 px-9 rounded mt-8">
                LOGIN
            </button>
        </div>
    );
}

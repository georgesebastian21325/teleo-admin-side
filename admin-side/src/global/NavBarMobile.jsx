import { useState } from "react";
import {
    PaperAirplaneIcon,
    MoonIcon,
    SunIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbBible } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GoSignOut } from "react-icons/go";


export default function NavBarMobile() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="md:hidden">
            <nav>
                <div className="max-w-7xl mx-auto shadow">
                    <div className="flex mx-auto justify-between w-[90%]">
                        {/* Primary menu and logo */}
                        <div className="flex items-center gap-12 my-5">
                            {/* logo */}
                            <div>
                                <a
                                    href="/"
                                    className="flex font-bold text-black items-center"
                                >
                                   
                                    <span>Teleo</span>
                                </a>
                            </div>
                        </div>
                        {/* secondary */}
                        <div className="flex gap-9">
                            <div className="lg:hidden flex items-center">
                                <button onClick={() => setToggleMenu(!toggleMenu)}>
                                    <Bars3Icon className="h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile navigation */}
                <div
                    className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
                        }`}
                >
                    <div className="px-8">
                        <div className="flex flex-col gap-6 font-semibold tracking-wider mt-3 text-[0.9rem]">
                            <div className="flex flex-row items-center gap-2">
                                <MdOutlineDashboard />
                                <a href="/" className='text-black'> Dashboard </a>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <FaRegCalendarAlt />
                                <a href="/create-event" className='text-black'> Create Event </a>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <TbBible />
                                <a href="/online-discipleship" className='text-black'> Online Discipleship  </a>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <MdOutlineManageAccounts />
                                <a href="/manage-account" className='text-black'> Manage Account </a>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <GoSignOut />
                                <a href="/sign-out" className='text-black'> Sign Out </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

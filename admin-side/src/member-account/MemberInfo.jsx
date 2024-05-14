import React, { useState } from 'react';
import LogoPlaceHolder from '../assets/logo_placeholder.png';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { MdOutlineBook } from 'react-icons/md';
import { GrDocumentNotes } from 'react-icons/gr';
import { MdOutlineVideoCameraBack } from "react-icons/md";

const MemberInfo = () => {
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false); // State for Section 3
    const [isExpanded4, setIsExpanded4] = useState(false);
    const [isIconClicked, setIsIconClicked] = useState(false);
    const toggleExpansion1 = () => {
        setIsExpanded1(!isExpanded1);
    };

    const toggleExpansion2 = () => {
        setIsExpanded2(!isExpanded2);
    };

    const toggleExpansion3 = () => {
        setIsExpanded3(!isExpanded3); // Toggle function for Section 3
    };

    const toggleExpansion4 = () => {
        setIsExpanded4(!isExpanded4); // Toggle function for Section 3
    };
    const toggleIcon = () => {
        setIsIconClicked(!isIconClicked);
    };

    return (
        <div className="flex flex-col mt-20 font-poppins ml-5">
            <div className="flex items-center">
                <img src={LogoPlaceHolder} alt="Logo" className="w-18 h-14" />
                <p className="ml-1 font-semibold">Church Name</p>
            </div>
            
            <div className="flex flex-col items-start mt-12 relative">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <p className="text-[0.70rem] font-bold ml-6">Section 1</p>
                        <button onClick={toggleExpansion1} className="focus:outline-none ml-[13rem]">
                            {isExpanded1 ? <TiArrowSortedUp className="text-md" /> : <TiArrowSortedDown className="text-md" />}
                        </button>
                    </div>
                </div>
                <hr className="border-t my-2 w-full" style={{ maxWidth: 'calc(100% - 3rem)' }} />
                {isExpanded1 && (
                    <div className="flex justify-between items-center w-full ">
                        <div className="flex items-center ml-6">
                            <MdOutlineBook className="text-[0.60rem] mr-1" />
                            <p className="text-[0.60rem]">Loren Ipsum</p>
                        </div>
                        <div className="flex items-center mr-[3.5rem]">
                            <p className="text-[0.60rem]">View Notes</p>
                            <GrDocumentNotes className="text-[0.60rem]  ml-1" />
                        </div>
                    </div>
                )}
            </div>

            {/* Section 2 */}
            <div className="flex flex-col items-start mt-5 relative">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <p className="text-[0.70rem] font-bold ml-6">Section 2</p>
                        <button onClick={toggleExpansion2} className="focus:outline-none ml-[13rem]">
                            {isExpanded2 ? <TiArrowSortedUp className="text-md" /> : <TiArrowSortedDown className="text-md" />}
                        </button>
                    </div>
                </div>
                <hr className="border-t my-2 w-full" style={{ maxWidth: 'calc(100% - 3rem)' }} />
                {isExpanded2 && (
                    <div className="flex justify-between items-center w-full ">
                        <div className="flex items-center ml-6">
                            <MdOutlineBook className="text-[0.60rem] mr-1" />
                            <p className="text-[0.60rem]">Loren Ipsum</p>
                        </div>
                        <div className="flex items-center mr-[3.5rem]">
                            <p className="text-[0.60rem]">View Notes</p>
                            <GrDocumentNotes className="text-[0.60rem]  ml-1" />
                        </div>
                    </div>
                )}
            </div>

            {/* Section 3 */}
            <div className="flex flex-col items-start mt-5 relative">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <p className="text-[0.70rem] font-bold ml-6">Section 3</p>
                        <button onClick={toggleExpansion3} className="focus:outline-none ml-[13rem]">
                            {isExpanded3 ? <TiArrowSortedUp className="text-md" /> : <TiArrowSortedDown className="text-md" />}
                        </button>
                    </div>
                </div>
                <hr className="border-t my-2 w-full" style={{ maxWidth: 'calc(100% - 3rem)' }} />
                {isExpanded3 && (
                    <div className="flex justify-between items-center w-full ">
                        <div className="flex items-center ml-6">
                            <MdOutlineBook className="text-[0.60rem] mr-1" />
                            <p className="text-[0.60rem]">Loren Ipsum</p>
                        </div>
                        <div className="flex items-center mr-[3.5rem]">
                            <p className="text-[0.60rem]">View Notes</p>
                            <GrDocumentNotes className="text-[0.60rem] ml-1" />
                        </div>
                    </div>
                )}
            </div>
            
  
<div className="flex flex-col items-start mt-5 relative">
    <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
            <p className="text-[0.70rem] font-bold ml-6">Section 4</p>
            <button onClick={toggleExpansion4} className="focus:outline-none ml-[13rem]">
                {isExpanded4 ? <TiArrowSortedUp className="text-md" /> : <TiArrowSortedDown className="text-md" />}
            </button>
        </div>
    </div>
    <hr className="border-t my-2 w-full" style={{ maxWidth: 'calc(100% - 3rem)' }} />
    {isExpanded4 && (
        <div className="flex justify-between items-center w-full ">
            <div className="flex items-center ml-6">
                <MdOutlineBook className="text-[0.60rem] mr-1" />
                <p className="text-[0.60rem]">Loren Ipsum</p>
            </div>
            <div className="flex items-center mr-[3.5rem]">
                <button onClick={toggleIcon} className="focus:outline-none">
                    {isIconClicked ? <TiArrowSortedUp className="text-xs ml-1" /> : <TiArrowSortedDown className="text-xs ml-1" />}
                </button>
            </div>
        </div>
    )}
    {isIconClicked && (
        <div className="flex justify-between items-center w-full mt-2 ">
            <div className="flex items-center ml-10">
                <MdOutlineVideoCameraBack className="text-[0.60rem] mr-1" />
                <p className="text-[0.60rem]">Loren Ipsum</p>
            </div>
            <div className="flex items-center mr-[3.5rem]">
                <p className="text-[0.60rem]">View Notes</p>
                <GrDocumentNotes className="text-[0.60rem] ml-1" />
            </div>
            
        </div>
        
    )}
</div>

        </div>
    );
};

export default MemberInfo;

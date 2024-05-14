import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineDashboard, MdMenu, MdClose } from "react-icons/md";
import { FaBible, FaUsers } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import ImgPlaceholder from '../assets/logo_placeholder.png';
import classNames from "classnames";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { pathname } = useLocation();

  return (
    <div>
      {/* Mobile Navbar */}
      <div className="md:hidden">
        <nav className="bg-gray-500">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <span className="font-bold text-white ml-2">Teleo</span>
                </Link>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  {isOpen ? <MdClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
          <div className={`${isOpen ? "block" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className={classNames(linkClass, {
                  "bg-neutral-700 text-white": pathname === "/",
                  "text-gray-300": pathname !== "/",
                })}
              >
                <MdOutlineDashboard className="mr-3 inline" /> Dashboard
              </Link>
              <Link
                to="/member-account"
                className={classNames(linkClass, {
                  "bg-neutral-700 text-white": pathname === "/member-account",
                  "text-gray-300": pathname !== "/member-account",
                })}
              >
                <FaUsers className="mr-3 inline" /> Member
              </Link>
              <Link
                to="/church-account"
                className={classNames(linkClass, {
                  "bg-neutral-700 text-white": pathname === "/church-account",
                  "text-gray-300": pathname !== "/church-account",
                })}
              >
                <FaBible className="mr-3 inline" /> Church
              </Link>
              <Link
                to="/manage-account"
                className={classNames(linkClass, {
                  "bg-neutral-700 text-white": pathname === "/manage-account",
                  "text-gray-300": pathname !== "/manage-account",
                })}
              >
                <BsFillPersonFill className="mr-3 inline" /> Manage Account
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <div className="bg-gradient-to-t from-red-900 via-slate-900 to-sky-900 h-screen w-60 p-3 flex-col hidden lg:block">
        <div className="flex flex-col items-center py-3">
          <div className="flex flex-col mr-2 items-center mt-10">
            <img src={ImgPlaceholder} alt="Logo" />
            <span className="text-neutral-200 text-lg">Every Nation</span>
          </div>
        </div>
        <div className="py-8 flex flex-1 flex-col gap-3 mt-12">
          <Link
            to="/"
            className={classNames(linkClass, {
              "bg-neutral-700 text-white": pathname === "/",
              "text-neutral-400": pathname !== "/",
            })}
          >
            <MdOutlineDashboard className="mr-3" /> Dashboard
          </Link>
          <Link
            to="/member-account"
            className={classNames(linkClass, {
              "bg-neutral-700 text-white": pathname === "/member-account",
              "text-neutral-400": pathname !== "/member-account",
            })}
          >
            <FaUsers className="mr-3" /> Member
          </Link>
          <Link
            to="/church-account"
            className={classNames(linkClass, {
              "bg-neutral-700 text-white": pathname === "/church-account",
              "text-neutral-400": pathname !== "/church-account",
            })}
          >
            <FaBible className="mr-3" /> Church
          </Link>
          <Link
            to="/manage-account"
            className={classNames(linkClass, {
              "bg-neutral-700 text-white": pathname === "/manage-account",
              "text-neutral-400": pathname !== "/manage-account",
            })}
          >
            <BsFillPersonFill className="mr-3" /> Manage Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

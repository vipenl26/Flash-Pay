import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {AiFillThunderbolt} from 'react-icons/ai'
import { ProfileIcon } from "./NavbarStyle";
const Navbar = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);
  return (
    <nav className="bg-yellow-400">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {setMobileMenu(!mobileMenu)}}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <AiFillThunderbolt className="text-4xl text-white mr-3"/>
              <h2 className="text-white text-3xl font-sans font-semibold">Flash Pay</h2>
            </div>
            
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/dashboard"
                  exact
                  className={({isActive})=> isActive ? "text-white bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            :"text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                  aria-current="page"
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/payments"
                  exact
                  className={({isActive})=> isActive ? "text-white bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            :"text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                >
                  Payments
                </NavLink>
                <NavLink
                  to="/AddMoney"
                  exact
                  className={({isActive})=> isActive ? "text-white bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            :"text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                >
                  Add Money
                </NavLink>
              </div>
            </div>
            
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <button
              type="button"
              className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button> */}

            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick = {()=>{setProfileDropDown(!profileDropDown)}}
                >
                  <span className="sr-only">Open user menu</span>
                </button>
                <ProfileIcon onClick = {()=>{setProfileDropDown(!profileDropDown)}} >{JSON.parse(localStorage.getItem("data")).username[0].toUpperCase()}</ProfileIcon>

              </div>
              {profileDropDown && <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  href="/Profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>              
                <button
                  onClick={() => {props.setIsLogin(false);localStorage.clear();}}
                  style={{width:"100%", textAlign:"left"}}
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </button>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
      {mobileMenu &&
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/dashboard"
            className=" text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>

          <a
            href="/payments"
            className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Payments
          </a>

          <a
            href="/addMoney"
            className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Add Money
          </a>

          
        </div>
      </div>
      }
    </nav>
  );
};

export default Navbar;

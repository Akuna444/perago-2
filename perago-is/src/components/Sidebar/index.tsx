"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Toggle Button for Small Screens */}
      <button
        className="sm:hidden p-4 text-white bg-secondary focus:outline-none"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-secondary text-white w-64 md:w-52 lg:w-64 min-h-screen fixed sm:static top-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
      >
        <div className="py-4 px-6">
          <nav>
            <ul className="space-y-2 mt-16">
              <li>
                <Link
                  href="/new-role"
                  className="block py-2 px-4 hover:bg-primary transition duration-200"
                >
                  Add Role
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block py-2 px-4 hover:bg-primary transition duration-200"
                >
                  List of Roles
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block py-2 px-4 hover:bg-primary transition duration-200"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="block py-2 px-4 hover:bg-primary transition duration-200"
                >
                  LogOut
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{cursor:'default'}} className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-white font-bold text-5xl mb-6">Explore the RVCE</h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          <div className="flex flex-col space-y-2 border-r-2 border-gray-600 pr-4">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <a href="https://rvce.edu.in/placement-menu" className="hover:text-white">
              Placements
            </a>
          </div>
          <div className="flex flex-col space-y-2 border-r-2 border-gray-600 pr-4">
            <a href="https://rvce.edu.in/library" className="hover:text-white">
              Library
            </a>
            <a href="https://rvce.edu.in//Cultural-Activity-Teams" className="hover:text-white">
              Culture
            </a>
          </div>

          {/* Group 3 */}
          <div className="flex flex-col space-y-2 border-r-2 border-gray-600 pr-4">
            <a href="https://rvce.edu.in/sp-achievements" className="hover:text-white">
              Sport
            </a>
            <a href="https://rvce.edu.in/ug-pg-programs" className="hover:text-white">
              UG PG Programs
            </a>
          </div>

          {/* Group 4 */}
          <div className="flex flex-col space-y-2 border-r-2 border-gray-600 pr-4">
            <a href="https://rvce.edu.in/rvce-center-excellence" className="hover:text-white">
              Center of Excelence
            </a>
            <a href="https://rvce.edu.in/ncc-nss" className="hover:text-white">
              NCC / NSS
            </a>
          </div>

          {/* Group 5 */}
          <div className="flex flex-col space-y-2 border-r-2 border-gray-600 pr-4">
            <a href="https://rvce.edu.in/rvce-students-clubs-technical-innovative" className="hover:text-white">
              Innovative Clubs
            </a>
            <a href="https://rvce.edu.in/principal-rvce" className="hover:text-white">
              Principle
            </a>
          </div>

          {/* Group 6 */}
          <div className="flex flex-col space-y-2">
            <a href="https://rvce.edu.in/" className="hover:text-white">
              Real site
            </a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm">
          <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
            <li className="hover:text-white cursor-pointer">Terms of Use</li>
            <li className="hover:text-white cursor-pointer">About the Rvce</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Cookies</li>
            <li className="hover:text-white cursor-pointer">Accessibility Help</li>
            <li className="hover:text-white cursor-pointer">Parental Guidance</li>
            <li className="hover:text-white cursor-pointer">Contact the Rvce</li>
          </ul>
          <p className="mt-4 text-center md:text-left">
          Copyright © 2015 rvce.edu.in
            All Rights Reserved.<a href="https://rvce.edu.in/" className="text-blue-400 underline hover:text-blue-300">
              Click here
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

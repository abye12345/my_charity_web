import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex-1">
      <nav className="bg-white shadow-md  top-14 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                onClick={handleLinkClick}
              >
                {t("charity")}
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("home")}
              </Link>
              <Link
                to="/capacity"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("capacityBuilding")}
              </Link>
              <Link
                to="/daily"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("dailyFeeding")}
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("about")}
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("contact")}
              </Link>
              <Link
                to="/donate"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("donate")}
              </Link>
              <Link
                to="/membership"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("membership")}
              </Link>
              <Link
                to="/achievements"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("achievements")}
              </Link>
              <Link
                to="/news"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t("news")}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${
                    isMenuOpen ? "hidden" : "block"
                  } h-6 w-6 cursor-pointer`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${
                    isMenuOpen ? "block" : "hidden"
                  } h-6 w-6 cursor-pointer`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden w-full bg-white shadow-lg z-30 relative`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={handleLinkClick}
            >
              {t("home")}
            </Link>
            <Link
              to="/capacity"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={handleLinkClick}
            >
              {t("capacityBuilding")}
            </Link>
            <Link
              to="/daily"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={handleLinkClick}
            >
              {t("dailyFeeding")}
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={handleLinkClick}
            >
              {t("about")}
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={handleLinkClick}
            >
              {t("contact")}
            </Link>
            <Link
              to="/donate"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={handleLinkClick}
            >
              {t("donate")}
            </Link>
            <Link
              to="/membership"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={handleLinkClick}
            >
              {t("membership")}
            </Link>
            <Link
              to="/achievements"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={handleLinkClick}
            >
              {t("achievements")}
            </Link>
            <Link
              to="/news"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={handleLinkClick}
            >
              {t("news")}
            </Link>
          </div>
        </div>
      </nav>

      <main className="pb-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

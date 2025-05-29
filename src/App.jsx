import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About from "./About Us/About";
import Contact from "./Contact Us/Contact";
import News from "./News/News";
import Donate from "./Donate Here/Donate";
import Daily from "./Daily Feeding/Daily";
import Capacity from "./Capacity Building/Capacity";
import Achievements from "./Achievements/Achievements";
import Membership from "./Membership/Membership";
import SocialMedia from "./SocialMedia/SocialMedia";
import FoodAid from "./Home/FoodAid/FoodAid";
import EducationTraining from "./Home/EducationTraining/EducationTraining";
import Medication from "./Home/Medication/Medication";
import Form from "./Home/Register/Form";
import Footer from "./Footer/Footer";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const dropdownRef = useRef(null);
  const { i18n, t } = useTranslation();

  const languages = [
    {
      name: "Amharic",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Ethiopia_%281897%E2%80%931974%29.svg/1200px-Flag_of_Ethiopia_%281897%E2%80%931974%29.svg.png",
    },
    {
      name: "Arabic",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1200px-Flag_of_Saudi_Arabia.svg.png",
    },
    {
      name: "Chinese",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    },
    {
      name: "Dutch",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
    },
    {
      name: "English",
      flag: "https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg",
    },
    {
      name: "German",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update document title when language changes
  useEffect(() => {
    document.title = t("title");
  }, [t]);

  const handleLanguageChange = (langName) => {
    setSelectedLang(langName);
    i18n.changeLanguage(langName);
    setIsOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Language selector and social media bar */}
        <div className="bg-yellow-400 w-full h-14 flex justify-between items-center px-8  z-50 relative">
          <div className="relative" ref={dropdownRef}>
            <div
              className="bg-white w-48 h-8 cursor-pointer flex items-center px-2 rounded border border-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={languages.find((lang) => lang.name === selectedLang)?.flag}
                className="w-6 h-4 mr-2"
                alt={`${selectedLang} flag`}
              />
              <span className="flex-grow">{selectedLang}</span>
              <span className="ml-2">▼</span>
            </div>

            {isOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white w-48 rounded shadow-lg z-[60] border border-gray-200">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center px-2 py-1 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageChange(lang.name)}
                  >
                    <img
                      src={lang.flag}
                      className="w-6 h-4 mr-2"
                      alt={`${lang.name} flag`}
                    />
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://web.facebook.com/?_rdc=1&_rdr#"
              className="text-blue-600 hover:underline"
            >
              facebook
            </a>
            <img
              className="w-20 h-20 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3b/GoFundMe_Logo.svg"
              alt="GoFundMe Logo"
            />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/capacity" element={<Capacity />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/food-aid" element={<FoodAid />} />
            <Route path="/education-training" element={<EducationTraining />} />
            <Route path="/medication" element={<Medication />} />
            <Route path="/form" element={<Form />} />
          </Route>
        </Routes>
        <div className=" bottom-12 right-12 z-10 fixed">
          <SocialMedia />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

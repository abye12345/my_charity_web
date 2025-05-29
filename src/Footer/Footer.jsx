import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-amber-400 flex flex-wrap justify-around p-8">
        <div className="flex-1 min-w-[300px] p-4">
          <h1 className="text-xl font-semibold mb-4">{t("about")}</h1>
          <p className="border-1 p-2 border-white w-[200px] text-white mb-6">
            {t("aboutUs.intro")}
            <br /> {t("contributions.beneficiaries")}
            <Link
              to="/about"
              className="ml-2 text-blue-200 hover:text-blue-100"
            >
              {t("contributions.viewMore")}
            </Link>
          </p>
          <h1 className="text-xl font-semibold mb-4">
            {t("contactUs.reachUs")}
          </h1>
          <p className="text-white mb-2">{t("contactUs.phone")}</p>
          <p className="text-white mb-2">
            {t("phone")}:
            <br />
            0993598089 <br />
            0911556343
          </p>
          <p className="mb-2">{t("email")}: abyeyensae@gmail.com</p>
          <p className="text-white">
            {t("address")}: {t("contactUs.address")}
          </p>
        </div>
        <div className="flex-1 min-w-[200px] p-4">
          <h1 className="text-xl font-semibold mb-4">{t("browse")}</h1>
          <div className="text-white flex flex-col gap-2">
            <Link to="/about" className="hover:text-gray-200">
              {t("about")}
            </Link>
            <Link to="/contact" className="hover:text-gray-200">
              {t("contact")}
            </Link>
            <Link to="/donate" className="hover:text-gray-200">
              {t("donate")}
            </Link>
            <Link to="/event" className="hover:text-gray-200">
              {t("events")}
            </Link>
            <Link to="/news" className="hover:text-gray-200">
              {t("news")}
            </Link>
            <Link to="/" className="hover:text-gray-200">
              {t("achievements")}
            </Link>
            <Link to="/capacity" className="hover:text-gray-200">
              {t("capacityBuilding")}
            </Link>
            <Link to="/" className="hover:text-gray-200">
              {t("ourTeam")}
            </Link>
            <Link to="/membership" className="hover:text-gray-200">
              {t("membership")}
            </Link>
            <Link to="/" className="hover:text-gray-200">
              {t("privacyPolicy")}
            </Link>
          </div>
        </div>
        <div className="flex-1 min-w-[200px] p-4">
          <h1 className="text-xl font-semibold mb-4">{t("articles")}</h1>
          <div className="text-white flex flex-col gap-2">
            <Link to="/" className="hover:text-gray-200">
              {t("article1")}
            </Link>
            <Link to="/" className="hover:text-gray-200">
              {t("article2")}
            </Link>
            <Link to="/" className="hover:text-gray-200">
              {t("readMoreNews")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

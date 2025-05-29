import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="relative min-h-screen">
      {/* Fixed background image */}
      <img
        className="fixed top-0 left-0 w-full h-full object-cover opacity-50 z-0"
        src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/8e7936f0-da4a-46b3-84e2-4bfd7af2ad61/e7cef90c-c6f9-4446-ac5a-16f93b7012db.png"
        alt="Contact background"
        style={{ pointerEvents: "none" }}
      />
      {/* Scrollable content over image */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12 px-4 md:px-12 lg:px-32">
        <div className="bg-white bg-opacity-80 rounded-xl shadow-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
          {/* Contact Info */}
          <div className="flex-1 p-8 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2 text-center md:text-left">
              {t("contactUs.loveToHear")}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-4 text-center md:text-left">
              {t("contact")}
            </h2>
            <p className="mb-4 text-gray-700 text-center md:text-left">
              {t("contactUs.response")}
            </p>
            <h3 className="text-lg font-semibold text-indigo-700 mb-2 text-center md:text-left">
              {t("contactUs.reachUs")}
            </h3>
            <p className="mb-2 text-gray-700 text-center md:text-left">
              {t("contactUs.address")}
            </p>
            <p className="mb-2 text-gray-700 text-center md:text-left">
              {t("contactUs.phone")}
            </p>
            <p className="mb-2 text-gray-700 text-center md:text-left">
              {t("contactUs.email")}
            </p>
          </div>
          {/* Contact Form */}
          <div className="flex-1 p-8 bg-indigo-50 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-indigo-700 mb-4 text-center md:text-left">
              {t("contactUs.sendMessage")}
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder={t("contactUs.fullName") + "*"}
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder={t("contactUs.emailPlaceholder") + "*"}
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="text"
                placeholder={t("contactUs.subject") + "*"}
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                placeholder={t("contactUs.message") + "*"}
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none min-h-[100px]"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                {t("contactUs.send")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

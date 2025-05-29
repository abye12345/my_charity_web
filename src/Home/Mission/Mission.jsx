import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Mission = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-yellow-700 text-xl font-semibold mb-2">
              {t(
                "mission.organization",
                "Babul Keyer NON-GOVERNMENTAL organization"
              )}
            </h3>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t("mission.statements", "Our Statements")}
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t(
                "mission.developmentGoal",
                "Our overall Development Goal is Improved food security and living conditions of economically poor and socially disadvantaged women, men, boys and girls in Addis Ababa, Ethiopia"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <img
                  src="https://babulkeyer.org/wp-content/uploads/elementor/thumbs/1-2-pvpljfejn2cnob2vx9x2fxkv8bru2ltkwz29yitqjk.png"
                  alt={t("mission.vision", "Vision")}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {t("mission.vision", "Our Vision")}
              </h2>
              <p className="text-gray-600 text-center">
                {t(
                  "mission.visionText",
                  "Babul Keyer envisions Ethiopia, in which all men, women, girls and boys determine the course of their lives in dignity and security."
                )}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <img
                  src="https://babulkeyer.org/wp-content/uploads/elementor/thumbs/2-1-pvpljosxjepiwep8edzc4v7h66hi7kuwa9l4rafstc.png"
                  alt={t("mission.mission", "Mission")}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {t("mission.mission", "Our Mission")}
              </h2>
              <p className="text-gray-600 text-center">
                {t(
                  "mission.missionText",
                  "Our mission is to improve the living conditions of socially and economically disadvantaged women, men, boys and girls through promoting and supporting innovative, inclusive and sustainable food/nutrition security and livelihood development interventions predominantly in urban of Ethiopia"
                )}
              </p>
            </div>

            {/* Values Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <img
                  src="https://babulkeyer.org/wp-content/uploads/elementor/thumbs/3-2-pvpljy7bfr2e4ibkvi1ltsu34176cjw7nk3zk21v34.png"
                  alt={t("mission.values", "Values")}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {t("mission.values", "Our Values")}
              </h2>
              <p className="text-gray-600 text-center">
                {t(
                  "mission.valuesText",
                  "We place communities at the centre of our development activities as we believe that only through strong communities can the urban settings feed itself, appropriately exploit its natural resources, educate, promote the economic wellbeing of Addis Ababa people and live in peace."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Donation Section */}
      <div className="relative mt-20">
        <div className="relative h-[500px] w-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://africanrelief.org/wp-content/uploads/2024/02/BWA-BREAD-AND-WATER-FOR-AFRICA-Basic-Relief-Support-.webp"
            alt="Donation Background"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl text-white">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {t(
                    "mission.donationTitle",
                    "For Online donations from anywhere in the world!"
                  )}
                </h3>
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {t("mission.secureDonation", "Secure donation.")}
                  </h1>
                  <Link
                    to="/donate"
                    className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                  >
                    {t("donate_here", "Donate Here")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;

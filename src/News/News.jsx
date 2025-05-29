import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-5xl text-center mb-8">{t("news")}</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
        <div className="flex-1 bg-white rounded-lg shadow-lg p-4 mb-6 md:mb-0">
          <Link className="underline text-blue-600" to="/daily">
            {t("dailyFeeding")}
          </Link>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            className="w-full max-w-xs rounded mb-4"
            src="https://babulkeyer.org/wp-content/uploads/2023/10/Modern-App-Download-Promotion-Facebook-Post.png"
            alt={t("newsAppTitle", "Mobile App Launch")}
          />
          <h2 className="text-xl font-semibold mb-2 text-center">
            {t(
              "newsAppTitle",
              "Babul Keyer NGO Launches Mobile App for a Hunger-Free Addis Ababa"
            )}
          </h2>
          <p className="text-gray-700 text-center">
            {t(
              "newsAppDesc",
              "In the heart of Addis Ababa, where the struggle for daily sustenance is a daunting reality for countless communities, there shines a …"
            )}
          </p>
          <span className="mt-2 text-sm text-gray-500 text-center">
            {t(
              "newsAppImageText",
              "Download our new app to support a hunger-free Addis Ababa!"
            )}
          </span>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img
            className="w-full max-w-xs rounded mb-4"
            src="https://babulkeyer.org/wp-content/uploads/2022/10/1-1.png"
            alt={t("mission.vision", "Our Vision")}
          />
          <h2 className="text-xl font-semibold mb-2 text-center">
            {t("mission.vision", "Our Vision")}
          </h2>
          <p className="text-gray-700 text-center">
            {t(
              "mission.visionText",
              "Babul Keyer envisions Ethiopia, in which all men, women, girls, and boys determine the course of their lives in dignity …"
            )}
          </p>
          <span className="mt-2 text-sm text-gray-500 text-center">
            {t(
              "visionImageText",
              "Empowering communities for a brighter future."
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default News;

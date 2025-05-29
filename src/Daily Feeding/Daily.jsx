import React from "react";
import { useTranslation } from "react-i18next";

const Daily = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-gray-400">
        <div className="relative">
          <img
            className="w-full h-auto object-cover"
            src="https://needcharity.org/en/wp-content/uploads/2024/08/gaza_food-864x486.webp"
            alt={t("foodAid.programImage")}
          />
          <div className="absolute bg-black text-white p-4 md:p-6 lg:p-8 bottom-0 md:bottom-10 right-0 md:right-10 w-[90%] md:w-[350px]">
            <p className="text-sm md:text-base">{t("foodAid.beneficiaries")}</p>
            <h1 className="text-xl md:text-2xl mt-4 md:mt-6">
              {t("foodAid.dailyFeedingProgram")}
            </h1>
          </div>
        </div>

        <div className="mt-10 md:mt-20 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs="
              alt="Food bank distribution"
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://static.srpcdigital.com/styles/1037xauto/public/2024-03/580711_0.jpeg.webp"
              alt="Food aid program"
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://media.gettyimages.com/id/554372351/photo/volunteer-serving-food-at-community-kitchen.jpg?s=612x612&w=gi&k=20&c=tPM6fMJ-TKsvb_NyAKVsKWn7xt7VB4fr-grSi8090qE="
              alt="Community kitchen"
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://thecooperator.news/wp-content/uploads/2022/08/Joseph-Ojatum-founder-EBUF-in-the-middle-Right-is-Alfred-Oteger-NEC-TESDA-and-Moses-Otekat-on-the-left-photo-by-Alexander-Okori-scaled.jpg"
              alt="Charity event"
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://www.shutterstock.com/image-photo/charity-donation-volunteering-concept-close-260nw-2143458979.jpg"
              alt="Charity donation"
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://res.cloudinary.com/devex/image/fetch/https://neo-assets.s3.amazonaws.com/news/images/108473.png"
              alt="Charity program"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Daily;

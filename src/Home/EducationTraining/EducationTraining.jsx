import React from "react";
import { useTranslation } from "react-i18next";
const EducationTraining = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-gray-400">
        <div className="relative">
          <img
            className="w-full h-auto object-cover"
            src="https://ccp.jhu.edu/wp-content/uploads/ethiopia-images-of-empowerment.jpg"
            alt="Food aid program"
          />
          <div className="absolute bg-black text-white p-4 md:p-4 lg:p-4 bottom-0 md:bottom-10 right-0 md:right-10 w-[70%] md:w-[350px]">
            <h1 className="text-xl md:text-2xl mt-4 md:mt-6">
              {t("educationTraining.title")}
            </h1>
          </div>
        </div>

        <div className="mt-10 md:mt-20 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://hiwotet.org/wp-content/uploads/2021/01/sliderupdated.gif"
              alt={t("educationTraining.image1")}
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://hiwotet.org/wp-content/uploads/2019/12/slider7.gif"
              alt={t("educationTraining.image2")}
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://twlethiopia.org/wp-content/uploads/2020/08/2018-LE-teacher-blackboard-material-poster-chicken-TT-LIT-1400x933.jpg"
              alt={t("educationTraining.image3")}
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://wvusstatic.com/www/uploads/2017/09/sewing-machine2x1500.jpg"
              alt={t("educationTraining.image4")}
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCIe5-MXfh7PQcfg8LqwteHZmTIjxD4iWPg&s"
              alt={t("educationTraining.image5")}
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://img1.wsimg.com/isteam/ip/d99a4dd1-438d-4cb6-bd88-6dd13606191e/IMG_5100%20copy.jpg/:/cr=t:12.41%25,l:0%25,w:100%25,h:75.19%25/rs=w:400,h:300.7518796992481,cg:true"
              alt={t("educationTraining.image6")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationTraining;

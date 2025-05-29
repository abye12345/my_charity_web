import React from "react";
import { useTranslation } from "react-i18next";
const Medication = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-gray-400">
        <div className="relative">
          <img
            className="w-full h-auto object-cover"
            src="https://media.istockphoto.com/id/1149898848/photo/pharmacist-discusses-a-medications-side-effects-with-patient.jpg?s=612x612&w=0&k=20&c=wY7xMYva2cWA8CMYOoZmcoTkN3Pk3o3H8YuSzAzXYtg="
            alt={t("med_kit")}
          />
          <div className="absolute bg-black text-white p-4 md:p-4 lg:p-4 bottom-0 md:bottom-10 right-0 md:right-10 w-[70%] md:w-[350px]">
            <h1 className="text-xl md:text-2xl mt-4 md:mt-6">{t("med_kit")}</h1>
          </div>
        </div>

        <div className="mt-10 md:mt-20 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://adragos-pharma.com/wp-content/uploads/2024/08/Captura-de-pantalla-2024-08-12-171824-1024x480.png"
              alt={t("educationTraining.image1")}
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl2KIFCsekGVXDMRxrjXvWWu2TnreFXQopdw&s"
              alt={t("educationTraining.image2")}
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://www.checkatrade.com/blog/wp-content/uploads/2021/08/end-of-tenancy-cleaning-prices.jpeg"
              alt={t("educationTraining.image3")}
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://www.health.com/thmb/laLpyWJ_PON1d1-vYHjJL9LJG-w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1286538483-316b3ab1d9d846df915093bc2f3925ce.jpg"
              alt={t("educationTraining.image4")}
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://thumbs.dreamstime.com/b/sick-african-man-taking-pills-drinking-water-lying-bedroom-medicine-treatment-american-bed-home-many-medication-tablets-205523108.jpg"
              alt={t("educationTraining.image5")}
            />
            <img
              className="w-full h-[250px] md:h-[300px] object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlrkt4NavXty1KEeSfmCWx3XzM68kwgXJ1w&s"
              alt={t("educationTraining.image6")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Medication;

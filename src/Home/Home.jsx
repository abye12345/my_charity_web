import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Images from "./Imagecomponet/Images";
import Mission from "./Mission/Mission";
import Register from "./Register/Register";
const Home = () => {
  const { t } = useTranslation();
  const images = [
    "https://thumbs.dreamstime.com/b/diplomatic-charity-bazaar-addis-ababa-ethiopia-africa-november-people-can-see-exploring-buying-foods-around-346515856.jpg",
    "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/04/17/108734.jpg",
    "https://kindutrust.org/wp-content/uploads/2018/07/zsdfg.jpg",
    "https://www.wateraid.org/et/sites/g/files/jkxoof401/files/zahara-hassen-45-washing-her-grandchilds-face-with-the-tap-water-she-collected-near-her-house-buriya-kebele-gololcha-district-bale-zone-oromia-region-ethiopia-august-2021_0.jpg",
    "https://goodsamaritaneth.org/img/hero_1.jpg",
    "https://goodsamaritaneth.org/img/hero_4.jpg",
    "https://www.aciafrica.org/images/rs20215-school-feeding-1-1_1693776826.webp",
    "https://tzuchi-en-backend.storage.googleapis.com/content/images/2024/08/1-37.jpg",
    "https://images.squarespace-cdn.com/content/v1/564dcd00e4b0ea20b1f82cad/1595428810956-TL1Q7QH0IDCWK6C295TH/Screen+Shot+2020-05-18+at+15.19.40.png?format=1500w",
    "https://psi.org.et/images/New%20folder/Gedie.jpg",
    "https://cdnuploads.aa.com.tr/uploads/Contents/2021/05/07/thumbs_b_c_5c600703e26b18755e2471dd37234820.jpg?v=194231",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full mt-0 relative h-[500px] overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-[500px] object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute bottom-16 left-12 z-10">
          <Link
            to="/donate"
            className="bg-yellow-400 hover:bg-white border-2 border-yellow-400 hover:border-yellow-400 hover:text-gray-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-400"
          >
            {t("donate_here")}
          </Link>
        </div>
      </div>
      <div className=" mx-auto mt-30">
        <h1 className=" text-2xl text-center">{t("home_quote")}</h1>
        <div className="flex flex-wrap justify-center gap-4 p-4 mt-5">
          <Link
            to="/food-aid"
            className="flex-1 min-w-[300px] max-w-[400px] relative"
          >
            <img
              src="https://dims.apnews.com/dims4/default/3e40fb5/2147483647/strip/true/crop/4996x3331+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F78%2F65%2F6f0f19f621b9be238455434418ab%2F4575b2ff81134528a50e9d30f5eba758"
              className="relative w-full h-[300px] object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
              alt="Food Aid"
            />
            <span className="absolute bottom-8 left-10 text-white font-bold text-2xl underline">
              {t("food_aid")}
            </span>
          </Link>
          <Link
            to="/education-training"
            className="flex-1 min-w-[300px] max-w-[400px] relative"
          >
            <img
              src="https://borgenproject.org/wp-content/uploads/Education-in-Ethiopia.jpg"
              className="w-full h-[300px] object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
              alt="Education Training"
            />
            <span className="absolute bottom-8 left-10 text-white font-bold text-2xl underline">
              {t("educational_training")}
            </span>
          </Link>
          <Link
            to="/medication"
            className="flex-1 min-w-[300px] max-w-[400px] relative"
          >
            <img
              src="https://operationethiopia.com/wp-content/uploads/2024/10/gallery-7-min.jpg"
              className="w-full h-[300px] object-cover rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300"
              alt="Medication"
            />
            <span className="absolute bottom-8 left-10 text-white font-bold text-2xl underline">
              {t("med_kit")}
            </span>
          </Link>
        </div>
      </div>
      <div className=" mt-20">
        <Images />
      </div>
      <div>
        <Mission />
      </div>
      <div className=" mt-10">
        <Register />
      </div>
    </>
  );
};

export default Home;

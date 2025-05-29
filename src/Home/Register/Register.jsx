import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Force a re-render when language changes
    console.log("Current language:", i18n.language);
  }, [i18n.language]);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left bg-yellow-100 p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">
              {t("contributions.title")}
            </h1>
            <p className="text-lg mb-6">{t("contributions.description")}</p>
            <Link
              to="/donate"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t("contributions.donateButton")}
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=Boc6oDYbmuQ"
                width="100%"
                height="250px"
                controls={true}
                playing={false}
                light={false}
                className="rounded-lg shadow-lg"
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              />
            </div>
          </div>

          <div className="text-center md:text-left bg-yellow-100 p-6 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">
              {t("contributions.achievements")}
            </h1>
            <p className="text-lg mb-6">{t("contributions.beneficiaries")}</p>
            <Link
              to="/achievements"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t("contributions.viewMore")}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
            alt="Charity helping people"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 flex flex-col items-center justify-center text-center p-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                {t("contributions.membershipTitle")}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-white">
                {t("contributions.membershipSubtitle")}
              </p>
              <Link
                to="/form"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t("contributions.registerButton")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

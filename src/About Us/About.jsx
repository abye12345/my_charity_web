import { FaFacebook, FaPhone, FaVoicemail } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative">
        <img
          src="https://c8.alamy.com/comp/FJ1MH2/food-distribution-in-a-street-of-delhi-india-FJ1MH2.jpg"
          className="max-h-128 w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-opacity-50">
          <h1 className="text-6xl font-bold mb-8 text-indigo-600">
            {t("about")}
          </h1>
          <p className="mb-8 text-xl text-indigo-600 text-center max-w-2xl">
            {t("aboutUs.intro")}
          </p>
          <p className="text-indigo-600 text-center max-w-2xl">
            {t("aboutUs.womenStaff")}
          </p>
          <div className="flex gap-6 mt-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-blue-700 transition-colors duration-200 hover:text-blue-900 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="tel:+251912345678"
              aria-label="Phone"
              className="text-blue-700 transition-colors duration-200 hover:text-green-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <FaPhone size={32} />
            </a>
            <a
              href="mailto:info@babulkeyer.org"
              aria-label="Email"
              className="text-blue-700 transition-colors duration-200 hover:text-red-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <FaVoicemail size={32} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-12 px-4">
        <div className="flex-1 flex flex-col items-center text-center md:text-left">
          <img
            src="https://babulkeyer.org/wp-content/uploads/2022/10/home-1-icon.png"
            className="w-24 h-24 mb-4"
            alt="3 Years in Action Icon"
          />
          <h2 className="text-2xl font-bold mb-2 text-indigo-700">
            {t("aboutUs.yearsInAction")}
          </h2>
          <p className="text-lg text-gray-700 max-w-md">
            {t("aboutUs.beneficiaries")}
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl aspect-video">
            <ReactPlayer
              url="https://youtu.be/MtXxS8DvSLs"
              width={"100%"}
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
      </div>
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
    </>
  );
};

export default About;

import React from "react";
import { useTranslation } from "react-i18next";
const imageGroups = [
  [
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664612001.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664612001-1.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664612001-2.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664612001-3.jpeg",
  ],
  [
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664612001-4.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664612001-5.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664612001-6.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664612001-7.jpeg",
  ],
  [
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664612001-6.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611999.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611999-1.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611999-2.jpeg",
  ],
  [
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611999-3.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611999-4.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611999-9.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611999-6.jpeg",
  ],
  [
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611999-7.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611999-8.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611999-9.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611997-1.jpeg",
  ],
  [
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611997-2.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611997-3.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611997-4.jpeg",
    "https://babulkeyer.org/wp-content/uploads/2022/10/photo1664611997-6.jpeg",
  ],
];

const Achievements = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-8">
      <h1 className="text-center mt-5 text-4xl md:text-6xl font-bold mb-8">
        {t("achievementsTitle")}
      </h1>
      <div className="flex flex-col gap-8 items-center">
        {imageGroups.map((group, idx) => (
          <div key={idx} className="flex flex-wrap justify-center gap-6 w-full">
            {group.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Award ${idx * 4 + i + 1}`}
                className="w-40 h-28 md:w-64 md:h-44 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

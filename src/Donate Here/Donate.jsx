import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Donate = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Donation Section */}
      <div className="relative">
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
      {/*offline donation section*/}
      <div className="py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-indigo-800">
          For Offline Donation - Bank
        </h2>
        <p className="text-center text-lg mb-8 text-gray-700">
          Here are our bank details. You can support us by making a direct bank
          transfer to any of the following accounts:
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-6">
          <div className="flex-1 bg-indigo-700 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">Bank Name: CBE</h3>
            <p className="mb-1">Account Name: abye tensae getahun</p>
            <p>Account Number: 10001914*****</p>
          </div>
          <div className="flex-1 bg-red-400 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">
              Bank Name: Awash Bank
            </h3>
            <p className="mb-1">
              Account Name: Babul Keyer Yebego Adragot Derejet
            </p>
            <p>Account Number: 10001914*****</p>
          </div>
          <div className="flex-1 bg-yellow-500 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">
              Bank Name: Abyssinia Bank
            </h3>
            <p className="mb-1">
              Account Name: Babul Keyer Yebego Adragot Derejet
            </p>
            <p>Account Number: 10001914*****</p>
          </div>
          <div className="flex-1 bg-blue-500 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">
              Bank Name: Bank of Oromia
            </h3>
            <p className="mb-1">
              Account Name: Babul Keyer Yebego Adragot Derejet
            </p>
            <p>Account Number: 10001914*****</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-6">
          <div className="flex-1 bg-amber-950 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">Bank Name: Buna Bank</h3>
            <p className="mb-1">
              Account Name: Babul Keyer Yebego Adragot Derejet
            </p>
            <p>Account Number: 10001914*****</p>
          </div>
          <div className="flex-1 bg-cyan-900 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">
              Bank Name: ZamZam Bank
            </h3>
            <p className="mb-1">
              Account Name: Babul Keyer Yebego Adragot Derejet
            </p>
            <p>Account Number: 10001914*****</p>
          </div>
          <div className="flex-1 bg-green-500 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">Bank Name: Nib Bank</h3>
            <p className="mb-1">
              Account Name: Babul Keyer Yebego Adragot Derejet
            </p>
            <p>Account Number: 10001914*****</p>
          </div>
          <div className="flex-1 bg-pink-500 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">
              Bank Name: Hijra Bank
            </h3>
            <p className="mb-1">
              Account Name: Babul Keyer Yebego Adragot Derejet
            </p>
            <p>Account Number: 10001914*****</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          <div className="flex-1 bg-emerald-800 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">
              Bank Name: Hibret Bank
            </h3>
            <p className="mb-1">
              Account Name: Babul Keyer Yebego Adragot Derejet
            </p>
            <p>Account Number: 10001914*****</p>
          </div>
          <div className="flex-1 bg-purple-500 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">
              Bank Name: Dashen Bank
            </h3>
            <p className="mb-1">
              Account Name: Babul Keyer Yebego Adragot Derejet
            </p>
            <p>Account Number: 10001914*****</p>
          </div>
          <div className="flex-1 bg-rose-600 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">Bank Name: Abay Bank</h3>
            <p className="mb-1">
              Account Name: Babul Keyer Yebego Adragot Derejet
            </p>
            <p>Account Number: 10001914*****</p>
          </div>
          <div className="flex-1 bg-sky-700 text-white rounded-lg shadow-md p-6 min-w-[220px]">
            <h3 className="text-xl font-semibold mb-2">
              Bank Name: Oromia International Bank
            </h3>
            <p className="mb-1">
              Account Name: Babul Keyer Yebego Adragot Derejet
            </p>
            <p>Account Number: 10001914*****</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;

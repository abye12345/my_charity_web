import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Form = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const { t } = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {t("contributions.membershipTitle")}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              {t("firstName")}
            </label>
            <input
              type="text"
              id="fullName"
              placeholder={t("firstName")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              placeholder={t("email")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              {t("phone")}
            </label>
            <input
              type="tel"
              id="phone"
              placeholder={t("phone")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              {t("country")}
            </label>
            <input
              type="text"
              id="country"
              placeholder={t("country")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-600 mb-4">
              {t("contributions.membershipSubtitle")}
            </p>

            <div className="space-y-3">
              {["10", "50", "100", "1000", "10000"].map((amount) => (
                <div key={amount} className="flex items-center">
                  <input
                    type="radio"
                    id={`amount-${amount}`}
                    name="membershipAmount"
                    value={amount}
                    checked={selectedAmount === amount}
                    onChange={(e) => setSelectedAmount(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor={`amount-${amount}`}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {amount} ETB
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t("contributions.registerButton")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

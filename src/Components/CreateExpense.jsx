import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const CreateExpense = () => {
  return (
    <>
      <form>
        <div className="space-y-12 sm:space-y-16">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Expense Information
            </h2>
            

            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Amount
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Category
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <select
                    id="country"
                    name="category"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="Description"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Description
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    id="Description"
                    name="Description"
                    type="text"
                    autoComplete="Description"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Date
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Payment Method
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="payment"
                    id="payment"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Location
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateExpense;

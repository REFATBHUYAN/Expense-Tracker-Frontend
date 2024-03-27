import React from "react";

const ExpenseCategories = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 my-5">
        Add your monthly Budget
      </h1>
      <form>
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
          >
            Enter Your this month budget
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <input
              type="number"
              name="amount"
              id="amount"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Save
          </button>
        </div>
      </form>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 my-5">
          Add new Expense Categories
        </h1>
        <form>
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Category Name
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Category Budget
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="number"
                name="budget"
                id="budget"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseCategories;

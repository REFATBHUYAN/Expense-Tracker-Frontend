import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "../Redux/categorySlice";
import { Menu, Transition } from "@headlessui/react";
import { selectExpense } from "../Redux/expenseSlice";
import AllExpense from "../Components/AllExpense";
import ExportDataAsCsv from "../Components/ExportDataAsCsv";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Reports = () => {
  const category = useSelector(selectCategory);
  const expense = useSelector(selectExpense);
  const [filterExpense, setFilterExpense] = useState(expense);
  const [filterCategory, setFilterCategory] = useState(0);
  const handleFilter = (id) =>{
    setFilterCategory(id)
    setFilterExpense(expense.filter((e) => e.cateId === id))
    console.log(id)
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 my-5">Report Page</h1>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="group inline-flex justify-center w-full rounded-lg py-2 px-3 border-0 border-slate-300 text-left text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 gap-2">
              {filterCategory === 0 ? "Filter" : category?.find(c => c.id === filterCategory)?.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-filter-cog text-slate-400"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5" />
                <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M19.001 15.5v1.5" />
                <path d="M19.001 21v1.5" />
                <path d="M22.032 17.25l-1.299 .75" />
                <path d="M17.27 20l-1.3 .75" />
                <path d="M15.97 17.25l1.3 .75" />
                <path d="M20.733 20l1.3 .75" />
              </svg>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-left rounded-md text bg-white shadow-2xl ring-1 ring-slate-200 focus:outline-none">
              <div className="py-1">
                {category?.map((option) => (
                  <Menu.Item key={option.id}>
                    {({ active }) => (
                      <button
                        //   onClick={() => handleFilter(option.name)}
                        onClick={()=> handleFilter(option.id)}
                        className={classNames(
                          active
                            ? "bg-slate-100 w-full text-start  text-slate-600"
                            : "font-medium",
                          "block px-4 py-2 text-sm text-slate-400 font-normal"
                        )}
                      >
                        {option.name}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <AllExpense expense={filterExpense} category={category}></AllExpense>
      <ExportDataAsCsv data={filterExpense}></ExportDataAsCsv>
    </div>
  );
};

export default Reports;

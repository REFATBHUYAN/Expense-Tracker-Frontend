import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, setCategories } from "../Redux/categorySlice";
import { Menu, Transition } from "@headlessui/react";
import { selectExpense, setExpense } from "../Redux/expenseSlice";
import AllExpense from "../Components/AllExpense";
import ExportDataAsCsv from "../Components/ExportDataAsCsv";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Reports = () => {
  const category = useSelector(selectCategory);
  const expense = useSelector(selectExpense);
  const dispatch = useDispatch();
  const [filterExpense, setFilterExpense] = useState(expense);
  const [filterCategory, setFilterCategory] = useState(0);
  const [clickedDate, setClickedDate] = useState(false);
  const handleFilter = (id) => {
    setFilterCategory(id);
    setFilterExpense(expense.filter((e) => e.cateId === id));
    // console.log(id);
  };


  useEffect(() => {
    const fetch2 = () =>
      fetch(`https://expense-treaker-server.vercel.app/expense`)
        .then((res) => res.json())
        .then((data) => {
          setFilterExpense(data);
          dispatch(setExpense(data));
          // console.log(data);
        });
    const fetch3 = () =>
      fetch(`https://expense-treaker-server.vercel.app/category`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setCategories(data));
          // console.log(data);
        });
   
    fetch2();
    fetch3();
  }, []);

  //   date picker
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    console.log(ranges.selection.endDate);
    const startDate = new Date(ranges.selection.startDate);
    const endDate = new Date(ranges.selection.endDate);
    const items = expense.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
      });
      setFilterExpense(items);
      setClickedDate(false);
  };
  return (
    <div>
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl font-semibold text-gray-900 my-5">
          Report Page
        </h1>
        <div className={`relative mb-4 -mt-4`}>
            {
                clickedDate ? <div className="absolute top-0 -left-24"><DateRangePicker
                // className={`hidden`}
                ranges={[selectionRange]}
                onChange={handleSelect}
              /></div> : <button onClick={() => setClickedDate(true)} 
              // className="inline-flex justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 mt-10"
              className="group inline-flex justify-center w-full rounded-lg py-2 px-3 border-0 border-slate-300 text-left text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 gap-2 mt-10"
              >Filter by Date</button>
            }
        </div>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="group inline-flex justify-center w-full rounded-lg py-2 px-3 border-0 border-slate-300 text-left text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 gap-2">
              {filterCategory === 0
                ? "Filter By Category"
                : category?.find((c) => c.id === filterCategory)?.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-filter-cog text-slate-400"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                        onClick={() => handleFilter(option.id)}
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

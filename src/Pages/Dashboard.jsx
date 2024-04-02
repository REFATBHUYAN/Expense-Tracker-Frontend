import React, { useEffect, useState } from "react";
import AllExpense from "../Components/AllExpense";
import { useDispatch, useSelector } from "react-redux";
import { selectBudget, setBudget } from "../Redux/budgetSlice";
import moment from "moment";
import { selectExpense, setExpense } from "../Redux/expenseSlice";
import { selectCategory, setCategories } from "../Redux/categorySlice";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const year = parseInt(moment(Date.now()).format("YYYY"));
const month = parseInt(moment(Date.now()).format("MM"));

const Dashboard = () => {
  const dispatch = useDispatch();
  const budget = useSelector(selectBudget);
  const expense = useSelector(selectExpense);
  const category = useSelector(selectCategory);
  const [filterExpense, setFilterExpense] = useState([]);
  const [clickedDate, setClickedDate] = useState(false);


  useEffect(() => {
    const fetch1 = () =>
      fetch(`https://expense-treaker-server.vercel.app/budget`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setBudget(data));
        });
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
    fetch1();
    fetch2();
    fetch3();
  }, []);

  // const totalBudget = budget?.find(
  //   (b) => b?.month === month && b?.year === year
  // )?.totalBudget;
  const monthlyExpense = expense?.filter((ex) => {
    const date = new Date(ex.date);

    const yearEx = date.getFullYear();
    const monthEx = date.getMonth() + 1;
    return yearEx == year && monthEx == month;
  });
  // setCurrentMonthExpense(monthlyExpense);
  // console.log("expense monthly list", monthlyExpense);
  // const totalExpense = expense?.reduce((sum, item) => sum + item.amount, 0);
  // const remainingBudget = totalBudget - parseInt(monthlyExpense);

  // date range
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    // console.log(ranges.selection.endDate);
    const startDate = new Date(ranges.selection.startDate);
    const endDate = new Date(ranges.selection.endDate);
    const items = expense.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
    setFilterExpense(items);
    setClickedDate(false);
  };

  return (
    <div>
      <div className="pt-8">
        <h3 className="text-xl font-bold text-slate-600">
          Total Expense Dashboard
        </h3>
        <dl className="my-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
          <div className="overflow-hidden p-3 rounded-lg ring-inset ring-green-200 ring-1 bg-green-50/50">
            <div className="absolute rounded-md bg-green-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-currency-dollar stroke-green-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                <path d="M12 3v3m0 12v3" />
              </svg>
            </div>
            <dt className="ml-14 truncate text-sm font-medium text-slate-400">
              Total Budget of this month
            </dt>
            <dd className="ml-14 flex items-baseline -mt-1">
              <p className="text-2xl truncate font-semibold text-slate-600">
                {
                  budget?.find((b) => b?.month === month && b?.year === year)
                    ?.totalBudget
                }
              </p>
            </dd>
          </div>
          <div className="overflow-hidden p-3 rounded-lg ring-inset ring-red-200 ring-1 bg-red-50/50">
            <div className="absolute rounded-md bg-red-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-currency-dollar stroke-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                <path d="M12 3v3m0 12v3" />
              </svg>
            </div>
            <dt className="ml-14 truncate text-sm font-medium text-slate-400">
              Total Expense of this month
            </dt>
            <dd className="ml-14 flex items-baseline -mt-1">
              <p className="text-2xl truncate font-semibold text-slate-600">
                {monthlyExpense?.reduce((sum, item) => sum + item.amount, 0)}
              </p>
            </dd>
          </div>
          <div className="overflow-hidden p-3 rounded-lg ring-inset ring-indigo-200 ring-1 bg-indigo-50/50">
            <div className="absolute rounded-md bg-indigo-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-currency-dollar stroke-indigo-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                <path d="M12 3v3m0 12v3" />
              </svg>
            </div>
            <dt className="ml-14 truncate text-sm font-medium text-slate-400">
              Remaining Budget of this month
            </dt>
            <dd className="ml-14 flex items-baseline -mt-1">
              <p className="text-2xl truncate font-semibold text-slate-600">
                {budget?.find((b) => b?.month === month && b?.year === year)
                  ?.totalBudget -
                  monthlyExpense?.reduce((sum, item) => sum + item.amount, 0)}
              </p>
            </dd>
          </div>
        </dl>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-slate-600 my-5">
            Expense List of Category
          </h3>
          <div>
            <div className={`relative mb-4 -mt-4`}>
              {clickedDate ? (
                <div className="absolute top-0 right-24">
                  <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                  />
                </div>
              ) : (
                <button
                  onClick={() => setClickedDate(true)}
                  className="group inline-flex justify-center w-full rounded-lg py-2 px-3 border-0 border-slate-300 text-left text-sm font-medium text-slate-600 ring-1 ring-inset ring-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 mt-10  gap-2"
                >
                  Filter by Date
                </button>
              )}
            </div>
          </div>
        </div>

        <AllExpense expense={filterExpense} category={category}></AllExpense>
      </div>
    </div>
  );
};

export default Dashboard;

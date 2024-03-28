import React, { useEffect, useState } from "react";
import AllExpense from "../Components/AllExpense";
import { useDispatch, useSelector } from "react-redux";
import { selectBudget, setBudget } from "../Redux/budgetSlice";
import moment from "moment";
import { selectExpense, setExpense } from "../Redux/expenseSlice";
import { selectCategory, setCategories } from "../Redux/categorySlice";

const year = parseInt(moment(Date.now()).format("YYYY"));
const month = parseInt(moment(Date.now()).format("MM"));
// console.log(typeof(month), month)

const Dashboard = () => {
  // const [budget, setBudget] = useState([]);
  const dispatch = useDispatch();
  const budget = useSelector(selectBudget);
  const expense = useSelector(selectExpense);
  const category = useSelector(selectCategory);

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
          dispatch(setExpense(data));
          // console.log(data);
        });
    // const fetch3 = () =>
    //   fetch(`https://expense-treaker-server.vercel.app/category`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       dispatch(setCategories(data));
    //       // console.log(data);
    //     });
    fetch1();
    fetch2();
    // fetch3();
  }, []);
  

  console.log(`category`, expense);

  const totalBudget = budget?.find(
    (b) => b?.month === month && b?.year === year
  )?.totalBudget;
  const totalExpense = expense?.reduce((sum, item) => sum + item.amount, 0);
  const remainingBudget = totalBudget - totalExpense;

  return (
    <div>
      <div className="pt-8">
        <h3 className="text-xl font-bold text-slate-600">
          Total Expense Dashboard
        </h3>
        <dl className="my-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
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
              Budget
            </dt>
            <dd className="ml-14 flex items-baseline -mt-1">
              <p className="text-2xl truncate font-semibold text-slate-600">
                {
                  budget?.find(
                    (b) => b?.month === month && b?.year === year
                  )?.totalBudget
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
              Total Expense
            </dt>
            <dd className="ml-14 flex items-baseline -mt-1">
              <p className="text-2xl truncate font-semibold text-slate-600">
                {expense?.reduce((sum, item) => sum + item.amount, 0)}
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
              Remaining Budget
            </dt>
            <dd className="ml-14 flex items-baseline -mt-1">
              <p className="text-2xl truncate font-semibold text-slate-600">
                {remainingBudget}
              </p>
            </dd>
          </div>
        </dl>
        <h3 className="text-xl font-bold text-slate-600 my-5">
          Expense List of Category
        </h3>

        <AllExpense expense={expense} category={category}></AllExpense>
        <button
          className={`py-2 mt-10 px-3 rounded-lg bg-slate-500 hover:bg-slate-600 active:bg-slate-700 ease-in duration-75 text-sm font-semibold text-white hover:text-white flex items-center gap-2`}
        >
          Previous Month
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

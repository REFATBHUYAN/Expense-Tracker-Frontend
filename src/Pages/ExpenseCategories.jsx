import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBudget, setBudget, updateBudget } from "../Redux/budgetSlice";
import { selectExpense } from "../Redux/expenseSlice";
import { selectCategory, setCategories } from "../Redux/categorySlice";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";

const year = parseInt(moment(Date.now()).format("YYYY"));
const month = parseInt(moment(Date.now()).format("MM"));

const ExpenseCategories = () => {
  const budget = useSelector(selectBudget);
  const expense = useSelector(selectExpense);
  const category = useSelector(selectCategory);
  const [updatedBudget, setUpdatedBudget] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [categoryBudget, setCategoryBudget] = useState(0);
  const [handleSubmit, setHandleSubmit] = useState(false);
  const dispatch = useDispatch();

  const budgetId = budget?.find(
    (b) => b?.month === month && b?.year === year
  )?.id;

  useEffect(() => {
    const fetch1 = () =>
      fetch(`https://expense-treaker-server.vercel.app/budget`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setBudget(data));
        });
    
    const fetch3 = () =>
      fetch(`https://expense-treaker-server.vercel.app/category`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setCategories(data));
          setHandleSubmit(false)
          // console.log(data);
        });
    
    fetch3();
    fetch1();
  }, [handleSubmit]);

  const handleUpdateBudget = async () => {
    try {
      const response = await fetch(
        `https://expense-treaker-server.vercel.app/budget/${budgetId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ totalBudget: updatedBudget }),
        }
      );
      

      if (response.ok) {
        dispatch(
          updateBudget({
            id: budgetId,
            totalBudget: updateBudget,
          })
        );
        toast.success("Total Budget Update Successfully ", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
        });
      } else {
        console.error("Failed to set total budget", await response.text());
      }
    } catch (error) {
      console.error("Error to set total budget:", error);
    }
  };
  const handleSetBudget = async () => {
    try {
      const response = await fetch(
        `https://expense-treaker-server.vercel.app/budget`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ totalBudget: updatedBudget }),
        }
      );

      if (response.ok) {
        

        toast.success("Total Budget Set Successfully ", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
        });
      } else {
        console.error("Failed to set total budget", await response.text());
      }
    } catch (error) {
      console.error("Error set total budget:", error);
    }
  };

  const totalCategoryBudget = category?.reduce((sum, item) => sum + item.budget, 0);
  const totalBudget = budget?.find(
    (b) => b?.month === month && b?.year === year
  )?.totalBudget;


  const handleAddCategory = async () =>{
    if((totalCategoryBudget + categoryBudget) > totalBudget){
      toast.error("Your Budget is High", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
    }
    else{
      try {
        const response = await fetch(
          `https://expense-treaker-server.vercel.app/category`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ budget: categoryBudget, name:categoryName }),
          }
        );
        
  
        if (response.ok) {
          setHandleSubmit(true)
          toast.success("New Category Added Successfully ", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
        } else {
          console.error("Failed to set total budget", await response.text());
        }
      } catch (error) {
        console.error("Error to set total budget:", error);
      }
    }
  }

  console.log("update budget", typeof(categoryBudget), typeof(totalCategoryBudget), typeof(totalBudget));


  console.log(typeof budgetId);
  return (
    <div>
      <div className="overflow-hidden p-3 rounded-lg ring-inset ring-green-200 ring-1 bg-green-50/50 mb-5">
        <h1 className="text-2xl font-semibold text-gray-900 my-5">
          Add your monthly Budget
        </h1>
        <div>
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Enter / Update Your this month budget
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                type="number"
                name="amount"
                id="amount"
                defaultValue={totalBudget}
                onChange={(e) => setUpdatedBudget(e.target.value)}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-6 ">
            <button
              // type="submit"
              onClick={handleSetBudget}
              disabled={totalBudget ? true : false}
              className={`text-center inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ${
                totalBudget ? "hidden" : ""
              }`}
            >
              Save
            </button>
            <button
              type="submit"
              onClick={handleUpdateBudget}
              className={`inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ${
                totalBudget ? "" : "hidden"
              }`}
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1 overflow-hidden p-3 rounded-lg ring-inset ring-green-200 ring-1 bg-green-50/50">
          <h1 className="text-2xl font-semibold text-gray-900 my-5">
            All Expense Categories
          </h1>
          <div>
            {category?.map((cate) => (
              <div
                key={cate?.id}
                className="overflow-hidden p-3 rounded-lg ring-inset ring-indigo-200 ring-1 bg-indigo-50/50 my-2"
              >
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
                  {cate.name}
                </dt>
                <dd className="ml-14 flex items-baseline -mt-1">
                  <p className="text-2xl truncate font-semibold text-slate-600">
                    {cate.budget}
                  </p>
                </dd>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-hidden p-3 rounded-lg ring-inset ring-green-200 ring-1 bg-green-50/50">
          <h1 className="text-2xl font-semibold text-gray-900 my-5">
            Add new Expense Categories
          </h1>
          <div>
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
                  onChange={(e) => setCategoryName(e.target.value)}
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
                  onChange={(e) => setCategoryBudget(parseInt(e.target.value))}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={handleAddCategory}
                disabled={categoryBudget === 0 || categoryName === ''}
                className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default ExpenseCategories;

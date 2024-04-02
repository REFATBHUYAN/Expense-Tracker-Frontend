import React, { useEffect, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, setCategories } from "../Redux/categorySlice";
import toast, { Toaster } from "react-hot-toast";

const Expense = () => {
  const category = useSelector(selectCategory);
  const defaultId = category.length > 0 && category[0].id ;
  const dispatch = useDispatch();
  const [exAmount, setExAmount] = useState(0);
  const [cateId, setCateId] = useState(defaultId);
  const [description, setDescription] = useState("");
  const [payment, setPayment] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    
    const fetch3 = () =>
      fetch(`https://expense-treaker-server.vercel.app/category`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setCategories(data));
          // console.log(data);
        });
    
    fetch3();
  }, []);

  const handleExpenseAdd = async () =>{
    console.log(exAmount, cateId, description, payment, location)
    if(exAmount === 0 || exAmount.length === 0 || description === '' || location === '' || payment === ''){
      return alert("Please enter valid Information");
    }
    const expenseItem = {
        amount: exAmount,
        cateId: cateId,
        description: description,
        payment: payment,
        location: location
    }
    try {
        const response = await fetch(
          `https://expense-treaker-server.vercel.app/expense`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(expenseItem),
          }
        );
  
        if (response.ok) {
          
  
          toast.success("New Expense Item Added Successfully ", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
        } else {
          console.error("Failed to New Expense Item:", await response.text());
        }
      } catch (error) {
        console.error("Failed to New Expense Item:", error);
      }
  }
  // console.log("categoryid from expens", defaultId);

  return (
    <>
      <div>
        <div className="space-y-12 sm:space-y-16">
          <div>
            <h2 className="text-3xl font-semibold leading-7 text-gray-900">
              Add Expense Information
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
                    onChange={(e) => setExAmount(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                    onChange={(e) => setCateId(parseInt(e.target.value))}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {category.map((item) => {
                      return (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                    {/* <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option> */}
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
                    onChange={(e) => setDescription(e.target.value)}
                    autoComplete="Description"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
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
              </div> */}

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
                    onChange={(e) => setPayment(e.target.value)}
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                    onChange={(e) => setLocation(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            onClick={handleExpenseAdd}
            className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Save
          </button>
        </div>
        <Toaster></Toaster>
      </div>
    </>
  );
};

export default Expense;

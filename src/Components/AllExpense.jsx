import React, { useState } from "react";

const data = [
    {
      id: "001",
      amount: 50.00,
      category: "Groceries",
      description: "Purchase of fruits and vegetables",
      date: "2024-03-27",
      payment_method: "Credit Card",
      location: "Local supermarket"
    },
    {
      id: "002",
      amount: 100.00,
      category: "Dining",
      description: "Dinner with friends",
      date: "2024-03-26",
      payment_method: "Cash and Credit Card",
      location: "Restaurant XYZ"
    },
    {
      id: "003",
      amount: 30.00,
      category: "Transportation",
      description: "Uber ride to the airport",
      date: "2024-03-25",
      payment_method: "Debit Card",
      location: "Home to Airport"
    },
    {
      id: "004",
      amount: 20.00,
      category: "Entertainment",
      description: "Movie ticket",
      date: "2024-03-24",
      payment_method: "Online booking",
      location: "Cinema ABC"
    },
    {
      id: "005",
      amount: 15.00,
      category: "Personal Care",
      description: "Purchase of toiletries",
      date: "2024-03-23",
      payment_method: "Cash",
      location: "Local pharmacy"
    },
    {
      id: "006",
      amount: 200.00,
      category: "Shopping",
      description: "Clothing shopping spree",
      date: "2024-03-22",
      payment_method: "Credit Card",
      location: "Fashion Mall"
    },
    {
      id: "007",
      amount: 40.00,
      category: "Utilities",
      description: "Electricity bill payment",
      date: "2024-03-21",
      payment_method: "Bank Transfer",
      location: "Online"
    },
    {
      id: "008",
      amount: 25.00,
      category: "Fitness",
      description: "Gym membership fee",
      date: "2024-03-20",
      payment_method: "Monthly Subscription",
      location: "Local Gym"
    },
    {
      id: "009",
      amount: 75.00,
      category: "Education",
      description: "Textbook purchase",
      date: "2024-03-19",
      payment_method: "Credit Card",
      location: "University Bookstore"
    },
    {
      id: "010",
      amount: 10.00,
      category: "Snacks",
      description: "Snacks for movie night",
      date: "2024-03-18",
      payment_method: "Cash",
      location: "Local convenience store"
    }
  ];
  
//   console.log(data);
  

const AllExpense = ({expense, category}) => {
    // const [allExpense, setAllExpense] = useState(expense)
  return (
    <div>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-slate-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600 sm:pl-3"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Date
                  </th>
                  {/* <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                    >
                      Amount
                    </th> */}
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Payment Method
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600"
                  >
                    Location
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {expense?.map((item, index) => (
                  <tr
                    key={item.id}
                    className={index % 2 === 0 ? undefined : "bg-slate-50"}
                  >
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-400 sm:pl-3">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm font-medium text-slate-400">
                      {item.amount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-500">
                      {category?.find(c => c.id === item?.cateId)?.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                      {item.description}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                      {item.date.slice(0, 10)}
                    </td>
                    
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                      {item.payment}
                      
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                      <div className="flex gap-2">
                        {item.location}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {expense?.length === 0 && (
              <div className="font-light text-slate-400 text-sm italic text-center w-full mx-auto">
                <div className="px-3 py-4 border-t border-slate-200">
                  No orders found for this date!
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllExpense;

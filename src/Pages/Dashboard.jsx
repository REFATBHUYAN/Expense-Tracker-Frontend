import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="pt-8">
        <h3 className="text-xl font-bold text-slate-600">
          Total Expense Dashboard
        </h3>
        <dl className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
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
                {/* {filterData.filter((d) => d.status === "Shipped").length} */}
                10
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
                10
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
                10
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Dashboard;

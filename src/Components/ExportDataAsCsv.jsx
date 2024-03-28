import React from "react";
import { CSVLink } from "react-csv";

const ExportDataAsCsv = ({ data }) => {
  const headers = [
    { label: "Id", key: "id" },
    { label: "Amount", key: "amount" },
    { label: "Catagory Id", key: "cateid" },
    { label: "Description", key: "description" },
    { label: "Date", key: "date" },
    { label: "Payment Method", key: "payment" },
    { label: "Location", key: "location" },
    // Add more headers as needed
  ];
  return (
    <>
      <CSVLink
        data={data}
        filename={"DataFile.csv"}
        className="btn btn-primary"
        target="_blank"
      >
        <span className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-10">Export to CSV</span>
      </CSVLink>
      {/* <CSVLink data={data} headers={headers}>
        Export to CSV
      </CSVLink> */}
    </>
  );
};

export default ExportDataAsCsv;

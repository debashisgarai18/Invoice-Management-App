import React from "react";
import data from "./data"

const headers = [
  "customer name",
  "customer #",
  "invoice #",
  "invoice amount",
  "due date",
  "predicted payment date",
  "notes",
];

const RenderTable = () => {
  return (
    <div className="w-full px-7">
      <table className="w-full h-[660px]">
        <thead className="w-full">
          <tr className="border-b-2 border-b-[#283A46] w-full">
            <th>
              <input type="checkbox" />
            </th>
            {headers.map((e, idx) => (
              <th key={idx} className="capitalize text-lg text-[#97A1A9]">
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((val, idx) => (
            <tr key={idx} className="text-center text-xl text-white">
              <input type="checkbox" checked={val.checked} />
              <td className="text-center">{val.cust_name}</td>
              <td className="text-center">{val.cust_no}</td>
              <td className="text-center">{val.inv_no}</td>
              <td className="text-center">{val.inv_amnt}</td>
              <td className="text-center">{val.due_date}</td>
              <td className="text-center">{val.pred_date}</td>
              <td className="max-w-[100px] overflow-hidden whitespace-nowrap text-ellipsis text-center">{val.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RenderTable;

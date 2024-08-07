import "./scrollbar.css";
import PropTypes from "prop-types";
import TableData from "./TableData";
import { useState } from "react";


const headers = [
  "customer name",
  "customer #",
  "invoice #",
  "invoice amount",
  "due date",
  "predicted payment date",
  "delay",
  "remarks (delay bucket)",
];

const RenderTable = ({ getinvoices, getInvId}) => {

  const setID = (idx) => {
    getInvId(idx)
  }

  return (
    <div className="w-full px-7">
      <div className="w-full h-[660px]  flex flex-col">
        <div className="border-b-2 border-b-[#283A46] w-full flex mb-[0.5rem]">
          <div className="w-full flex justify-between px-[0.75rem]">
            <input type="checkbox" />
            {headers.map((e, idx) => (
              <div
                key={idx}
                className="capitalize text-lg text-[#97A1A9] text-center w-[11%] "
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full gap-[0.3rem] flex-col pr-[1rem] overflow-y-auto pb-[1rem]">
          {getinvoices.map((val, idx) => (
            <TableData val = {val} key = {val._id} setInvID = {setID} index = {idx}/>
          ))}
        </div>
      </div>
    </div>
  );
};

RenderTable.propTypes = {
  getinvoices: PropTypes.array.isRequired,
  getInvId: PropTypes.func.isRequired,
};
export default RenderTable;

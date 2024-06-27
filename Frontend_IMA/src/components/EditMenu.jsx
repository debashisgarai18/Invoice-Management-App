import React from "react";
import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";

const EditMenu = ({ edit }) => {
  // for the close and the cancel button
  const handleClose = () => {
    edit();
  };
  return (
    <>
      <div className="absolute bg-black opacity-70 top-0 left-0 w-full h-full z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="absolute w-[30%] h-[50%] bg-[#2A3E4C] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md">
          <div className="w-full border-b-[1px] h-[20%] border-[#1A262F] flex justify-between items-center px-[1.5rem] py-[1.5rem]">
            <div className="text-2xl text-white">Edit Invoice</div>
            <div className="text-2xl text-white">
              <RxCross2 className="cursor-pointer" onClick={handleClose} />
            </div>
          </div>
          <div className="w-full h-[60%] flex flex-col pl-[2rem] pb-[1rem]">
            <div className="w-full h-[25%] flex gap-[0.3rem] items-center">
              <div className="w-[40%] text-[#97A1A9] text-xl">
                Invoice Amount
              </div>
              <input
                type="text"
                className="w-[50%] h-[2.1rem] bg-[#283A46] focus:outline-none border-[1px] border-[#356680] font-semibold text-white rounded-md px-[0.5rem] py-[0.5rem]"
                // value={dueDate}
                // onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <div className="w-full h-[75%] flex gap-[0.3rem]">
              <div className="w-[40%] text-[#97A1A9] text-xl">Notes</div>
              <textarea
                className="w-[50%] h-full bg-[#283A46] focus:outline-none border-[1px] border-[#356680] font-semibold text-white rounded-md px-[0.5rem] py-[0.5rem] text-base leading-tight resize-none"
                // value={notes}
                // onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="w-full h-[20%] border-t-[1px] border-[#1A262F] flex justify-between items-center px-[2rem]">
            <div
              className="text-xl text-[#14AFF1] cursor-pointer"
              onClick={handleClose}
            >
              Cancel
            </div>
            <div className="flex gap-[1rem]">
              <button
                className="text-xl border-[1px] hover:bg-[#14AFF1] focus:bg-[#97A1A9] focus:border-none  border-[#14AFF1] rounded-md text-white px-[0.75rem] py-[0.3rem]"
                // onClick={handleClear}
              >
                Reset
              </button>
              <button className="text-xl border-[1px] hover:bg-[#14AFF1] focus:bg-[#97A1A9] focus:border-none  border-[#14AFF1] rounded-md text-white px-[0.75rem] py-[0.3rem]">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

EditMenu.propTypes = {
  edit: PropTypes.func.isRequired,
};

export default EditMenu;

import { IoMdAdd } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { RiSubtractLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import RenderTable from "./RenderTable";
import PropTypes from 'prop-types';
import { useState } from "react";

const InvoiceTable = ({add, edit, invoices, invId_from_invTable}) => {
  const [invID, setInvID] = useState("");

  const getInvId = (idx) => {
    setInvID(idx);
  }

  const handleAdd = () => {
    add();
  }
  const handleEdit = () => {
    invId_from_invTable(invID)
    edit();
  }

  return (
    <div className='w-[98%] h-fit m-auto'>
        <div className='text-4xl tracking-wide font-semibold pb-[1.75rem] text-white pl-[0.3rem]'>Dashboard</div>
        <div className='w-full h-fit bg-[#273D49CC] rounded-md drop-shadow-xl'>
          <div className='btn-bar w-full h-fit px-7 py-5'>
            <div className='flex flex-wrap gap-5 w-full justify-end'>
              <button className='flex justify-center items-center gap-2 py-[6px] border-[1px] border-[#97A1A9] rounded-md text-xl text-[#97A1A9] hover:text-white hover:border-white hover:scale-105 focus:text-white focus:border-[#14AFF1] w-[7.5rem] h-fit drop-shadow-md'
              onClick={handleAdd}>
                <IoMdAdd/>
                <p>Add</p>
              </button>
              <button className='flex justify-center items-center gap-2 py-[6px] border-[1px] border-[#97A1A9] rounded-md text-xl text-[#97A1A9] hover:text-white hover:border-white hover:scale-105 focus:text-white focus:border-[#14AFF1] w-[7.5rem] h-fit drop-shadow-md'
              onClick={handleEdit}>
                <HiPencil/>
                <p>Edit</p>
              </button>
              <button className='flex justify-center items-center gap-2 py-[6px] border-[1px] border-[#f0f7fd] rounded-md text-xl text-[#97A1A9] hover:text-white hover:border-white hover:scale-105 focus:text-white focus:border-[#14AFF1] w-[7.5rem] h-fit drop-shadow-md'>
                <RiSubtractLine/>
                <p>Delete</p>
              </button>
              <div className='w-[20%] rounded-md bg-[#283A46] focus:border-[#14AFF1] border-[1px] border-[#356680] flex justify-center items-center gap-4 text-xl text-[#97A1A9] focus:text-white cursor-pointer'>
              <input type="text"
              placeholder='Search by Invoice Number'
              className='w-[85%] h-full bg-transparent focus:outline-none focus:border-none focus:text-white'/>
              <button className='focus:text-white hover:text-white'><IoSearchSharp/></button>
              </div>
            </div>
          </div>
          <RenderTable getinvoices = {invoices} getInvId = {getInvId}/>
        </div>
    </div>
  )
}


InvoiceTable.propTypes = {
  add : PropTypes.func.isRequired,
  edit : PropTypes.func.isRequired,
  invoices : PropTypes.array.isRequired,
  invId_from_invTable : PropTypes.func.isRequired,
};
export default InvoiceTable
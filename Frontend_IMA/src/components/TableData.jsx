import PropTypes from "prop-types";
import { useState } from 'react';

const TableData = ({ val, setInvID}) => {
  const [isChecked, setIsChecked] = useState(false);

  // function to handle the checkboxes
  const handleCheck = (idx) => {
    setInvID(idx);
    setIsChecked(!isChecked);
  }

  return (
    <div
      className="text-lg text-white flex flex-row w-full justify-between"
    >
      <input type="checkbox" defaultChecked={isChecked} onClick={() => handleCheck(val._id)} />
      <div className="w-[11%] text-left overflow-hidden whitespace-nowrap text-ellipsis">
        {val.name_customer}
      </div>
      <div className="text-center w-[11%]">{val.cust_number}</div>
      <div className="text-center w-[11%]">{val.invoice_id}</div>
      <div className="text-right w-[11%]">
        {parseInt(val.total_open_amount) > 1000
          ? String(parseInt(val.total_open_amount) / 1000) + "K"
          : val.total_open_amount}
      </div>
      <div className="text-center w-[11%]">{val.due_in_date}</div>
      <div className="text-center w-[11%]">{val.Predicted_payment_date}</div>
      <div className="text-center w-[11%]">
        {parseInt(val.Delay) < 0
          ? val.Delay + " days"
          : parseInt(val.Delay) === 1
          ? val.Delay + " day"
          : val.Delay + " days"}
      </div>
      <div className="text-left w-[11%] overflow-hidden whitespace-nowrap text-ellipsis capitalize">
        {val.delay_bucket}
      </div>
    </div>
  );
};

TableData.propTypes = {
  val: PropTypes.object.isRequired,
  setInvID : PropTypes.func.isRequired,
};
export default TableData;

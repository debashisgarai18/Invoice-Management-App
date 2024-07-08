import PropTypes from "prop-types";
import { useState } from "react";

const TableData = ({ val, setInvID, index}) => {
  const [isChecked, setIsChecked] = useState(false);

  // function to handle the checkboxes
  const handleCheck = (idx) => {
    setInvID(idx);
    setIsChecked(!isChecked);
  };

  return (
    <div className={`text-lg text-white flex flex-row w-full justify-between py-[0.75rem] px-[0.75rem] rounded-md ${index % 2 === 0 ? 'bg-transparent' : 'bg-[#283A46]'}`}>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onClick={() => handleCheck(val._id)}
      />
      <div className="w-[11%] text-left overflow-hidden whitespace-nowrap text-ellipsis">
        {val.name_customer}
      </div>
      <div className="text-center w-[10%]">{val.cust_number}</div>
      <div className="text-center w-[10%]">{val.invoice_id}</div>
      <div className="text-right w-[10%]">
        {parseInt(val.total_open_amount) > 1000
          ? String(parseInt(val.total_open_amount) / 1000) + "K"
          : val.total_open_amount}
      </div>
      <div className="text-center w-[10%]">{val.due_in_date}</div>
      <div className="text-center w-[10%]">{val.Predicted_payment_date}</div>
      <div className="text-center w-[10%]">
        {parseInt(val.Delay) < 0
          ? val.Delay + " days"
          : parseInt(val.Delay) === 1
          ? val.Delay + " day"
          : val.Delay + " days"}
      </div>
      <div className="text-left w-[10%] overflow-hidden whitespace-nowrap text-ellipsis capitalize">
        {val.delay_bucket === "more than 100 days of delay" ? (
          <span className="text-[#ff2f2f] font-semibold underline">{val.delay_bucket}</span>
        ) : val.delay_bucket === "60 to 100 days of delay" ? (
          <span className="text-[#ff9d5b]">{val.delay_bucket}</span>
        ) : val.delay_bucket === "45 to 60 days of delay" ||
          val.delay_bucket === "30 to 45 days of delay" ||
          val.delay_bucket === "15 to 30 days of delay" ? (
          <span className="text-[#fffc5b]">{val.delay_bucket}</span>
        ) : (
          <span className="text-[#5bff5b]">{val.delay_bucket}</span>
        )}
      </div>
    </div>
  );
};

TableData.propTypes = {
  val: PropTypes.object.isRequired,
  setInvID: PropTypes.func.isRequired,
};
export default TableData;

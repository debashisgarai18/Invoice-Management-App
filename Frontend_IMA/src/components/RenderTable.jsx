import "./scrollbar.css";
import PropTypes from "prop-types";

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

const RenderTable = ({ getinvoices }) => {
  return (
    <div className="w-full px-7">
      <div className="w-full h-[660px]  flex flex-col">
        <div className="border-b-2 border-b-[#283A46] w-full flex mb-[0.5rem]">
          <div className="w-full flex pr-[1rem] justify-between">
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
        <div className="flex w-full gap-[1rem] flex-col pr-[1rem] overflow-y-auto pb-[1rem]">
          {getinvoices.map((val) => (
            <div
              key={val._id}
              className="text-lg text-white flex flex-row w-full justify-between"
            >
              <input type="checkbox" defaultChecked={false} />
              <div className="w-[11%] text-left overflow-hidden whitespace-nowrap text-ellipsis">
                {val.name_customer}
              </div>
              <div className="text-center w-[11%]">{val.cust_number}</div>
              <div className="text-center w-[11%]">
                {val.invoice_id}
              </div>
              <div className="text-right w-[11%]">
                {parseInt(val.total_open_amount) > 1000
                  ? String(parseInt(val.total_open_amount) / 1000) + "K"
                  : val.total_open_amount}
              </div>
              <div className="text-center w-[11%]">{val.due_in_date}</div>
              <div className="text-center w-[11%]">
                {val.Predicted_payment_date}
              </div>
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
          ))}
        </div>
      </div>
    </div>
  );
};

RenderTable.propTypes = {
  getinvoices: PropTypes.array.isRe,
};
export default RenderTable;

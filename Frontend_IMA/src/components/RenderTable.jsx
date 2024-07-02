import { data } from "./data";
import "./scrollbar.css";
import PropTypes from 'prop-types'

const headers = [
  "customer name",
  "customer #",
  "invoice #",
  "invoice amount",
  "due date",
  "predicted payment date",
  "notes",
];

const RenderTable = ({getinvoices}) => {
  return (
    <div className="w-full px-7">
      <div className="w-full h-[660px]  flex flex-col">
        <div className="border-b-2 border-b-[#283A46] w-full flex mb-[0.5rem]">
          <div className="w-full flex pr-[1rem] gap-[9.35rem]">
            <input type="checkbox" />
            {headers.map((e, idx) => (
              <div
                key={idx}
                className="capitalize text-lg text-[#97A1A9] text-center"
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full gap-[1rem] flex-col pr-[1rem] overflow-y-auto">
          {getinvoices.map((val, idx) => (
            <div
              key={idx}
              className="text-center text-lg text-white flex flex-row w-full gap-[10rem] "
            >
              <input type="checkbox" defaultChecked={false} />
              <div className="text-center">{val.name_customer}</div>
              <div className="text-center">{val.cust_number}</div>
              <div className="text-center">{val.invoice_id}</div>
              <div className="text-center">{val.total_open_amount}</div>
              <div className="text-center">{val.due_in_date}</div>
              <div className="text-center">{val.Predicted_payment_date}</div>
              <div className="max-w-[200px] overflow-hidden whitespace-nowrap text-ellipsis text-center pl-[2rem]">
                {val.notes}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


RenderTable.propTypes = {
  getinvoices : PropTypes.array.isRe
}
export default RenderTable;

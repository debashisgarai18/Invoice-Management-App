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
              <div className="text-center max-w-[11%] overflow-hidden whitespace-nowrap text-ellipsis">{val.name_customer}</div>
              <div className="text-center max-w-[11%]">{val.cust_number}</div>
              <div className="text-center max-w-[11%]">{val.invoice_id}</div>
              <div className="text-center max-w-[11%]">{val.total_open_amount}</div>
              <div className="text-center max-w-[11%]">{val.due_in_date}</div>
              <div className="text-center max-w-[11%]">{val.Predicted_payment_date}</div>
              <div className="max-w-[11%] overflow-hidden whitespace-nowrap text-ellipsis text-center pl-[2rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum earum libero perferendis eligendi culpa quia, vel nemo sit quaerat, velit deserunt doloremque nesciunt?
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

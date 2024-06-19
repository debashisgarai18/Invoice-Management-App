import { data } from "./data";
import "./scrollbar.css";

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
      <div className="w-full h-[660px]  flex flex-col">
        <div className="border-b-2 border-b-[#283A46] w-full flex">
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
          {data.map((val, idx) => (
            <div
              key={idx}
              className="text-center text-lg text-white flex flex-row w-full gap-[10rem] "
            >
              <input type="checkbox" defaultChecked={false} />
              <div className="text-center">{val.cust_name}</div>
              <div className="text-center">{val.cust_no}</div>
              <div className="text-center">{val.inv_no}</div>
              <div className="text-center">{val.inv_amnt}</div>
              <div className="text-center">{val.due_date}</div>
              <div className="text-center">{val.pred_date}</div>
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

export default RenderTable;

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InvoiceTable from "./components/InvoiceTable";
import AddMenu from "./components/AddMenu";
import EditMenu from "./components/EditMenu";

function App() {
  const [addState, setAddState] = useState(false);
  const [editState, setEditState] = useState(false);

  const addBtn = () => {
    setAddState(!addState);
  };

  const editBtn = () => {
    setEditState(!editState);
  };
  return (
    <>
      <div className="bg-[#39495E] w-full h-screen">
        <Header />
        <InvoiceTable add = {addBtn} edit={editBtn} />
        {addState && <AddMenu/>}
        {editState && <EditMenu/>}
      </div>
    </>
  );
}

export default App;

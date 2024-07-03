import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InvoiceTable from "./components/InvoiceTable";
import AddMenu from "./components/AddMenu";
import EditMenu from "./components/EditMenu";


function App() {
  const [addState, setAddState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [invData, setInvData] = useState([]);

  const addBtn = () => {
    setAddState(!addState);
  };

  const editBtn = () => {
    setEditState(!editState);
  };

  // function to get invoices from the database
  const getInvoices = async () => {
    const response = await fetch('http://localhost:3000/invoices');
    const receivedData = await response.json();

    // console.log(data);
    console.log(typeof receivedData);
    setInvData(receivedData.data);
  }

  // this shouuld be rendered once when the App component loads
  useEffect(() => {
    getInvoices();
  },[])

  return (
    <>
      <div className="bg-[#39495E] w-full h-screen relative">
        <Header />
        <InvoiceTable add = {addBtn} edit = {editBtn} invoices={invData}/>
        {addState && <AddMenu add = {addBtn}/>}
        {editState && <EditMenu edit = {editBtn}/>}
      </div>
    </>
  );
}

export default App;

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
  const [invoiceID, setInvoiceID] = useState("");

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
    setInvData(receivedData.data);
  }

  // this shouuld be rendered once when the App component loads
  // calling the API in 100ms time so that if we add something it gets rendered immediately!!
  useEffect(() => {
    setInterval(() => {
      getInvoices();
    },100);
  },[])

  // function to get the invoice id from the invoice table (which is being checked)
  // and push it to the edit menu
  const getInvoiceId = (idx) => {
    setInvoiceID(idx);
  }
  return (
    <>
      <div className="bg-[#39495E] w-full h-screen relative">
        <Header />
        <InvoiceTable add = {addBtn} edit = {editBtn} invoices={invData} invId_from_invTable = {getInvoiceId}  editStatus = {editState}/>
        {addState && <AddMenu add = {addBtn}/>}
        {editState && <EditMenu edit = {editBtn} edit_invID = {invoiceID}/>}
      </div>
    </>
  );
}

export default App;

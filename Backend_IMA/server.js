const express = require("express");
const app = express();
const cors = require("cors");
const imaModel = require("./Database/ima-db");

app.use(cors());
app.use(express.json());

app.get("/invoices", async (req, res) => {
  const response = await imaModel.find();

  // console.log(response);
  if (response) {
    res.status(200).json({
      data: response,
    });
  } else {
    res.status(404).json({
      message: "Could not recover data from the DB via this endpoint!!",
    });
  }
});

app.post("/invoices", async (req, res) => {
  const response = await imaModel.create({
    name_customer: req.body.customerName,
    cust_number: req.body.customerNumber,
    invoice_id: req.body.invoiceNumber,
    total_open_amount: req.body.invoiceAmount,
    due_in_date: req.body.duedate,
    Predicted_payment_date: "---",
    Delay: "---",
    delay_bucket: "---",
  });
  if (response) {
    res.status(200).json({
      message: "Data uploaded successfully!!",
    });
  } else {
    res.status(404).json({
      message: "Some issue with uploading the data",
    });
  }
});

app.put("/invoices/:id", async (req, res) => {
  const updateId = req.params.id;
  const updatedAmount = req.body.invAmnt;

  if (updateId === "") {
    res.status(404).json({
      message: "The ID to be updated cannot be null!!",
    });
    return;
  }

  const response = await imaModel.findByIdAndUpdate(
    { _id: updateId },
    { total_open_amount: updatedAmount }
  );
  if (response) {
    res.status(200).json({
      message: "The data is updated successfully!!",
    });
  } else {
    res.status(404).json({
      message: "The is some issue with the given ID!!",
    });
  }
});

app.delete("/invoices/:id", async (req, res) => {
  const delId = req.params.id;

  if (!delId) {
    res.status(404).json({
      message: "The ID to be deleted cannot be empty!!",
    });
  }
  const response = await imaModel.findByIdAndDelete({ _id: delId });
  if (response) {
    res.status(200).json({
      message: `The data with ${delId} is deleted successfully!!`,
    });
  } else {
    res.status(404).json({
      message: "There is some issue with the delete ID",
    });
  }
});

app.use((err, req, res, next) => {
  res.status(404).json({
    message: "Some error occured",
  });
});
app.listen(3000);

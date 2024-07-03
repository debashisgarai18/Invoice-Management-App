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

app.use((err, req, res, next) => {
  res.status(404).json({
    message: "Some error occured",
  });
});
app.listen(3000);

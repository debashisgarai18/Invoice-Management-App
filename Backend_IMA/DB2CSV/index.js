const fs = require("fs");
const csvParser = require("csv-parser");
const imaModel = require("../Database/ima-db");

// this the array which will store all the values from the .csv
const tempArr = [];

fs.createReadStream("../../ML Modelling/predData.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    const { name_customer, cust_number, invoice_id, total_open_amount, due_in_date, Predicted_payment_date } = data;
    tempArr.push({ name_customer, cust_number, invoice_id, total_open_amount, due_in_date, Predicted_payment_date })
  })
  .on("end", async () => {
    const res = await imaModel.insertMany(tempArr);
    if(res) console.log("Data inserted Successfully");
    else console.log("Error in inserting the data into the DB");
  });

// console.log(tempArr);

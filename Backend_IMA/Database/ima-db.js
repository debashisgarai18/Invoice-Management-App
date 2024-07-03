// push the csv data to the DB
const mongoose = require("mongoose");

// connecting to MongoDB
mongoose.connect("mongodb+srv://deba018:Iamajettsimp69@imacluster01.i5b1d2n.mongodb.net/invoice_management_app")

const imaSchema = new mongoose.Schema({
    name_customer : String,
    cust_number	 : String,
    invoice_id : String,
    total_open_amount : String,
    due_in_date : String,
    Predicted_payment_date : String,
    Delay : String,
    delay_bucket : String
})

const imaModel = mongoose.model('Invoices', imaSchema);

module.exports = imaModel;
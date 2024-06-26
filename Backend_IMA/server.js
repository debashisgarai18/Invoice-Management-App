const express = require("express");
const app = express();
const cors = require("cors");
const imaModel = require("./Database/ima-db");

app.use(cors());
app.use(express.json());

app.get('/invoices', (req, res) => {

})

app.post('/invoices', async (req, res) => {
    try{
        await imaModel.create({
            customerName : req.body.customerName,
            customerNumber : req.body.customerNumber,
            invoiceNumber : req.body.invoiceNumber,
            invoiceAmount : req.body.invoiceAmount,
            dueDate : req.body.duedate,
            predictedPaymentDate : req.body.predictedPaymentDate,
            notes : req.body.notes
        })

        res.status(200).json({
            message :  "data uploaded successfully!!",
        })
    }
    catch(err) {
        res.status(404).json({
            message : "Some issue found!!",
        })
    }
})

app.use((err, req, res, next) =>{
    res.status(404).json({
        message : "Some error occured",
    })
})
app.listen(3000);



const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get('/invoices', (req, res) => {

})

app.post('/invoices', (req, res) => {

})

app.use((err, req, res, next) =>{
    res.status(404).json({
        message : "Some error occured",
    })
})
app.listen(3000);



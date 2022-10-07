const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/', (req, res)=>{
    res.send('Hello World...!');
})

function checkValue(num1, num2) {
    if(num1 == "" || num2 == "")
    {
        return false;
    }
    return true;
}

function validateDataTypes(num1, num2) {
    if(isNaN(num1) || isNaN(num2))
    {
        return false;
    }
    return true;
}

app.post("/add", (req, res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2))
    {
        return res.status(400).json ({
            status: "failure",
            message: 'Please provide Input'
        })
    }

    if(!validateDataTypes(num1, num2))
    {
        return res.status(400).json ({
            status: "error",
            message: 'Invalid data-type'
        })
    }

    let result = Number(num1) + Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000)
    {
        res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000)
    {
        res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    res.status(200).json({
        status: 'Success',
        message: 'the sum of given two numbers',
        sum: sum
    })
})

app.post("/sub", (req, res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2))
    {
        return res.status(400).json ({
            status: "failure",
            message: 'Please provide Input'
        })
    }

    if(!validateDataTypes(num1, num2))
    {
        return res.status(400).json ({
            status: "error",
            message: 'Invalid data-type'
        })
    }

    let result = Number(num1) - Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000)
    {
        res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000)
    {
        res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    res.status(200).json({
        status: 'Success',
        message: 'the difference of given two numbers',
        difference: result
    })
})

app.post("/multiply", (req, res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2))
    {
        return res.status(400).json ({
            status: "failure",
            message: 'Please provide Input'
        })
    }

    if(!validateDataTypes(num1, num2))
    {
        return res.status(400).json ({
            status: "error",
            message: 'Invalid data-type'
        })
    }

    let result = Number(num1) * Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000)
    {
        res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000)
    {
        res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    res.status(200).json({
        status: 'Success',
        message: 'the product of given two numbers',
        result: result
    })
})

app.post("/divide", (req, res)=>{
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2))
    {
        return res.status(400).json ({
            status: "failure",
            message: 'Please provide Input'
        })
    }

    if(!validateDataTypes(num1, num2))
    {
        return res.status(400).json ({
            status: "error",
            message: 'Invalid data-type'
        })
    }

    if(Number(num2) == 0)
    {
        res.status(400).json({
            status: 'error',
            message: 'Divide by Zero...!'
        })
    }

    let result = Number(num1) / Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000)
    {
        res.status(400).json({
            status: 'error',
            message: 'Underflow'
        })
    }

    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000)
    {
        res.status(400).json({
            status: 'error',
            message: 'Overflow'
        })
    }

    res.status(200).json({
        status: 'Success',
        message: 'the division of given two numbers',
        result: result
    })
})

app.listen(3000, () => console.log(`App listening on port 3000!`))

module.exports = app;
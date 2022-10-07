const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/welcome', (req, res)=>{
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('Welcome to Dominos...!')
});

app.get('/contact', (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify({
        phone: '180242612',
        email: 'gusetbasnsn@foodies.com'
    }))
});

app.get('*', (req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(404).send(JSON.stringify({
        message: 'API Not Found...!'
    }))
});

app.listen(8081, () => console.log(`App listening on port 8081!`))

module.exports = app;
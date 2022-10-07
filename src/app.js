const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());
app.use(bodyParser());

// Read Operation
app.get("/mario", async (req, res)=>{
    try{
        const data = await marioModel.find();
        res.json({
            status: "Success",
            data
        })
    }
    catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

// Read Operation with Specific ID
app.get("/mario/:id", async (req, res)=>{
    try{
        const data = await marioModel.find({_id: req.params.id});
        if(data.length == 0)
        {
            return res.status(400).json({
                status: "Failed",
                message: "ID not Found.!"
            })
        }
        res.json({
            status: "Success",
            data
        })
    }
    catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

// Create Operation
app.post("/mario", async (req, res)=>{
    try{
        const data = await marioModel.create(req.body);
        res.status(200).json({
            status: "Success",
            data
        })
    }
    catch(e){
        res.status(400).json({
            status: "Failed",
            message: "either name or age is missing.!"
        })
    }
});

// Delete Operation
app.delete("/mario/:id", async (req, res)=>{
    try{
        const data = await marioModel.deleteOne({_id: req.params.id});
        res.status(200).json({
            status: "Success",
            message: "Character deleted"
        })
    }
    catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
});

// Patch Operation
app.patch("/mario/:id", async (req, res)=>{
    try{
        await marioModel.updateOne({_id: req.params.id}, req.body);
        const data = await marioModel.findOne({_id: req.params.id})
        res.status(200).json({
            status: "Success",
            data
        })
    }
    catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
});


// Default Operation
app.get("*", (req, res)=>{
    res.status(400).json({
        status: "Failed",
        message: "APi Not Found.!"
    })
});

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

module.exports = app;
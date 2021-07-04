const express = require('express');
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');

const app = express();
//refer this - https://stackoverflow.com/questions/23413401/what-does-trust-proxy-actually-do-in-express-js-and-do-i-need-to-use-it/42765157   
app.enable("trust proxy");
//Middlewares
app.use(express.json());
app.use(cors());
//error handling 
app.use(function(err, req, res, next){
    req.status(422).send({error: err.message});
});

//initialize routes
app.use('/api/v1/', userRoutes);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(docs));
//testing route
app.get("/api/v1", (req,res) => {
    res.send("<h1>AFTER WATCH TOWER INSTALLATION</h1>");
    console.log("yeah it run--- made chahges");
});

module.exports= app;
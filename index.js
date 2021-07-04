const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const { 
    MONGO_USER,
    MONGO_PASSWORD, 
    MONGO_PORT, 
    MONGO_IP, 
} =require("./config/config");

const app = express();


//dynamically knows which way app is deployed ( docker-compose or local deployment)
const mongoURL = (MONGO_USER&&MONGO_PASSWORD ?
                 `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin` :
                 `mongodb://localhost:${MONGO_PORT}/?authSource=admin` ); 

const connectWithRetry = () => {
    mongoose
    .connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Successfully connected to DB"))
    .catch((e) => {
        console.log(e);
        setTimeout(connectWithRetry, 5000)
    });
}; 

connectWithRetry();

//refer this - https://stackoverflow.com/questions/23413401/what-does-trust-proxy-actually-do-in-express-js-and-do-i-need-to-use-it/42765157   
app.enable("trust proxy");

//Middlewares
// app.use(express(static('public')));
app.use(express.json());
// setting cross origin policy
app.use(cors());
//error handling 
app.use(function(err, req, res, next){
    req.status(422).send({error: err.message});
});

//initialize routes
app.use('/api/v1/users', userRoutes);

//sample routes
app.get("/api/v1", (req,res) => {
    res.send("<h1>AFTER WATCH TOWER INSTALLATION</h1>");
    console.log("yeah it run--- made chahges");
});

//listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
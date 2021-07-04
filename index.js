var app = require('./app.js');
const mongoose = require('mongoose');
const { 
    MONGO_USER,
    MONGO_PASSWORD, 
    MONGO_PORT, 
    MONGO_IP, 
    PORT
} =require("./config/config");

//setting the connection URL
const mongoURL = (MONGO_USER&&MONGO_PASSWORD ?
                 `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin` :
                 `mongodb://localhost:${MONGO_PORT}/?authSource=admin` ); 
// Database connection
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

//listen for requests
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
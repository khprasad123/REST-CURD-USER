const request = require('supertest');
const mongoose = require("mongoose");
const supertest = require("supertest");
const User = require("./models/userModel");
const { 
    MONGO_USER,
    MONGO_PASSWORD, 
    MONGO_PORT, 
    MONGO_IP, 
} =require("./config/config");

var app = require('./app.js');

app.listen(5000, () => {
    console.log("Server has started!");
});


const mongoURL = (MONGO_USER&&MONGO_PASSWORD ?
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/JestDB` :
    `mongodb://localhost:${MONGO_PORT}/JestDB` ); 

beforeEach((done) => {
    mongoose.connect(mongoURL,
        { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});
      
afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
    });
});


test("GET /api/v1/users", async () => {
    const user = await User.create({ name: "Kavya", dob: "15041996" });
  
    await supertest(app).get("/api/v1/users")
      .expect(200)
      .then((response) => {
        // Check type and length
        expect(response.body.length).toEqual(1);
        expect(response.body.data.users[0].name).toBe(user.name);
    });
  });


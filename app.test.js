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

const mongoURL = (MONGO_USER&&MONGO_PASSWORD ?
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/JestDB` :
    `mongodb://localhost:${MONGO_PORT}/JestDB` ); 

    //server startup
app.listen(5000, () => { console.log("Server has started! at 5000")});

//setting hooks
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


//Basic Test Cases
test("GET /api/v1/users", async () => {
    const user = await User.create({ name: "Kavya", dob: "15041996" });
    await supertest(app).get("/api/v1/users")
      .expect(200)
      .then((response) => {
        expect(response.body.length).toEqual(1);
        expect(response.body.data.users[0].name).toBe(user.name);
    });
  });



test("POST /api/v1/users/", async () => {
    const user = { name: "Kavya", address: "dasdasdasd" };
    await supertest(app).post(`/api/v1/users/`)
      .send(user)
      .expect(201)
      .then((response) => {
        expect(response.body.data.user.name).toBe(user.name);
        expect(response.body.data.user.address.toString()).toBe(user.address);
    });
});



test("GET /api/v1/users/{id}", async () => {
    const user = await User.create({ name: "Kavya", dob: "15041996" });
    await supertest(app).get(`/api/v1/users/${user._id}`)
      .expect(200)
      .then((response) => {
        expect(response.body.data.user._id.toString()).toBe(user._id.toString());
        expect(response.body.data.user.name).toBe(user.name);
    });
});



test("PATCH /api/v1/users/", async () => {
    var user1 = await User.create({ name: "Kavya", dob: "15041996" });
    var user2= { name: "Hari"};
    await supertest(app).patch(`/api/v1/users/${user1._id}`)
      .send(user2)
      .expect(200)
      .then((response) => {
        expect(response.body.data.user.name).toBe(user2.name);
    });
});


test("DELETE /api/v1/users/{id}", async () => {
    const user = await User.create({ name: "Kavya", dob: "15041996" });
    await supertest(app).delete(`/api/v1/users/${user._id}`)
      .expect(200)
});





const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        require: [true, "User must have an id"],
    },
    name: {
        type: String,
        require: [true, "User must have a name"],
    },
    dob: {
        type: Date,
        require: [true, "User must have dob"],
    },
    address: {
        type: String,
        default: "NIL",
    },
    description: {
        type: String,
        default: "NIL",
    },
    createdAt:{
        type: Date,
        default: new Date().getDate().toString(),
    }
});


const User = mongoose.model("user", userSchema);
module.exports = User;
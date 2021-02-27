const   mongoose = require("mongoose"),
        passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String
    },
    permanentAddress : {
        street: String,
        city: String,
        state: String,
        zip: Number
    },
    currentAddress : {
        location: String
    },
    username: String,
    password: String,
    contact : {
        phone: Number,
        email: String
    },
    gender: String,
    age: String,
    role: {type: String, default: "notAdmin"},
    isAdmin : {type: Boolean, default: false},
    joinedAt:{type:Date, default:Date.now}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
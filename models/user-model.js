const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    issueedBook:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: false
    },
    issuedDate:{
        type: String,
        required: false
    },
    returnedDate:{
        type: String,
        required: false
    },
    subscriptionType:{
        type: String,
        required: true
    },
    subscriptionDate:{
        type: String,
        required: true
    },
},{
    timestamps: true,
})

module.exports = mongoose.model("User", userSchema);
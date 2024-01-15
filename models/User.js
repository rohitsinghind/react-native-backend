const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "Please enter a name"]
    },
    age:{
        type:String,
        require:[true, "Please enter an age"]
    },
    email:{
        type:String,
        require:[true, "Please enter an email"],
        unique:[true,"Email already exists"]
    },
    phone:{
        type:String,
        require:[true, "Please enter a phone No."],
        unique:[true,"Phone No. already exists"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema)
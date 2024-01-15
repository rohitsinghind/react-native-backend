const mongoose = require("mongoose")

exports.connectDatabase = () => {
    mongoose
        .connect('mongodb+srv://rohit:rohit@cluster0.yankvtu.mongodb.net/?retryWrites=true&w=majority')
        .then((con) => console.log(`Database Connected: ${con.connection.host}`))
        .catch((err) => console.log(err))
}
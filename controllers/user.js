const User = require("../models/User")

exports.register = async (req, res) => {
    try {
        
        const {name, email, phone, age} = req.body;

    
        let user = await User.findOne({email});
        if(user){
            return res
                .status(400)
                .json({success:false, message:"User already exist"})
        }

        user = await User.create({
            name,
            age,
            email,
            phone
        }
        )

        res.status(201).json({
            success: false,
            message:"User Added",
            user:user
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()

        res.status(200).json({
            success:true,
            users:users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
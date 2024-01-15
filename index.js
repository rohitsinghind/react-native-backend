const {connectDatabase} = require('./database')
const express = require("express")
var cors = require('cors')
const path = require('path')

connectDatabase()

const app = express()

app.use(cors())
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb", extended:true}))

const user = require("./routes/user")

 app.use("/api/v1",user);

 app.use(express.static(path.join(__dirname,"./client/dist")))

 app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./client/dist/index.html"))
 })

app.listen(4000,() => {
    console.log('Server is running on port 4000')
})


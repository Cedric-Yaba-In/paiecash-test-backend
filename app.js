//DotEnv setup
require('dotenv').config()

//Express setup
const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.get("/", (req,res)=>{
    res.json({message: "Welcome to PaieCash test app"})
})

//Sequilize setup
const db = require("./shared/db")
db.sequelize.sync()
.then(()=>console.log("Connected DB"))
.catch((err)=>{
    console.error("Failed to sync",err.message)
})


//Setup router
const router = express.Router()
const routes = require("./routes")

router.use("/auth",routes.authRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`PaieCash Test Server Started on port ${process.env.PORT}`)
})
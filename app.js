//DotEnv setup
require('dotenv').config()

//Express setup
const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors({
    origin:"*"
}))

app.use(express.json({ limit: '50000mb' }))

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

//Setup JWT
const expressJWT = require("express-jwt")
app.use(expressJWT.expressjwt({
    secret:process.env.JWT_SECRET,
    algorithms: ["HS256"],
    credentialsRequired: false,
}))

//Setup router
const routes = require("./routes")
app.use("/auth",routes.authRouter)
app.use("/package",routes.packageRouter)
app.use("/user",routes.userRouter)
app.use("/product",routes.productRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`PaieCash Test Server Started on port ${process.env.PORT}`)
})
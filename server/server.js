const express= require ("express")
require("dotenv").config()
const dbConnect  = require("./config/db")
const cors = require('cors')

const app= express()
dbConnect()
app.use(cors())
app.use(express.json())

const registrationRoutes = require ("./Routes/RagistrationRoutes")

app.use ("/",registrationRoutes)  

   


app.listen(process.env.PORT, () => {
    console.log(`Server has been Started on Port ${process.env.PORT}`);
})
const express= require ("express")
require("dotenv").config()
const dbConnect  = require("./config/db")
const cors = require('cors')

const app= express()
dbConnect()
app.use(cors())
app.use(express.json())

const registrationRoutes = require ("./Routes/UserRoutes")
const productRoutes = require("./Routes/ProductRoutes")   
const CartRoutes = require("./Routes/CartRoute")   
const OrderRoutes = require("./Routes/OrderRoute")   

app.use ("/",registrationRoutes) 
app.use("/product",productRoutes)            
app.use("/cart",CartRoutes)            
app.use("/order",OrderRoutes)            

   


app.listen(process.env.PORT, () => {
    console.log(`Server has been Started on http://localhost:${process.env.PORT}`);
})
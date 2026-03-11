require('dotenv').config()
const express = require ('express')
const connection = require ('./config/connection')
const app = express()
const port = process.env.PORT
const routes = require('./controller/index')
const errorHandler = require('./middlewares/errorHandler')
const authentication = require('./middlewares/auth')
const userRoute = require('./routes/userRoute')


app.use(express.json())
app.use(express.urlencoded())


app.use('/users', userRoute)
app.use(authentication)
app.use('/products', routes)
app.listen(port,()=> {
    console.log(`connect to port ${port}`)
})


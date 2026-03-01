const express = require ('express')
const connection = require ('./config/connection')
const app = express()
const port = 3000
const routes = require('./controller/index')

app.use(express.json())
app.use(express.urlencoded())

app.use('/', routes)

app.listen(port,()=> {
    console.log(`connect to port $ {port}`)
})
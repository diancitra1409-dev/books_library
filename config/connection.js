const mongoose = require ('mongoose')
const {setServers}=require('node:dns').promises
setServers(["1.1.1.1", "8.8.8.8"])

mongoose.connect('mongodb+srv://diancitra1409_db_user:pNA6XTWRKsrtOiry@latihan1.1ksvthm.mongodb.net/testbooks')

.then (()=> console.log('connected to mongodb!'))
.catch ((err)=> console.log('error connecting',err))

module.exports = mongoose
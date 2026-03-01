const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const booksSchema = new Schema ({
    id: ObjectId,
    nama: String,
    penulis: String,
    harga: Number,
    deskripsi: String
}, {timestamps: true})

const book=mongoose.model('book', booksSchema)

module.exports = book 
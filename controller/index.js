const express = require ('express')
const router = express.Router()
const book = require('../models/books')




// READ ALL
router.get('/', async (req, res, next) => {
  try {
    const books = await book.find();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
});

// READ BY ID
router.get('/:id', async (req, res, next) => {
  try {
    const book = await book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
});

// CREATE
router.post('/', async (req, res, next) => {
  try {
    let { nama, penulis, harga, deskripsi } = req.body;

    harga = Number(harga);

    const newBook = await book.create({
      nama,
      penulis,
      harga,
      deskripsi
    });

    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
});

// UPDATE
router.put('/:id', async (req, res, next) => {
  try {
    let { nama, penulis, harga, deskripsi } = req.body;

    harga = Number(harga);

    const updatedBook = await book.findByIdAndUpdate(
      req.params.id,
      { nama, penulis, harga, deskripsi },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
});

// DELETE
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedBook = await book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({
      message: `Book with id ${req.params.id} has been deleted`
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

/*
//read all data
router.get('/', (req, res) => {
    book.find()
        .then(books => {
            res.json(books)
        })
        .catch(err => {
            res.send(err)
        })
    })

//read data byId
router.get('/:id', (req, res) => {
    book.findById(req.params.id)
        .then(book => {
            res.json(book)
        })
        .catch(err => {
            res.send(err)
        })
    })


//create data
router.post('/',(req,res)=> {
    let{nama, penulis, harga, deskripsi}=req.body

    harga=Number(harga)

    book.create({nama, penulis,harga,deskripsi})

    .then(book=>{
        res.json(book)
    })
    .catch(err=>{res.json(err)})
})

//update data
router.put('/:id',(req,res)=> {
    let{nama, penulis, harga, deskripsi}=req.body

    harga=Number(harga)

    book.findByIdAndUpdate(req.params.id, {nama, penulis,harga,deskripsi})

    .then(book=>{
        res.json(book)
    })
    .catch(err=>{res.json(err)})
})

//delete data
router.delete('/:id', (req, res) => {
    book.findByIdAndDelete(req.params.id)
        .then(book => {
            res.json(message=`id ${req.params.id} has been deleted!`)
        })
        .catch(err => {
            res.send(err)
        })
    })

    module.exports = router;
*/
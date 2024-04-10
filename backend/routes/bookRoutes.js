const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookControllers');
const {protect} = require('../middleware/authmiddleware');

router.post('/createBook', protect, bookController.createBook); //create book in store

router.get('/getBookByCategory/:category', bookController.getBookByCategory);// get books by category
router.get('/allbooks', bookController.getAllBooks); //get all books from the database
router.get('/getBookById/:id', bookController.getBookById); //get a single book using its id
router.get('/getBookByAuthor/:author', bookController.getBookByAuthor); //get books by author name

router.put('/updateBook/:id', protect, bookController.updateBook); // update a specific book

router.delete('/deleteBook/:id', protect, bookController.deleteBook) ;// delete a specific book

module.exports = router; 
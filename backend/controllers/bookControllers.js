const express = require( 'express' );
const asyncHandler = require('express-async-handler');
const Book = require('../models/bookModel');

exports.createBook = asyncHandler(async(req,res) => {
    try{
    let data = req.body;

    //check if all fields have been added
    if( !data.title || !data.image || !data.description || !data.category || !data.author){
        res.status(400);
        throw new Error("Missing fields");
    }

    //Create a book using the model
    const  createbook = new Book({
        title: data.title,
        image: data.image,
        author: data.author,
        description: data.description,
        category: data.category,
        
    });

    //save and return  the created book
    const savedBook = await  createbook.save();
    res.status(201).json(savedBook);
    
}catch(err){
    throw new Error( err );
}
});

//get books by category
exports.getBookByCategory = asyncHandler( async (req , res )=>{
    try{
    //find book by category
    const { category }= req.params ;
    const book = await Book.find({category});

    //send fetched book as response
    res.status(200).json(book);
    } catch(error){
        res.status(400).json({message : error.message});
    }
});

//get books by author
exports.getBookByAuthor = asyncHandler( async (req , res )=>{
    try{
    //find book by author
    const { author }= req.params ;
    const book = await Book.find({author});

    //send fetched book as response
    res.status(200).json(book);
    } catch(error){
        res.status(400).json({message : error.message});
    }
});

//get book by id
exports.getBookById = asyncHandler(async(req,res) => {
    try{
        const book = await Book.findById(req.params.id);

        if(!book) {
            return res.status(404).json({ message : 'Book not found'})
        }

        res.status(200).json(book);

    } catch(error){
        res.status(400).json({message : error.message});
    }
})

// Controller function to get all books
exports.getAllBooks = async (req, res) => {
    try {
        // Fetch all books from the database
        const books = await Book.find();

        // Send the fetched books as a response
        res.status(200).json(books);
    } catch (err) {
        // Handle any errors
        res.status(500).json({ message: err.message });
    }
};

//controller function to update  a book
exports.updateBook= asyncHandler( async (req , res , next)=> {
    let updateBook = await Book.findByIdAndUpdate(req.params.id , req.body , {new : true })
    res.json(updateBook);
});

//controller function to delete a book
exports.deleteBook = asyncHandler(async (req ,res ,next)=>{
    const book = await Book.findById({_id : req.params.id})
    if(!book)
    {
        return res.status(404).json({message:"No book found"})
    }
    await Book.deleteOne({_id : req.params.id})
    res.json(book);
});

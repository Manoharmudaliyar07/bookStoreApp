import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const Book = mongoose.model("Book", bookSchema); // any field data is stored in book collection

export default Book;
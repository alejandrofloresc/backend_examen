import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: String,
    author: String,
    isbn: String,
    



},
{
    timestamps: true,
    versionKey: false
})

export default model('Book', bookSchema );
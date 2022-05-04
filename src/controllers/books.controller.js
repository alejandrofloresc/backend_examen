import Books from "../models/Books";


export const createBook = async (req, res) => {
    const { title, author, isbn } = req.body

    const newBook = new Books({
        title, author, isbn
    });

    const bookSaved = await newBook.save();

    res.status(201).json(bookSaved);
}

export const getBooks = async (req, res) => {
    const books = await Books.find();
    res.json(books);
}

export const getBookById = async (req, res) => {
    const book = await Books.findById(req.params.bookId);
    res.status(200).json(book);
}

export const updateBookById = async (req, res) => {
    const updateBook = await Books.findByIdAndUpdate(req.params.bookId, req.body, {
        new: true
    });

    res.status(200).json(updateBook);
}

export const deleteBookById = async (req, res) => {
    const deleteBook = await Books.findByIdAndDelete(req.params.bookId);
    res.status(204).json(deleteBook);
}

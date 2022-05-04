import { Router } from "express";
const router = Router();

import {
    createBook,
    getBooks,
    getBookById,
    updateBookById,
    deleteBookById
} from '../controllers/books.controller';



router.get('/', getBooks);
router.post('/', createBook);
router.get('/:bookId', getBookById);
router.put('/:bookId', updateBookById);
router.delete('/:bookId', deleteBookById);





export default router;
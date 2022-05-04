import express from "express";
import morgan from "morgan";

import booksRoutes from './routes/books.routes';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res) =>{
res.json('welcome');
});


app.use('/api/books', booksRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/user',userRoutes);
export default app;
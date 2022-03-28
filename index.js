import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/articles.js';
import loginRouter from './routes/login.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use('/articles', routes);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
	res.send('Welcome, this is from Blog backend');
});

mongoose
	.connect(process.env.DB_URL)
	.then(() =>
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`)),
	)
	.catch((error) => console.log('Server error: ', error));

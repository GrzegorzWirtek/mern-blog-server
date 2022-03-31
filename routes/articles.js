import express from 'express';

import {
	getArticles,
	addComment,
	addArticle,
	deleteArticle,
} from '../controllers/article.js';

const router = express.Router();

router.get('/', getArticles);
router.post('/comments', addComment);
router.post('/addarticle', addArticle);
router.post('/deletearticle', deleteArticle);

export default router;

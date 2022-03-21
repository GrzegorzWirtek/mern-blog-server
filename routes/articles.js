import express from 'express';

import { getArticles, addComment, addArticle } from '../controllers/article.js';

const router = express.Router();

router.get('/', getArticles);
router.post('/comments', addComment);
router.post('/addarticle', addArticle);

export default router;

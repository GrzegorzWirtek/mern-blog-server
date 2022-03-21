import DBArticle from '../models/articleModel.js';

export const getArticles = async (req, res) => {
	try {
		const articles = await DBArticle.find();
		res.status(201).send(articles);
	} catch (error) {
		console.log('Get articles error: ', error);
	}
};

export const addComment = async (req, res) => {
	const { id, name, comment, date } = req.body;
	try {
		const data = await DBArticle.findOneAndUpdate(
			{ _id: id },
			{ $push: { comments: { name, date, comment } } },
			{ new: true },
		);
		const { _id, comments } = data;

		res.send({ _id, comments });
	} catch (error) {
		console.log('Add comment server error: ', error);
	}
};

export const addArticle = async (req, res) => {
	const article = req.body;
	console.log(req.body);
	try {
		const newArticle = DBArticle(article);
		await newArticle.save();
		const articles = await DBArticle.find();
		res.status(201).send(articles);
	} catch (error) {
		console.log('Add comment server error: ', error);
	}
};

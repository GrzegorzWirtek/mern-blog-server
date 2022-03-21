import mongoose from 'mongoose';
const ArticleSchema = mongoose.Schema;

const getCurrentDate = () => {
	const cD = new Date();
	const date = `${cD.getDate()}/${cD.getMonth() + 1}/${cD.getFullYear()}`;
	return date;
};

const articleSchema = new ArticleSchema({
	imgNames: [Object],
	date: { type: String, default: getCurrentDate() },
	title: String,
	text: [String],
	googleMaps: Object,
	comments: [Object],
});

const DBArticle = mongoose.model('article', articleSchema);
export default DBArticle;

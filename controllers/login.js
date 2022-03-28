import DBLogin from '../models/loginModel.js';

const ID = '6241b421513ef8a1538670af';

export const login = async (req, res) => {
	const { login, password } = req.body;
	try {
		const dataFromMongo = await DBLogin.findOneAndUpdate(
			{ _id: ID },
			{ $inc: { numberOfAttempts: -1 } },
			{ new: true },
		);
		if (dataFromMongo.numberOfAttempts > 0) {
			if (
				dataFromMongo.login === login &&
				dataFromMongo.password === password
			) {
				const loginData = await DBLogin.findOneAndUpdate(
					{ _id: ID },
					{ numberOfAttempts: 3 },
					{ new: true },
				);
				res.send({
					blocked: false,
					login: true,
					attempts: loginData.numberOfAttempts,
				});
			} else {
				res.send({
					login: false,
					blocked: false,
					attempts: dataFromMongo.numberOfAttempts,
				});
			}
		} else {
			if (
				dataFromMongo.login === login &&
				dataFromMongo.password === password
			) {
				const loginData = await DBLogin.findOneAndUpdate(
					{ _id: ID },
					{ numberOfAttempts: 3 },
					{ new: true },
				);
				res.send({
					blocked: false,
					login: true,
					attempts: loginData.numberOfAttempts,
				});
			} else {
				res.send({
					blocked: true,
					login: false,
					attempts: 0,
				});
			}
		}
	} catch (error) {
		console.log('Login error: ', error);
	}
};

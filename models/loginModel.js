import mongoose from 'mongoose';
const LoginSchema = mongoose.Schema;

const loginSchema = new LoginSchema({
	numberOfAttempts: { type: Number, default: 3 },
	login: String,
	password: String,
});

const DBLogin = mongoose.model('login', loginSchema);
export default DBLogin;
